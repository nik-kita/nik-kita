import CvBlock from "./CvBlock";
import CvBlockItem from "./CvBlockItem";
import Link from "./Link";

export default function More() {
  return (
    <CvBlock title="More">
      <div className="flex flex-col">
        <Link
          title={"GitHub:"}
          href="https://github.com/nik-kita"
          label="github.com/nik-kita"
        />
        <Link
          title="Site:"
          href="https://nik-kita.deno.dev"
          label={"nik-kita.deno.dev"}
        />
        <Link
          title={"Linkedin:"}
          href="https://www.linkedin.com/in/nik-kita"
          label="linkedin.com/in/nik-kita"
        />
        <Link
          title={"StackOverflow:"}
          href="https://stackoverflow.com/users/14139506/nik-kita"
          label="stackoverflow.com/users/14139506/nik-kita"
        />
        <Link
          title={"CodeWars:"}
          href="https://www.codewars.com/users/nik-kita"
          label={"codewars.com/users/nik-kita"}
        />
        <Link
          title={"HackerRank:"}
          href="https://www.hackerrank.com/profile/nik_kita"
          label={"hackerrank.com/profile/nik_kita"}
        />
        <Link
          href="https://cssbattle.dev/player/nik_kita"
          title={"CssBattle:"}
          label={"cssbattle.dev/player/nik_kita"}
        />
        <Link
          href="https://leetcode.com/nik-kita"
          title={"LeetCode:"}
          label={"leetcode.com/nik-kita"}
        />
      </div>
    </CvBlock>
  );
}
