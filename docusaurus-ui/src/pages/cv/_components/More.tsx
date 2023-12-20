import CvBlock from "./CvBlock";
import CvBlockItem from "./CvBlockItem";

export default function More() {
  return (
    <CvBlock title="More">
      <CvBlockItem content={["https://nik-kita.deno.dev"]} />
      <CvBlockItem
        subtitles={["GitHub"]}
        content={<a href="https://github.com/nik-kita">github.com/nik-kita</a>}
      />
      <CvBlockItem
        subtitles={["Linkedin"]}
        content={
          <a href="https://www.linkedin.com/in/nik-kita">
            linkedin.com/in/nik-kita
          </a>
        }
      />
      <CvBlockItem
        subtitles={["StackOverflow"]}
        content={
          <a href="https://stackoverflow.com/users/14139506/nik-kita">
            stackoverflow.com/users/14139506/nik-kita
          </a>
        }
      />
      <CvBlockItem
        subtitles={["CodeWars"]}
        content={
          <a href="https://www.codewars.com/users/nik-kita">
            codewars.com/users/nik-kita
          </a>
        }
      />
      <CvBlockItem
        subtitles={["HackerRank"]}
        content={
          <a href="https://www.hackerrank.com/profile/nik_kita">
            hackerrank.com/profile/nik_kita
          </a>
        }
      />
      <CvBlockItem
        subtitles={["CssBattle"]}
        content={
          <a href="https://cssbattle.dev/player/nik_kita">
            cssbattle.dev/player/nik_kita
          </a>
        }
      />
      <CvBlockItem
        subtitles={["LeetCode"]}
        content={
          <a href="https://leetcode.com/nik-kita">leetcode.com/nik-kita</a>
        }
      />
      <CvBlockItem
        subtitles={["My npm/deno modules"]}
        content={
          <ul>
            <li>
              <a href="https://www.npmjs.com/package/sugar_ws">
                npmjs.com/package/sugar_ws
              </a>
            </li>
            <li>
              <a href="https://deno.land/x/sugar_ws">deno.land/x/sugar_ws</a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/@nik-kita/promitter">
                npmjs.com/package/@nik-kita/promitter
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/@nik-kita/typeorm-single-table-inheritance-decorators">
                npmjs.com/package/@nik-kita/typeorm-single-table-inheritance-decorators
              </a>
            </li>
          </ul>
        }
      />
    </CvBlock>
  );
}
