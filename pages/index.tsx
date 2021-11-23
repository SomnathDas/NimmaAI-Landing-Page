import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.main_container}>
      <Head>
        <title>Nimma AI</title>
        <meta
          name="description"
          content="Engineering the future of personal assistant."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section className={`${styles.hero_section_container}`}>
          <div className={`${styles.hero_section} `}>
            <div className={styles.content}>
              <h1 className={styles.heading}>Nimma</h1>
              <h4 className={styles.paragraph}>
                Pushing Boundaries of personal assistant technology.
              </h4>
            </div>
            <div className={styles.hero_art}>
              <Image
                src="/hero-art.svg"
                objectFit="contain"
                height="320"
                width="320"
              />
            </div>
          </div>
        </section>
        <section className={styles.feat__one_section_container}>
          <div className={`${styles.feat__one_section} `}>
            <div className={styles.content}>
              <div className={styles.head}>
                <h1>Main Features</h1>
                <svg
                  width="148"
                  height="136"
                  viewBox="0 0 148 136"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.arrow}
                >
                  <path
                    d="M2 24.1261C25.7176 7.34133 57.6742 -2.91382 86.7188 4.3879C101.59 8.12657 132.209 19.3362 141.276 33.4407C153.642 52.6765 139.836 79.3933 127.748 94.6512C117.306 107.829 104.613 116.531 89.8237 123.926"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M86.3831 88C86.3831 95.3092 80.9586 132.872 91.5949 133.797C103.378 134.822 114.658 131.912 126.303 131.912"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <h1>Your Command is your gesture!</h1>
              <h4 className={styles.paragraph}>
                Gesture recognition, blooming accessibility and fun.
              </h4>
            </div>
            <Image
              src="/feat-one-art.svg"
              objectFit="contain"
              height="420"
              width="420"
            />
          </div>
        </section>
        <section className={styles.feat__two_section_container}>
          <div className={`${styles.feat__two_section} `}>
            <div className={styles.content}>
              <h1>Extending limits of what your buddy can do!</h1>
              <h4 className={styles.paragraph}>
                Open apps using gesture and voice but do a lot more!!!
              </h4>
            </div>
            <Image
              src="/feat-two-art.svg"
              objectFit="contain"
              height="420"
              width="420"
            />
          </div>
        </section>
        <section className={styles.footer_section_container}>
          <div className={`${styles.footer_section} `}>
            <div className={styles.content}>
              <h1 className={styles.heading}>Experience Now</h1>
              <button className={styles.download_btn}>Download</button>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Home;
