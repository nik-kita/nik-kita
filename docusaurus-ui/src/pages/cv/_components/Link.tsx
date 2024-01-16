import { useRef } from "react";

export default function Link({ href, label, title }: Props) {
  const href_ref = useRef(href);
  const target = (
    <a
      className="cursor-pointer hover:no-underline hover:bg-slate-300 mx-1"
      href={href_ref.current}
    >
      {label}
    </a>
  );

  return title
    ? (
      <span>
        {title} {target}
      </span>
    )
    : target;
}

type Props = {
  title?: string;
  label: string;
  href: string;
};
