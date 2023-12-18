import React from "react";
import LinkItem from "@theme/Footer/LinkItem";
import { tw } from "@site/src/utils/tw";

function ColumnLinkItem({ item }) {
  return item.html
    ? (
      <li
        className={tw("footer__item", "max-w-fit p-2")}
        // Developer provided the HTML, so assume it's safe.
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: item.html }}
      />
    )
    : (
      <li
        key={item.href ?? item.to}
        className={tw("footer__item", "max-w-fit p-1")}
      >
        <LinkItem item={item} />
      </li>
    );
}
function Column({ column }) {
  return (
    <div className={tw("col footer__col")}>
      <div
        className={tw(
          "text-2xl font-bold break-keep",
        )}
      >
        {column.title}
      </div>
      <ul
        className={tw(
          "text-xl",
          "flex flex-col flex-nowrap",
        )}
      >
        {column.items.map((item, i) => <ColumnLinkItem key={i} item={item} />)}
      </ul>
    </div>
  );
}
export default function FooterLinksMultiColumn({ columns }) {
  return (
    <div className="row footer__links">
      {columns.map((column, i) => <Column key={i} column={column} />)}
    </div>
  );
}
