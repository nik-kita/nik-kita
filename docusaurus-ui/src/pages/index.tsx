import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { tw } from "../utils/tw";
import HomepageHeader from "./_home/home-page-header";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main
        className={tw(
          "min-h-[5em]",
          "p-10",
          "flex justify-center items-center",
        )}
      >
        <Link
          className={tw(
            "margin-horiz--xs",
            "button button--secondary button--lg",
          )}
          to="/cv"
        >
          My Resume
        </Link>
        <Link
          download
          target="_blank"
          className={tw(
            "margin-horiz--xs",
            "button button--secondary button--lg",
          )}
          to={require("@site/static/files/nodejs__cv__nikita_moiseienko.pdf")
            .default}
        >
          Download CV <span className={tw("font-thin")}>(in pdf format)</span>
        </Link>
      </main>
    </Layout>
  );
}
