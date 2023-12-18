import useBaseUrl from "@docusaurus/useBaseUrl";
import { tw } from "@site/src/utils/tw";

export default function FooterLinkItem({ item }: Props) {
  const { to, href, label, prependBaseUrlToHref, src, ...props } = item;
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });

  return (
    <a
      className={tw(
        "flex flex-nowrap justify-start",
        "hover:bg-slate-100",
        "p-2 gap-2",
        "rounded-sm",
      )}
      {...(href
        ? {
          href: prependBaseUrlToHref ? normalizedHref : href,
        }
        : {
          to: toUrl,
        })}
      {...props}
    >
      {src && (
        <img
          className={tw("avatar__photo", "h-[1.5em]")}
          src={src}
        />
      )}
      {label}
    </a>
  );
}

type Props = {
  item: any;
  /** // HACK
   * @description
   * property for path to src for little icon
   * near link
   */
  src?: string;
};
