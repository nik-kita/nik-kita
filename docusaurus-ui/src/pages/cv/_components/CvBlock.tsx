import { PropsWithChildren } from "react";
import { Slot } from "../../../utils/slot.type";
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
        "font-sans font-light",
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
