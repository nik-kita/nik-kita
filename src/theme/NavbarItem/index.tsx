import React from "react";
import NavbarItem from "@theme-original/NavbarItem";
import { tw } from "@site/src/utils/tw";

export default function NavbarItemWrapper({ logo, ...props }: Props) {
  // TODO
  return <NavbarItem {...props} />;
}

type Props = {
  logo?: {
    alt?: string;
    src?: string;
  };
};
