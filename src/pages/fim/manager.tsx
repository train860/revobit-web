import cn from "classnames";
import Button from "components/Button";
import CommonBanner from "components/CommonBanner";
import ContactForm from "components/ContactForm";
import Layout from "components/Layout";
import SectionCard from "components/SectionCard";
import Slider from "components/Slider";
import Step from "components/Step";
import Tabbar from "components/Tabbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "hooks/useIsomorphicLayoutEffect";
import type { GetStaticProps, NextPage } from "next";
import Image from "next/future/image";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import Sticky from "react-stickynode";
import styles from "styles/Fim.module.scss";
import TabSection, { TabData } from "views/fim/TabSection";

import Category from "../../views/fim/Category";
gsap.registerPlugin(ScrollTrigger);
const tabDataList: TabData[] = [
  {
    title: "计划下达",
    des: ["一段文字内容一段文字内容一段文字内容"],
    image: "/images/manager/计划下达.png",
  },
  {
    title: "设计任务分配",
    des: ["一段文字内容一段文字内容一段文字内容"],
    image: "/images/manager/设计任务分配.png",
  },
  {
    title: "材料开发",
    des: ["一段文字内容一段文字内容一段文字内容"],
    image: "/images/manager/材料开发.png",
  },
  {
    title: "2D造型设计",
    des: ["一段文字内容一段文字内容一段文字内容"],
    image: "/images/manager/2D造型设计.png",
  },
  {
    title: "3D模型设计",
    des: ["一段文字内容一段文字内容一段文字内容"],
    image: "/images/manager/3D模型设计.png",
  },
  {
    title: "评审管理",
    des: ["一段文字内容一段文字内容一段文字内容"],
    image: "/images/manager/评审管理.png",
  },
  {
    title: "数字选品",
    des: ["一段文字内容一段文字内容一段文字内容"],
    image: "/images/manager/数字选品.png",
  },
  {
    title: "商品资料包管理",
    des: ["一段文字内容一段文字内容一段文字内容"],
    image: "/images/manager/商品资料包管理.png",
  },
  {
    title: "实样验证",
    des: ["一段文字内容一段文字内容一段文字内容"],
    image: "/images/manager/实样验证.png",
  },
  {
    title: "大货技转",
    des: ["一段文字内容一段文字内容一段文字内容"],
    image: "/images/manager/大货技转.png",
  },
];

