import AvaBlock from "./_components/AvaBlock";
import CvBlock from "./_components/CvBlock";
import CvBlockItem from "./_components/CvBlockItem";
import More from "./_components/More";
import Skills from "./_components/Skills";
import { CONTENT } from "./_const/content";
import { tw } from "../../utils/tw";
// @ts-ignore
import SelectReferenceLetter from "@site/static/files/selecto-reference-letter.pdf";

const { experience, summary, education } = CONTENT;

function App() {
  return (
    <div
      className={tw(
        "print:px-1",
        "xl:px-[10%]",
      )}
    >
      <AvaBlock />
      <CvBlock title="Summary">
        <CvBlockItem content={summary} />
      </CvBlock>
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
            <a
              className="italic underline text-sm cursor-pointer hover:bg-slate-200 px-1"
              href={SelectReferenceLetter}
            >
              Reference letter (pdf)
            </a>
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
      <Skills />
      <CvBlock title="Education">
        <CvBlockItem content={education} />
      </CvBlock>
      <More />
    </div>
  );
}

export default App;
