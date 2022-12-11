import cn from "classnames";
import Button from "components/Button";
import CommonBanner from "components/CommonBanner";
import ContactForm from "components/ContactForm";
import Layout from "components/Layout";
import SectionCard from "components/SectionCard";
import Slider from "components/Slider";
import Step from "components/Step";
import Tabbar from "components/Tabbar";
import { useIsomorphicLayoutEffect } from "hooks/useIsomorphicLayoutEffect";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useRef, useState } from "react";
import Sticky from "react-stickynode";
import { useScroll, useWindowScroll } from "react-use";
import styles from "styles/Fim.module.scss";
import TabSection, { TabData } from "views/fim/TabSection";

const tabDataList: TabData[] = [
  {
    title: "创意企划",
    des: ["洞察流行趋势，锁定企划方向"],
    image: "/images/manager/创意企划.png",
  },
  {
    title: "计划下达",
    des: ["在线开始产品研发计划"],
    image: "/images/manager/计划下达.png",
  },
  {
    title: "设计任务分配",
    des: ["将具体任务通过线上分配至不同角色"],
    image: "/images/manager/设计任务分配.png",
  },
  {
    title: "材料开发",
    des: ["根据产品要求寻找或研发合适的材料"],
    image: "/images/manager/材料开发.png",
  },
  {
    title: "2D造型设计",
    des: ["设计师绘制2D设计图并上传系统"],
    image: "/images/manager/2D造型设计.png",
  },
  {
    title: "3D模型设计",
    des: ["配合建模、渲染软件构建3D模型"],
    image: "/images/manager/3D模型设计.png",
  },
  {
    title: "评审管理",
    des: ["进行线上评审以筛选合格产品"],
    image: "/images/manager/评审管理.png",
  },
  {
    title: "数字选品",
    des: ["对不同款式、不同颜色的作品进行在线选品。"],
    image: "/images/manager/数字选品.png",
  },
  {
    title: "商品资料包管理",
    des: ["对选定的产品进行资料包的生成和导出"],
    image: "/images/manager/商品资料包管理.png",
  },
  {
    title: "实样验证",
    des: ["线下打样判定产品的实际效果"],
    image: "/images/manager/实样验证.png",
  },
  {
    title: "大货技转",
    des: ["对于合格的产品进行生成资料的输出和生成的对接"],
    image: "/images/manager/大货技转.png",
  },
];

//use sticky
const Manager: NextPage = () => {
  const stickyRef = useRef<number>(0);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [tricker, setTricker] = useState<number[][]>([]);
  const { y } = useWindowScroll();
  useEffect(() => {
    setTimeout(() => {
      const range: number[][] = [];
      const barHeight =
        document.getElementById("sticky-bar")?.clientHeight || 0;
      tabDataList.forEach((item, index) => {
        const el = document.getElementById(`tab${index}`);
        const top = el?.offsetTop;
        const height = el?.clientHeight;
        const offsetWindowTop = top || 0; //+ y;
        range.push([offsetWindowTop, offsetWindowTop + (height || 0)]);
      });
      stickyRef.current = barHeight;
      setTricker(range);
    }, 50);
  }, []);
  useEffect(() => {
    const h = y + stickyRef.current;
    const index = tricker.findIndex((item) => {
      return h >= item[0] && h < item[1];
    });
    if (index < 0) {
      return;
    }
    setSelectedIndex(index + 1);
  }, [y]);

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
          image="/images/manager.png"
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
            <h2 className="section-title pt-47/2">业务主流程</h2>
            <Sticky enabled={true} top={0} bottomBoundary={"#tab9"}>
              <div className="bg-rev-bg-black" id="sticky-bar">
                <div style={{ height: 70 }}></div>
                <Step
                  selectedIndex={selectedIndex}
                  list={[
                    { index: 1, text: "创意企划" },
                    { index: 2, text: "计划下达" },
                    { index: 3, text: "设计任务分配" },
                    { index: 4, text: "材料开发" },
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
            <div className={styles["sticky-content"]}>
              <div className="flex-2 text-white">
                <Sticky
                  enabled={true}
                  top={"#sticky-bar"}
                  bottomBoundary={"#tab9"}
                >
                  <div className={styles["sticky-content-text"]}>
                    <div className={styles["sticky-content-text-wrap"]}>
                      <h2>{tabDataList[selectedIndex - 1]["title"]}</h2>
                      <p>{tabDataList[selectedIndex - 1]["des"]}</p>
                    </div>
                  </div>
                </Sticky>
              </div>
              <div className="flex-3">
                {tabDataList.map((item, index) => {
                  return (
                    <div
                      id={`tab${index}`}
                      key={String(index)}
                      className={styles["tab-image"]}
                    >
                      <div className={styles["tab-image-wrap"]}>
                        <Image
                          src={item.image}
                          fill
                          className={styles["image"]}
                          alt=""
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-rev-bg-contact" id="why">
          <div className="container">
            <h2 className="section-title pt-47/2">为什么选择Manager</h2>
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
                  text: "无缝兼容Adob​​e Illustrator及Photoshop设计软件",
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
            <h2 className="section-title pt-47/2">联系我们</h2>
            <h3 className="section-subtitle">助力产品开发效率倍速提升</h3>
            <ContactForm page="home" />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Manager;
