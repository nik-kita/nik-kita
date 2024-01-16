import { CONTENT } from "../_const/content";
import CvBlock from "./CvBlock";
import CvBlockItem from "./CvBlockItem";
import Link from "./Link";

const { experience } = CONTENT;

export default function Experience() {
  return (
    <CvBlock title="Experience">
      <CvBlockItem
        subtitles={[
          experience.ex2.position,
          experience.ex2.company,
          experience.ex2.time,
        ]}
        content={experience.ex2.details}
      />
      <CvBlockItem
        subtitles={[
          experience.selecto_global.position,
          experience.selecto_global.company,
          experience.selecto_global.time,
        ]}
        content={experience.selecto_global.details}
        footer={
          <Link
            href={require(
              "@site/static/files/selecto-reference-letter.pdf",
            ).default}
            label={"Reference letter (pdf)"}
          />
        }
      />
      <CvBlockItem
        subtitles={[
          experience.onix_be.position,
          experience.onix_be.company,
          experience.onix_be.time,
        ]}
        content={experience.onix_be.details}
      />
      <CvBlockItem
        subtitles={[
          experience.onix_qa.position,
          experience.onix_qa.company,
          experience.onix_qa.time,
        ]}
        content={experience.onix_qa.details}
      />
    </CvBlock>
  );
}
