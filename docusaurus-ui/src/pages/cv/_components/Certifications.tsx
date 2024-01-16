import { tw } from "../../../utils/tw.ts";
import CvBlock from "./CvBlock";
import CvBlockItem from "./CvBlockItem.tsx";
import Link from "./Link.tsx";

export default function Certifications() {
  return (
    <CvBlock title="Certifications" one_page_print={false}>
      <div
        className={tw("flex")}
      >
        <CvBlockItem
          content={[
            <Link
              href={"https://www.credly.com/badges/e97dd08f-0b6e-4d02-9c19-f08ab14a354c/public_url"}
              label="MongoDB Associate Developer"
            />,
            <a
              href={require(
                "@site/static/files/nik-moiseienko-certificate-mongo-associate-developer.pdf",
              ).default}
            >
              <img
                src={require(
                  "@site/static/img/mongodb-associate-developer.7.png",
                ).default}
              />
            </a>,
          ]}
        />
      </div>
    </CvBlock>
  );
}