//use sticky
const Manager: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Manager</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CommonBanner
          id="manager-banner"
          image="/images/manager.jpg"
          title={
            <div className="relative w-150">
              <Image
                src="/images/manager/revcfim.png"
                className="image"
                fill
                alt=""
              />
            </div>
          }
          description="您身边的进度“管家”，通过打造一站式产品在线协同管理平台，为企业中的不同角色提供实时进度管理与决策方案。"
          buttonText="免费使用"
        />
        <div className="bg-rev-bg-black">
          <div className="container">
            <h2 className="section-title">业务主流程</h2>
            <Sticky enabled={true} top={0} bottomBoundary={"#tab9"}>
              <div className="bg-rev-bg-black">
                <div style={{ height: 70 }}></div>
                <Step
                  selectedIndex={8}
                  list={[
                    { index: 1, text: "计划下达" },
                    { index: 2, text: "设计任务分配" },
                    { index: 3, text: "材料开发" },
                    { index: [5, 6], text: ["2D造型设计", "3D模型设计"] },
                    { index: 7, text: "评审管理" },
                    { index: 8, text: "数字选品" },
                    { index: 9, text: "商品资料包管理" },
                    { index: 10, text: "实样验证" },
                    { index: 11, text: "大货技转" },
                  ]}
                ></Step>
              </div>
            </Sticky>
            {tabDataList.map((item, index) => {
              return (
                <div
                  id={`tab${index}`}
                  key={String(index)}
                  className="container w-4/5"
                >
                  <TabSection center simple data={item} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-rev-bg-contact">
          <div className="container">
            <h2 className="section-title">为什么选择Manager</h2>
            <div className="h-16"></div>
            <SectionCard
              title={"设计高效协同"}
              mode={"left"}
              className={styles["card-section"]}
              list={[
                {
                  icon: "/images/manager/设计高效协同-1.png",
                  text: "随时随地进行在线审样、添加批注",
                },
                {
                  icon: "/images/manager/设计高效协同-2.png",
                  text: "共享设计文件、设计进度，实现高效协同",
                },
              ]}
            >
              <div className={cn(styles["image-wrap"], " w-4/5")}>
                <Image
                  src="/images/manager/设计高效协同.png"
                  fill
                  className="image"
                  alt="设计高效协同"
                />
              </div>
            </SectionCard>
            <SectionCard
              title={"开放兼容"}
              mode={"right"}
              className={styles["card-section"]}
              list={[
                {
                  icon: "/images/manager/开放兼容-1.png",
                  text: "无缝兼容Adob​​e Illustrator®及Photoshop设计软件",
                },
                {
                  icon: "/images/manager/开放兼容-2.png",
                  text: "能够打通CLO设计软件，实现线上协同管理",
                },
                {
                  icon: "/images/manager/开放兼容-3.png",
                  text: "与Revofim Studio无缝协作，流畅开展从3D设计样图到实际落地全过程",
                },
              ]}
            >
              <div className={cn(styles["image-wrap"], " w-4/5")}>
                <Image
                  src="/images/manager/开放兼容.png"
                  fill
                  className="image"
                  alt="开放兼容"
                />
              </div>
            </SectionCard>
            <SectionCard
              title={"进度实时管理"}
              mode={"left"}
              className={styles["card-section"]}
              list={[
                {
                  icon: "/images/manager/进度实时管理-1.png",
                  text: "按照企业的产品线、开发模式等维度自定义专属开发流程",
                },
                {
                  icon: "/images/manager/进度实时管理-2.png",
                  text: "通过流程驱动业务单据",
                },
              ]}
            >
              <div className={cn(styles["image-wrap"], " w-4/5")}>
                <Image
                  src="/images/manager/进度实时管理.png"
                  fill
                  className="image"
                  alt="进度实时管理"
                />
              </div>
            </SectionCard>
            <SectionCard
              title={"信息互通共享"}
              mode={"right"}
              className={styles["card-section"]}
              list={[
                {
                  icon: "/images/manager/信息互通共享-1.png",
                  text: "IM实时通话功能，随时随地进行讨论和决策",
                },
                {
                  icon: "/images/manager/信息互通共享-2.png",
                  text: "2D设计及3D设计二维码动态分享，让商品端和供应链端同步产品开发状态，避免不必要的开发。",
                },
                {
                  icon: "/images/manager/信息互通共享-3.png",
                  text: "通过评审管理功能快速反馈并解决款式、设计环境等问题。",
                },
              ]}
            >
              <div className={cn(styles["image-wrap"], " w-4/5")}>
                <Image
                  src="/images/manager/信息互通共享.png"
                  fill
                  className="image"
                  alt="信息互通共享"
                />
              </div>
            </SectionCard>
            <SectionCard
              title={"供应商高效管理"}
              mode={"left"}
              className={styles["card-section"]}
              list={[
                {
                  icon: "/images/manager/供应商高效管理-1.png",
                  text: "供应商遵循严格的准入机制和审批流程，严控供应商资质；",
                },
                {
                  icon: "/images/manager/供应商高效管理-2.png",
                  text: "帮助供应商实现材料推介、开发、报价、调料、验证等众多业务场景；",
                },
                {
                  icon: "/images/manager/供应商高效管理-3.png",
                  text: "专有的供应商门户轻松实现在线接受任务和状态的实时更新；",
                },
              ]}
            >
              <div className={cn(styles["image-wrap"], " w-4/5")}>
                <Image
                  src="/images/manager/供应商高效管理.png"
                  fill
                  className="image"
                  alt="供应商高效管理"
                />
              </div>
            </SectionCard>
            <SectionCard
              title={"成本有效管控"}
              mode={"right"}
              className={styles["card-section"]}
              list={[
                {
                  icon: "/images/manager/成本有效管控-1.png",
                  text: "起始于商品的目标成本规划",
                },
                {
                  icon: "/images/manager/成本有效管控-2.png",
                  text: "实现3D设计环节的成本模拟，提前控制成本开支。",
                },
                {
                  icon: "/images/manager/成本有效管控-3.png",
                  text: "成本预估管理，成本团队可以从材料，工艺，LO等多个纬度全面掌握设计成本。",
                },
              ]}
            >
              <div className={cn(styles["image-wrap"], " w-4/5")}>
                <Image
                  src="/images/manager/成本有效管控.png"
                  fill
                  className="image"
                  alt="成本有效管控"
                />
              </div>
            </SectionCard>
          </div>
        </div>
        <div className="bg-rev-bg-black-0B">
          <div className="container pb-32">
            <h2 className="section-title">联系我们</h2>
            <h3 className="section-subtitle">助力产品开发效率倍速提升</h3>
            <ContactForm page="home" />
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
export default Manager;
