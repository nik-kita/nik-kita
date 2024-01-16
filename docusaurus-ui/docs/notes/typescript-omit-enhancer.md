---
sidebar_position: 1
---

# Enhancers for typescript's Omit utility type

Useful type for more strict control "dynamic" types created by
[Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)

```ts title='somewhere/in/your/utils/types.ts'
export type OmitStrict<
  T extends Record<string, any>,
  K extends keyof T,
> = Omit<T, K>;

export type OmitReplace<
  T extends Record<string, any>,
  U extends Record<string, any>,
> = keyof U extends (infer R extends keyof T) ? Omit<T, R> & U
  : never;

export type AddOrReplace<
  T extends Record<string, any>,
  U extends Record<string, any>,
> = Omit<T, keyof U> & U;
```
