import CvBlock from "./CvBlock";
import CvBlockItem from "./CvBlockItem";

export default function Skills() {
  return (
    <CvBlock title="Skills">
      <CvBlockItem subtitles={["Typescript/Javascript"]} />
      <CvBlockItem
        subtitles={["Javascript runtimes"]}
        content="Node, Deno"
      />
      <CvBlockItem
        subtitles={["Backend frameworks"]}
        content="Nest, Express, Fastify, Koa, Oak, Hono"
      />
      <CvBlockItem
        subtitles={["Databases"]}
        content="Postgres, Mongodb, KV, Redis"
      />
      <CvBlockItem
        subtitles={["Clouds"]}
        content="Google Cloud Console, Amazon Web Services, Heroku, Deno Deploy"
      />
      <CvBlockItem
        subtitles={["API standards"]}
        content={"REST, GraphQL"}
      />
      <CvBlockItem
        subtitles={["Popular modules, libraries"]}
        content="Jest, Socket.io, Stripe, Prisma, TypeORM, Mongoose, Grammy (telegram)"
      />
      <CvBlockItem
        subtitles={["Another stuff"]}
        content="WebSocket, Docker, Nginx, Github Actions"
      />
    </CvBlock>
  );
}
