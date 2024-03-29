---
title: Delegating Control Over Input to a Child Component
tags: [react, reflections, lab]
date: '12-23-2023'
---

## Introduction

React offers two approaches for managing inputs: controlled and uncontrolled.
Controlled inputs, where the input value is explicitly managed by React
(typically using useState and handling changes with onChange()), allow for more
complex scenarios and precise control. Uncontrolled inputs delegate this
responsibility to the browser, resulting in a loss of fine-grained control over
the component's behavior.

In React, controlled inputs are generally preferred because they integrate
seamlessly with React's state management and lifecycle.

## Problem

A potential issue with controlled inputs is performance degradation. This occurs
because every keystroke triggers a rerender, which can affect the performance of
the component and its siblings.

<!-- truncate -->

:::info

### [Link to solution from official React documentation](https://react.dev/reference/react-dom/components/input#optimizing-re-rendering-on-every-keystroke)

The React documentation suggests isolating frequent rerenders in a smaller
component to prevent affecting sibling components. This is an effective and
straightforward solution. React Documentation on Optimizing Re-Renders

:::

:::warning

All the content written below represents my own thoughts and speculations, which
I developed while learning about this topic.

:::

## Pseudo-problem. The main topic of this post by the way.

Simply speaking it looks like we should isolate all stuff related to this input.
So the component where this input's value is used should be watch for these
rerenders to still actual. And the most common example is form.

---

**But what if I want to isolated from input's rerenders this parent component
that in other hand is interested in input's value?** So only when I need this
value - simply ask about it.

### My solution (honestly hardcode, that only fulfill above conditions, but can't be used in production)

The solution involves using `useState` for managing the input value and `useRef`
for a real-time representation of the input value. This method minimizes
rerenders in the parent component while keeping the input value accessible.

```jsx live noInline
// Count re-render of compoonents
let c = 0; // for "ComponentWithInput"
let i = 0; // for "Input"

function Input({ onValue }) {
  ++i; // update counter
  // the value of our input
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        // controlled input => we provide value explicitly and also should updated it
        value={value}
        onChange={(ev) => {
          setValue(ev.target.value); // update input's value
          // ALSO RETURN VALUE TO PARENT COMPONENT
          // WITHOUT ASKING HOW IT WILL USE THIS VALUE
          // BUT IF IT WILL WANT TO RESET VALUE
          // IT SHOULD CALL OUR FUNCTION (2nd argument)
          onValue(ev.target.value, () => {
            setValue("");
          });
        }}
      />
    </div>
  );
}

function ComponentWithInput() {
  ++c;
  // this is input's value but it represent the moment when it really needed (completed)
  const [message, setMessage] = useState("");
  // this is input's value at any moment (aka realtime)
  // so useRef is needed to avoid re-renders
  // because according to our goal parent component should not triggers on every 'onChange'
  const inputValue = useRef("");

  // HERE OUR MONKEY-PATCH
  // may be it also should be created with useRef... not important for now
  let reset;

  return (
    <div className="app">
      <p>message: {message || ""}</p>
      <Input
        // here we can instruct what we want to do with input
        // but here we don't know will user click "send"...
        onValue={(s, _reset) => {
          // MONKEY-PATCH 2nd part
          // we retreive this 'reset' from inner scope to outer
          // to give chance to our code use it somewhen
          reset = _reset;
          // sync value from input with our "not-display" value
          inputValue.current = s;
        }}
      />
      <Button
        onClick={() => {
          // MONKEY-PATCH final
          // may be this 'if' is not required
          if (reset) { // the problem is that I don't realize how it risky or now... is there chance that 'reset' is still 'undefined'...
            reset();
            setMessage(inputValue.current);
          }
          // and where and what we should do in 'else' block...?
        }}
      >
        send
      </Button>
    </div>
  );
}

function App() {
  const [componentCounter, setComponentCounter] = useState(c);
  const [inputCounter, setInputCounter] = useState(i);

  return (
    <div>
      <ComponentWithInput />
      <p>
        <br />
        <br />
        <br />
        RENDER STATISTIC:
        <br />
        Component: {componentCounter}
        <br />
        Input: {inputCounter}
      </p>
      <br />
      <br />
      <Button
        onClick={() => {
          setComponentCounter(c);
          setInputCounter(i);
        }}
      >
        Update statistic button
      </Button>
    </div>
  );
}

render(<App />);
```

# Conclusion:

Make blank the child's input in such situation is become little difficult. And
what if we want to add more and more details? So something like `options` with
possible `reset`, `isEnterPressed` or etc. should be used and it will become the
more and more difficult and buggy... So it looks like there is no optimal
solution for `half-controlled` or more precisely `half-uncontrolled`. If you
don't care about input in meaning that it should be and we want ask value at
some moment and that's all - so may be `uncontrolled` is possible variant. But
for `controlled` it looks like you should integrete it with parent that is
needed in it. So for performanse health -- make decomposition for this inputs
already with their consumers is best practice (this was already mentions in
official dos's solution)

### But may be I miss something?

`...loading...`

### Thoughts and Analysis about all above by ChatGPT

The original text effectively conveys the technical challenge of managing input
states in React applications, particularly the trade-offs between controlled and
uncontrolled inputs. However, the proposed solution, while innovative, appears
to be somewhat complex and might introduce additional maintenance challenges.
It's important to strike a balance between performance optimization and code
maintainability. The conclusion rightly points out that there might not be a
one-size-fits-all solution and that different scenarios may require different
approaches. The discussion opens up possibilities for further exploration and
optimization in React input management.
