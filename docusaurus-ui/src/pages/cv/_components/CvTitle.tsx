import { tw } from "../../../utils/tw";

export default function CvTitle({ title }: Props) {
  return (
    <div className={tw("flex flex-nowrap")}>
      <h4
        className={tw(
          "whitespace-nowrap",
          "uppercase text-lg font-normal",
        )}
      >
        {title}
      </h4>
      <div className={tw("flex w-full pl-3 pr-2 py-1")}>
        <span className={tw("bg-slate-300 w-full")}></span>
      </div>
    </div>
  );
}

type Props = {
  title: string;
};
