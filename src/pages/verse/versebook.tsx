import cn from "classnames";
import BigCard from "components/BigCard";
import CommonBanner from "components/CommonBanner";
import ContactForm from "components/ContactForm";
import Layout from "components/Layout";
import SectionCard from "components/SectionCard";
import SmallCard from "components/SmallCard";
import Tabbar from "components/Tabbar";
import type { GetStaticProps, NextPage } from "next";
import Image from "next/future/image";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import styles from "styles/Verse.module.scss";
import BrandService from "views/verse/BrandService";
import FunctionSection from "views/verse/FunctionSection";
import QRcodeSection from "views/verse/QRcodeSection";

const Versebook: NextPage = () => {
  const [tabActiveIndex, setTabActiveIndex] = useState<number>(0);
  return (
    <Layout>
      <Head>
        <title>Versebook</title>
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
                src="/images/verse/versebook.png"
                className="image"
                fill
                alt=""
              />
            </div>
          }
          description="数字资产存储中枢，多场景赋能产品创意设计，让管资产、玩设计、做产品的方法变得更简单、高效。"
          buttonText="免费使用"
        />
        <div className="bg-black relative py-36">
          <div className="blur-bg"></div>
          <div className="container">
            <h2 className="section-title">产品功能</h2>
            <Tabbar
              simple
              activeIndex={tabActiveIndex}
              items={[{ text: "买家" }, { text: "卖家" }]}
              onItemChange={(index) => {
                setTabActiveIndex(index);
              }}
            />
            <FunctionSection
              items={[
                {
                  icon: "",
                  title: "数字化材料库",
                  descrption: "专注鞋服行业数字化材料图书馆",
                },
                {
                  icon: "",
                  title: "数字化材料库",
                  descrption: "专注鞋服行业数字化材料图书馆",
                },
                {
                  icon: "",
                  title: "数字化材料库",
                  descrption: "专注鞋服行业数字化材料图书馆",
                },
                {
                  icon: "",
                  title: "数字化材料库",
                  descrption: "专注鞋服行业数字化材料图书馆",
                },
                {
                  icon: "",
                  title: "数字化材料库",
                  descrption: "专注鞋服行业数字化材料图书馆",
                },
                {
                  icon: "",
                  title: "数字化材料库",
                  descrption: "专注鞋服行业数字化材料图书馆",
                },
                {
                  icon: "",
                  title: "数字化材料库",
                  descrption: "专注鞋服行业数字化材料图书馆",
                },
                {
                  icon: "",
                  title: "数字化材料库",
                  descrption: "专注鞋服行业数字化材料图书馆",
                },
              ]}
            />
          </div>
        </div>

        <div className="bg-rev-bg-black-10 relative py-36">
          <div className="container">
            <h2 className="section-title">品牌</h2>
            <SectionCard
              grid
              gapClassName={"w-10"}
              title={"提供真实有效的数字化材料及供应商资源"}
              subtitle="汇集并持续更新时尚产业材料资源，精准的搜索渠道大幅提升找料效率，真正脱离冗杂的实物材料和平面信息，让versebook带你沉浸式体验数字化面料的生命力 ！"
              mode={"left"}
              list={[
                {
                  icon: "/images/library/标签化数据-1.png",
                  text: "更快捷：速度提升",
                  description:
                    "Versebook建立的标准化信息，让您快速准确地找到材料",
                },
                {
                  icon: "/images/library/标签化数据-2.png",
                  text: "更高效：款式数量",
                  description:
                    "Versebook建立的标准化信息，让您快速准确地找到材料",
                },
                {
                  icon: "/images/library/标签化数据-3.png",
                  text: "更精准：趋势分析",
                  description:
                    "Versebook建立的标准化信息，让您快速准确地找到材料",
                },
              ]}
            >
              <div className={cn(styles["image-wrap"], " w-4/5")}>
                <Image
                  src="/images/library/标签化数据.png"
                  fill
                  className="image"
                  alt="标签化数据"
                />
              </div>
            </SectionCard>
          </div>
        </div>

        <div className="bg-black relative py-36">
          <div className="container">
            <h2 className="section-title">供应商</h2>
            <SectionCard
              grid
              gapClassName={"w-10"}
              title={"时尚行业高质量数字化面料平台"}
              subtitle="Versebook开创了以高精建模+实时渲染展示面料效果的先河，让材料不再止于无力的照片样品，而真正将现实照进虚拟，助力供应商、渠道商随时随地掌握先机。 ！"
              mode={"right"}
              list={[
                {
                  icon: "/images/library/标签化数据-1.png",
                  text: "更快捷：速度提升",
                  description:
                    "Versebook建立的标准化信息，让您快速准确地找到材料",
                },
                {
                  icon: "/images/library/标签化数据-2.png",
                  text: "更高效：款式数量",
                  description:
                    "Versebook建立的标准化信息，让您快速准确地找到材料",
                },
                {
                  icon: "/images/library/标签化数据-3.png",
                  text: "更精准：趋势分析",
                  description:
                    "Versebook建立的标准化信息，让您快速准确地找到材料",
                },
              ]}
            >
              <div className={cn(styles["image-wrap"], " w-4/5")}>
                <div
                  style={{
                    background: "#0F0F1F",
                    borderRadius: " 30px",
                    padding: "60px",
                  }}
                >
                  <Image
                    src="/images/library/标签化数据.png"
                    fill
                    className="image"
                    alt="标签化数据"
                  />
                </div>
              </div>
            </SectionCard>
          </div>
        </div>

        {/**为您提供如下品牌服务 */}
        <div className="bg-black relative pt-20 pb-30">
          <BrandService />
        </div>
        <div className="bg-rev-bg-black-10 relative py-36">
          <div className="container">
            <h2 className="section-title">设计师</h2>
            <SectionCard
              title={"专注鞋服行业的数字化材料图书馆"}
              subtitle="运用行业领先数字化材料方案，提升时尚创意水平，打破灵感边界，让设计随心所欲。"
              mode={"left"}
            >
              <div className={cn(styles["image-wrap"], " w-4/5")}>
                <Image
                  src="/images/library/标签化数据.png"
                  fill
                  className="image"
                  alt="标签化数据"
                />
              </div>
            </SectionCard>
            <SectionCard
              title={"数字化设计 赋能2D设计"}
              subtitle="数字化材料与2D设计工具结合，例如Adobe Illustrator、Photoshop。只需一键填充即可将数字化材料运用于设计稿上，灵感即刻落地设计。"
              mode={"right"}
            >
              <div className={cn(styles["image-wrap"], " w-4/5")}>
                <Image
                  src="/images/library/标签化数据.png"
                  fill
                  className="image"
                  alt="标签化数据"
                />
              </div>
            </SectionCard>
            <SectionCard
              title={"设计畅想 协作无界"}
              subtitle="满足设计师在3D模型上实时进行材料及色彩搭配的设计需求，达到逼真还原设计的效果。"
              mode={"left"}
            >
              <div className={cn(styles["image-wrap"], " w-4/5")}>
                <Image
                  src="/images/library/标签化数据.png"
                  fill
                  className="image"
                  alt="标签化数据"
                />
              </div>
            </SectionCard>
          </div>
        </div>
        <div className="bg-black">
          <div className="container py-36">
            <h2 className="section-title">开始你的数字化之旅</h2>
            <QRcodeSection />
          </div>
        </div>
        <div className="bg-rev-bg-black-10">
          <div className="container py-36">
            <h2 className="section-title">咨询Versebook</h2>
            <h3 className="section-subtitle">为数字化设计赋能</h3>
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

export default Versebook;
