import { CONTENT } from "../_const/content";
import CvBlock from "./CvBlock";
import CvBlockItem from "./CvBlockItem";

const { summary } = CONTENT;

export default function Summary() {
  return (
    <CvBlock title="Summary">
      <CvBlockItem content={summary} />
    </CvBlock>
  );
}
