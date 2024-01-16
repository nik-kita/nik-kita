import { tw } from "../../utils/tw";
import AvaBlock from "./_components/AvaBlock";
import Certifications from "./_components/Certifications";
import Education from "./_components/Education";
import Experience from "./_components/Experience";
import Link from "./_components/Link";
import More from "./_components/More";
import Skills from "./_components/Skills";
import Summary from "./_components/Summary";

function App() {
  return (
    <div
      className={tw(
        "font-sans font-light",
        "print:px-1",
        "xl:px-[10%]",
      )}
    >
      <AvaBlock />
      <Summary />
      <Experience />
      <Skills />
      <Education />
      <Certifications />
      <More />
    </div>
  );
}

export default App;
