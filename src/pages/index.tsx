//const client = new PocketBase("https://pocketbase.io");

import e2e from "assets/images/home/way.png";
import Brand from "components/Brand";
import Button from "components/Button";
import ContactForm from "components/ContactForm";
import Layout from "components/Layout";
import SectionCard from "components/SectionCard";
import Step from "components/Step";
import Tabbar from "components/Tabbar";
import type { NextPage } from "next";
import Image from "next/future/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "styles/Home.module.scss";

import Case from "./sections/home/Case";
import Category from "./sections/home/Category";
const Home: NextPage = () => {
  const [tabActiveIndex, setTabActiveIndex] = useState<number>(0);
  const [bannerIndex, setBannerIndex] = useState<number>(0);
  useEffect(() => {
    //client.records.getList("posts", 1, 20, {});
  }, []);
  const renderBanner = () => {
    if (bannerIndex === 0) {
      return (
        <Image
          src="/images/banner.png"
          alt=""
          fill
          className={styles["image"]}
        />
      );
    }
    return (
      <video
        className={styles["bg-video"]}
        autoPlay={true}
        loop={true}
        muted={true}
        controls={false}
      >
        <source src="https://vjs.zencdn.net/v/oceans.mp4"></source>
      </video>
    );
  };
  return (
    <Layout>
      <Head>
        <title>Create Next App Heelo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles["top-banner"]}>
          <div className={styles["banner-wrap"]}>{renderBanner()}</div>
          <div className={styles["mask"]}>
            <div className="container text-center">
              <span className={styles["title"]}>打造虚拟时尚 重构数字世界</span>
            </div>
          </div>
        </div>
        <Case />
        {/* 端到端全链路数字化解决方案 */}
        <div className="bg-rev-bg-black-14">
          <div className="container">
            <h2 className="section-title">端到端全链路数字化解决方案</h2>
            <h3 className="section-subtitle">
              时谛智能为时尚行业鞋、服、包等全品类提供“设计-制造-生产-销售”全链路数字化服务。
            </h3>
          </div>
          <div className={styles["e2e-wrap"]}>
            <Image src={e2e} alt="" />
          </div>
        </div>
        {/* 全球合作伙伴 */}
        <div className="bg-rev-bg-black py-6">
          <div className="container">
            <h2 className="section-title mt-0">全球合作伙伴</h2>
            <h3 className="section-subtitle">
              时谛智能已服务全球20多个国家地区，超40家一流时尚品牌，100多家供应商。
            </h3>
          </div>
          <Brand />
        </div>

        <div className="bg-rev-bg-contact">
          <div className="container py-6 ">
            <h2 className="section-title">联系我们</h2>
            <h3 className="section-subtitle">
              释放设计灵感，即刻开启时尚数字新体验。
            </h3>
            <ContactForm />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
