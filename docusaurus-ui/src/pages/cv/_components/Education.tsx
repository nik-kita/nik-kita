import CvBlock from "./CvBlock.tsx";
import CvBlockItem from "./CvBlockItem.tsx";
import { CONTENT } from "../_const/content.ts";

export default function Education() {
  return (
    <CvBlock title="Education">
      <CvBlockItem content={CONTENT.education} />
    </CvBlock>
  );
}
