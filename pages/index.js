import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";
import Date from "../components/date";

import utilStyles from "../styles/Utils.module.css";

import { getSortedPostsData } from "../utils/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Hermel's NextJS Blog</title>
      </Head>
      <section className={utilStyles.headingMd}>
        {/* <p>I'm a developer, designer, student and self-taught learner</p> */}
        <p>
          Hello, I'm a 19 years old developer, designer, student and self-taught
          learner.
        </p>
        <div className={utilStyles.alertInfo}>
          This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.
        </div>
      </section>
      <hr className={utilStyles.dividerLight} />
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
