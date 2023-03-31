import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/modules/Layout.module.css";
import utilStyles from "../../styles/modules/Utils.module.css";

import { Envelope, GithubLogo, LinkedinLogo, Rewind } from "@phosphor-icons/react";

export const siteTitle = "Isaac Hermel's Next.js Blog";

export function Layout({ home, children }) {
  return (
    <div className={`${styles.container} ${!home && utilStyles.flexDirectionColumn}`}>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home && (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt="Hermel's profile"
            />
            <h1 className={utilStyles.heading2Xl}>Isaac Hermel</h1>
            <p className={`${utilStyles.justifyText} ${utilStyles.headingSm}`}>
              E aí, tudo bem com você? Eu sou Isaac, tenho 19 anos e sou desenvolvedor, UI/UX designer, estudante e autodidata. Por aqui você vai poder ver
              alguns posts aleatórios que eu fizer sobre alguma coisa que estou estudando ou achei muito top, espero que goste!
            </p>
            <ul className={styles.linksList}>
              <li>
                <Link href="https://github.com/H3rmel" className={styles.linkLi}>
                  <GithubLogo size={24} /> H3rmel
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com/in/isaachermel" className={styles.linkLi}>
                  <LinkedinLogo size={24} /> Isaac Hermel
                </Link>
              </li>
              <li>
                <Link href="mailto:isaachermel@gmail.com" className={styles.linkLi}>
                  <Envelope size={24} /> isaachermel@gmail.com
                </Link>
              </li>
            </ul>
          </>
        )}
      </header>
      <main className={styles.main}>{children}</main>
      {!home && (
        <Link href="/" className={styles.backToHome}>
          <Rewind size={24} /> Back to home
        </Link>
      )}
    </div>
  );
}
