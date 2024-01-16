import { ElementType } from "react";

export type Slot<T extends string> =
  & Record<T, string>
  & Partial<Record<Capitalize<T>, ElementType<Record<T, string>>>>;
