---
sidebar_position: 1
---

# Intro

:::info links

- [Brickyard on jsr](https://jsr.io/@nik-kita/brickyard)
- [GitHub repository](https://github.com/nik-kita/brickyard)

:::

## Motivation

Simple and straightforward mock/replacement/modification of your functions.
Your app is house and your code is bricks.
Simply register some bricks in `Brickyard` and have optional possibility do this dynamically
when and where you want.

### Problem example:

* Suppose you have function `hi()`
* Suppose it make api call but you don't need it for now, want to test etc.
* And of course you don't want this only once, sometimes, like exception, not in prod
* But yes, you don't want make code modifications in code every time you want to skip original functionality

### Solution with `Brickyard`:
> one of possible examples

1. in `brickyard.enroll.ts` register you `hi()` function:
  ```ts
  import { hi } from './hi'
  import { Brickyard } from '@nik-kita/brickyard'

  export const bricks = Brickyard.init().enroll({ hi });
  ```
2. in your `main.ts` instead of import directly `hi()` function => import `bricks`:
  ```ts
  import { bricks } from './brickyard.enroll.ts'

  briks.hi()
  ```
3. For now your code is working without any changes! `bricks.hi()` exactly the same as `hi()`!

4. But create `brickyard.interceptor.ts`:
  ```ts
  import { Brickyard } from '@nik-kita/brickyard'

  export const { complete } = Brickyard.pre_init().intecept('hi', { fn: () => console.log('hi!, i was intercepted!') });
  ```
5. And make it to be imprted before `brickyard.enroll.ts`:
  ```ts
  import { hi } from './hi'
  import { Brickyard } from '@nik-kita/brickyard'
  import { complete } from './brickyard.interceptor'

  export const bricks = Brickyard.init(complete()).enroll({ hi });
  ```
6. Now your `hi()` is intecepted!

7. How to make such manipulation silent?
  * honestly speaking this part is need some beautification... but:
  * add `brickyard.interceptor.ts` to your `.gitignore` file
  * yes, you should create it manually or will have error with imports... that is not really beauty
    ```ts
    // brickyard.interceptor.ts
    import { Brickyard } from '@nik-kita/brickyard'

    // little strange... but it is example of aka empty interceptor
    export const { complete } = Brickyard
      .pre_init('_no_such_function_existed', { fn: () => {} });
    ```
  * however you can then make modifications in it but for git your code still be the same!

