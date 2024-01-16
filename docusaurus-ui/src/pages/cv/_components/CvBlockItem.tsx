import { ReactNode } from "react";
import { tw } from "../../../utils/tw";

export default function CvBlockItem(
  { subtitles, content, footer, children }: Props,
) {
  return (
    <div>
      <p className={tw("print:text-xs")}>
        {subtitles?.map((s, i) => {
          return (
            <>
              <span className="font-normal" key={i}>{s}</span>
              <br />
            </>
          );
        })}
        <span>{content}</span>
      </p>
      {children}
      {footer}
    </div>
  );
}

type Props = {
  content?: string | ReactNode;
  subtitles?: (string | ReactNode)[];
  footer?: ReactNode;
  children?: ReactNode;
};
