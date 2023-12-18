import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";

import HomepageHeader from "./_home/home-page-header";
import { tw } from "../utils/tw";

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
          CV
        </Link>
      </main>
    </Layout>
  );
}
