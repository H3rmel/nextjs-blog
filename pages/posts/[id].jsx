import Head from "next/head";

import Layout from "../../components/layout";
import Date from "../../components/date";

import { getAllPostIds, getPostData } from "../../utils/posts";

import utilStyles from "../../styles/modules/Utils.module.css";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <Date dateString={postData.date} />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} className={utilStyles.justifyText} />
      </article>
    </Layout>
  );
}
