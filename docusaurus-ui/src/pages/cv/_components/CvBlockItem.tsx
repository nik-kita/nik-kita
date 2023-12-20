import { ReactNode } from "react";
import { tw } from "../../../utils/tw";

export default function CvBlockItem({ subtitles, content, footer }: Props) {
  return (
    <div>
      <p className={tw("py-2 text-lg", "print:text-xs")}>
        {subtitles?.map((s, i) => {
          return (
            <>
              <span className={tw("font-bold")} key={i}>{s}</span>
              <br />
            </>
          );
        })}
        <span>{content}</span>
      </p>
      {footer}
    </div>
  );
}

type Props = {
  content?: string | ReactNode;
  subtitles?: (string)[];
  footer?: ReactNode;
};
