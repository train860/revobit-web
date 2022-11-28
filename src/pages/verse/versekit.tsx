import cn from "classnames";
import BigCard from "components/BigCard";
import CommonBanner from "components/CommonBanner";
import ContactForm from "components/ContactForm";
import Layout from "components/Layout";
import SectionCard from "components/SectionCard";
import SmallCard from "components/SmallCard";
import type { GetStaticProps, NextPage } from "next";
import Image from "next/future/image";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "styles/Verse.module.scss";
import FileTypeSection from "views/verse/FileTypeSection";
import SettingSection from "views/verse/SettingSection";

const Versekit: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Versekit</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CommonBanner
          id="versekit-banner"
          className={styles["banner"]}
          image="/images/manager.jpg"
          title={
            <div className="relative h-20">
              <Image
                src="/images/verse/versekit.png"
                className="image__h"
                fill
                alt=""
              />
            </div>
          }
          description="数字资产存储中枢，多场景赋能产品创意设计，让管资产、玩设计、做产品的方法变得更简单、高效。"
          buttonText={["立即购买", "观看介绍视频"]}
          buttonClassnames={[
            cn(styles["banner-primary-btn"], styles["banner-btn"]),
            styles["banner-btn"],
          ]}
        />
        <div className="bg-black relative overflow-hidden py-80">
          <div className="container relative z-10">
            <SectionCard
              title={"数字面料，真实还原"}
              subtitle="业界领先的AI系统、极简化操作流程。为材料供应与销售打通物理和数字世界间的屏障，真实还原各种织物、皮料与合成材料的质感。"
              mode={"left"}
            >
              <div className={cn(styles["image-wrap"], " w-4/5")}></div>
            </SectionCard>
          </div>
          <div className="absolute w-1/2 top-0 bottom-0 right-0">
            <Image
              src={"/images/verse/数字面料，真实还原.png"}
              className="image"
              fill
              alt="数字面料，真实还原"
            />
          </div>
        </div>
        <div className="bg-rev-bg-black-10 relative overflow-hidden">
          <div className="container relative z-10">
            <SectionCard
              title={"设计巧妙，极致架构"}
              subtitle="versekit作为一款桌面级扫描设备，集成先进的世界级工业光学系统辅以机器视觉捕捉配置，可以准确捕捉基于物理纹理的各种面料效果。"
              mode={"right"}
            >
              <div className={cn(styles["image-wrap"], "w-7/10")}>
                <Image
                  src="/images/verse/设计巧妙，极致架构.png"
                  fill
                  className="image"
                  alt="设计巧妙，极致架构"
                />
              </div>
            </SectionCard>
          </div>
        </div>
        <div className="bg-black relative overflow-hidden">
          <div className="container relative z-10">
            <SectionCard
              title={"内外兼修，智有所源"}
              subtitle="基于物理的渲染（PBR)是渲染引擎的新行业标准，在versekit中，结合AI驱动算法提供完整的PBR工作流支持（高光流&金属流），以重建完美的数字化材料。"
              mode={"left"}
            >
              <div className={cn(styles["image-wrap"], "w-7/10")}>
                <Image
                  src="/images/verse/内外兼修，智有所源.png"
                  fill
                  className="image"
                  alt="内外兼修，智有所源"
                />
              </div>
            </SectionCard>
          </div>
        </div>
        <div className="bg-rev-bg-black-10 py-37 relative overflow-hidden">
          <div className="container relative z-10">
            <SectionCard
              title={"极速快扫，不负精彩"}
              subtitle="3-5分钟极速扫描高品质3D材质，极简化操作流程搭配强大的软件处理能力，轻松实现入门到专业3D面料人才的进阶。"
              mode={"right"}
            >
              <div
                className={cn(
                  styles["image-wrap"],
                  "w-1/2 rounded-15/2 overflow-hidden"
                )}
              >
                <Image
                  src="/images/verse/极速快扫，不负精彩.png"
                  fill
                  className="image"
                  alt="极速快扫，不负精彩"
                />
              </div>
            </SectionCard>
          </div>
        </div>

        <div className="bg-rev-bg-black">
          <div className="container pb-32">
            <h2 className="section-title pt-24">支持多种格式，满足多种需求</h2>
            <h3 className="section-subtitle">
              支持导出u3m、u3ma、gift、glb等通用材料格式，支持简易导出模型材质渲染图，数据可用于第三方软件。
            </h3>
            <FileTypeSection
              icons={[
                "/images/verse/t1.png",
                "/images/verse/t2.png",
                "/images/verse/t3.png",
                "/images/verse/t4.png",
                "/images/verse/t5.png",
                "/images/verse/t6.png",
              ]}
            />
          </div>
        </div>
        <SettingSection />
        <div className="bg-rev-bg-black-0B">
          <div className="container pb-32">
            <h2 className="section-title pt-24">咨询Versekit</h2>
            <h3 className="section-subtitle">体验全新数字化材料解决方案</h3>
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

export default Versekit;
