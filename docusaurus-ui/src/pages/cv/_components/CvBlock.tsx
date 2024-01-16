import { Slot } from "@site/src/components/slot.type";
import { PropsWithChildren } from "react";
import { tw } from "../../../utils/tw";
import CvTitle from "./CvTitle";

export default function CvBlock(
  { title, Title = CvTitle, children, className, one_page_print = true }: Props,
) {
  return (
    <div
      className={tw(
        one_page_print && "print:break-inside-avoid",
        "flex flex-col px-2",
        className,
      )}
    >
      {<Title title={title} />}
      <div>
        {children}
      </div>
    </div>
  );
}

type Props = PropsWithChildren<Slot<"title">> & {
  className?: string;
  one_page_print?: boolean;
};
