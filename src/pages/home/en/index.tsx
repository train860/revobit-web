//const client = new PocketBase("https://pocketbase.io");

import e2e from "assets/images/home/way.png";
import cn from "classnames";
import Brand from "components/Brand";
import Button from "components/Button";
import ContactForm from "components/ContactForm";
import Layout from "components/Layout";
import Progress from "components/Progress";
import SectionCard from "components/SectionCard";
import Step from "components/Step";
import Tabbar from "components/Tabbar";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useCallback, useEffect, useState } from "react";
import styles from "styles/Home.module.scss";
import Shoe from "views/home/Shoe";

import BgCard from "../../../views/home/BgCard";

const Home: NextPage = () => {
  const handleScroll = useCallback(() => {
    const form = document.getElementById("contact-form");
    window.scrollTo({
      top: form?.offsetTop,
      behavior: "smooth",
    });
  }, []);
  return (
    <Layout
      className={{
        header: `font-harmony`,
        footer: "font-harmony",
      }}
    >
      <Head>
        <title>Revcbit</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="module"
          async
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        ></script>
      </Head>

      <main className={cn(styles["home-en"], "font-harmony")}>
        <div className="bg-rev-bg-black-0B relative">
          <div className={cn(styles["blur-bg"], styles["left"])}></div>
          <div className={cn("container", styles["banner-en"])}>
            <div className={styles["content"]}>
              <h2>
                Create Better Products Faster & More Efficiently Than Ever
                Before
              </h2>
              <p>Digitize your value chain</p>
              <Button className={styles.button} onClick={handleScroll}>
                Learn More
              </Button>
            </div>
            <div className={styles["image-card"]}>
              <div className={styles["image-wrap"]}>
                <div className={styles["blur"]}></div>
                <Image
                  className="relative z-10"
                  src="/images/home/en1.png"
                  width={1}
                  height={1}
                  layout="responsive"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-rev-bg-black-12 relative pt-20">
          <div className={cn("container relative", styles["shoe-wrap"])}>
            <Shoe />
          </div>
        </div>
        <div className="bg-rev-bg-black-12 relative">
          <div className={cn("container", styles["capability-en"])}>
            <div className={styles["image-card"]}>
              <div className={styles["image-wrap"]}>
                <video
                  className={styles["bg-video"]}
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  controls={false}
                >
                  <source src="/videos/en.mp4"></source>
                </video>
              </div>
            </div>
            <div className={styles["content"]}>
              <h2>Capability</h2>
              <div className={styles["capability-list"]}>
                <div className={styles["capability-item"]}>
                  <div className={styles["capability-icon"]}>
                    <Image
                      src="/images/home/Create.png"
                      className="image"
                      layout="fill"
                      alt=""
                    />
                  </div>
                  <div className={styles["capability-content"]}>
                    <h3>Create</h3>
                    <p>
                      Design in 3D with photo-real quality. Maximize creativity
                      with instant color and material updates.
                    </p>
                  </div>
                </div>
                <div className={styles["capability-item"]}>
                  <div className={styles["capability-icon"]}>
                    <Image
                      src="/images/home/Collaborate.png"
                      className="image"
                      layout="fill"
                      alt=""
                    />
                  </div>
                  <div className={styles["capability-content"]}>
                    <h3>Collaborate</h3>
                    <p>
                      We make collaboration between teams easy. Revobit keeps
                      everyone engaged and in sync.
                    </p>
                  </div>
                </div>
                <div className={styles["capability-item"]}>
                  <div className={styles["capability-icon"]}>
                    <Image
                      src="/images/home/Automate.png"
                      layout="fill"
                      className="image"
                      alt=""
                    />
                  </div>
                  <div className={styles["capability-content"]}>
                    <h3>Automate</h3>
                    <p>
                      Reduce repetitive data input. BOM automation and PLM
                      integration enable you to focus on creating value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black relative">
          <div className={cn("container", styles["team-en"])}>
            <div className={cn(styles["content"])}>
              <h2>Our Team</h2>
              <p>
                Our team members have experience at the pinnacle of software
                development and footwear product creation.{" "}
              </p>
              <p>
                We have brought computer scientists together with fashion
                industry experts and proven enterprise-grade solution providers.
              </p>
              <p>Together we are creating the future of product creation. </p>
              <Button className={styles.button} onClick={handleScroll}>
                Learn More
              </Button>
            </div>
            <div className={styles["image-card"]}>
              <div className={styles["image-wrap"]}></div>
            </div>
          </div>
        </div>

        {/** contact */}
        <div className="bg-rev-bg-contact" id="contact-form">
          <div className="container py-23">
            <h2 className="font-semibold text-white text-center text-9 w-2/3 mx-auto">
              We offer a personalized onboarding and development process focused
              on meeting your business needs.
            </h2>
            <h3 className="text-white opacity-80 text-7 text-center pt-7 pb-13">
              Contact us
            </h3>
            <ContactForm page="home" />
          </div>
        </div>

        <div className="bg-rev-bg-contact relative">
          <div
            className={cn(
              "container grid grid-cols-2 gap-5",
              styles["bg-card-en"]
            )}
          >
            <BgCard image="/images/home/en4.png" title="China HQ" />
            <BgCard image="/images/home/en5.png" title="Berlin HQ" />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "zh", ["common"])),
  },
});

export default Home;
