---
sidebar_position: 1
---

# Intro

:::info links

- [SugarWs on Deno Land](https://deno.land/x/sugar_ws)
- [SugarWs on npm](https://www.npmjs.com/package/sugar_ws)
- [GitHub repository](https://github.com/nik-kita/sugar_ws) :::

## Motivation

WebSocket technology is a powerful tool but can be complicated to use because of
its event-driven nature. Unlike simple function calls, WebSocket has four
states: connecting, open, closing, and closed, which adds to its complexity,
especially when error handling is also considered. Often, it's simpler to write
an API with HTTP than with WebSocket, even in cases where WebSocket would be the
better choice. This module was created to simplify the control over WebSocket
states and to add functionality, making it easier to use.

## Usage in React (Preact)

You can import `useWs` hook from this module for these frameworks.

## Usage on backend

An important aspect of this module is its versatility. It can be used not only
in front-end development but also in back-end applications, particularly with
Deno.js. Deno.js's WebSocket implementation mirrors that in browsers, adhering
closely to web API standards. This compatibility ensures a consistent experience
across both front-end and back-end development, enhancing the module's
usefulness in a wide range of scenarios.

### So what is this?

`SugarWs` is simple wrapper around native browser `WebSocket`.

```ts title='fragment from the original code - simple wrapper'
export class SugarWs extends WebSocket {
  // ...
}
```
