import { CONTENT } from "../_const/content";
import { tw } from "../../../utils/tw";
import CvBlock from "./CvBlock";
import Ava from "@site/static/img/in-opera.ava.png";

const contacts = (
  <ul className={tw("flex flex-col")}>
    <a
      href={`mailto:${CONTENT.contacts.email}`}
    >
      {CONTENT.contacts.email}
    </a>
    <span>
      Instagram:{" "}
      <a
        href={`${CONTENT.contacts.instagram}`}
      >
        {CONTENT.contacts.instagram}
      </a>
    </span>
    <span>
      Telegram:{" "}
      <a href={`${CONTENT.contacts.telegram}`}>{CONTENT.contacts.telegram}</a>
    </span>
    <span>{CONTENT.contacts.address}</span>
    <a href={`tel:${CONTENT.contacts.tel}`}>{CONTENT.contacts.tel}</a>
  </ul>
);

export default function AvaBlock() {
  return (
    <div
      className={tw(
        "flex flex-col-reverse",
        "print:flex-row",
        "md:flex-row",
        "justify-center",
      )}
    >
      <div className={tw("w-full flex flex-col")}>
        <CvBlock title="Contacts">
          {contacts}
        </CvBlock>
        <CvBlock title="Languages">
          <p>Ukrainian - Native</p>
          <p>English - Upper intermediate</p>
        </CvBlock>
      </div>
      <img
        className={tw("self-center")}
        src={Ava}
      />
    </div>
  );
}
