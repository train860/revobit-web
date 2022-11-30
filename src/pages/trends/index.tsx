import cn from "classnames";
import Avatar from "components/Avatar";
import BigCard from "components/BigCard";
import CommonBanner from "components/CommonBanner";
import ContactForm from "components/ContactForm";
import Layout from "components/Layout";
import SectionCard from "components/SectionCard";
import SmallCard from "components/SmallCard";
import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "styles/Trends.module.scss";
import FunctionSection from "views/verse/FunctionSection";

//use sticky
const Trends: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Trends</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CommonBanner
          id="trends-banner"
          className={styles["banner"]}
          image="/images/trends/banner.png"
          title={
            <div className="relative w-150">
              <Image
                src="/images/trends/trends.png"
                className="image"
                fill
                alt=""
              />
            </div>
          }
          subtitle="基于全网电商大数据，帮助企划人员洞察流行趋势并实现快速创款的AI智能平台"
          description="数字资产存储中枢，多场景赋能产品创意设计，让管资产、玩设计、做产品的方法变得更简单、高效。"
          buttonText="免费使用"
        />
        {/** 产品亮点 */}
        <div className="bg-rev-bg-black-0B relative">
          <div className={styles["blur-bg"]}></div>
          <div className="container">
            <h2 className="section-title pt-47/2">产品亮点</h2>
            <div className={cn(styles.highlight, "container pt-15")}>
              <BigCard
                icon="/images/trends/h1.png"
                title="电商数据分析"
                description="与阿里官方深度合作，覆盖淘宝/天猫40万+店铺的sku销售数据，提供多维度的分析能力"
              />
              <BigCard
                icon="/images/trends/h2.png"
                title="流行趋势预测"
                description="基于全网资源，整合海内外媒体、社交、时装周等款式图片，与阿里达摩院合作共建人工智能工具，预测未来半年的流行趋势"
              />
              <BigCard
                icon="/images/trends/h4.png"
                title="爆款图库"
                description="整合海内外热门电商平台的旺铺/爆款的销售数据，并提供多种AI工具与多种数据维度进行热销因素的拆解与分析"
              />
              <BigCard
                icon="/images/trends/h3.png"
                title="AI智能创款"
                description="业内首创的AI智能创款工具，智能分析当前市面上热销的款式，并结合趋势数据，自动设计并生成趋势款式"
              />
            </div>
            <SectionCard
              title={"时谛智能 X 天猫TMIC 为商家带来的价值解析"}
              subtitle=" 是立足于阿里巴巴全渠道的数字化新品研发平台。TMIC结合大数据分析和小样本调研，助力品牌定位目标人群，洞察市场机会，研发创新产品，以及优化营销策略。"
              mode={"left"}
              className={"py-40"}
              list={[
                {
                  icon: "/images/trends/l1.png",
                  text: "更快捷：速度提升",
                },
                {
                  icon: "/images/trends/l2.png",
                  text: "更高效：款式数量",
                },
                {
                  icon: "/images/trends/l3.png",
                  text: "更精准：趋势分析",
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
        <div className="bg-rev-bg-contact relative">
          <div className={styles["lib-bg"]}></div>

          <div className="container">
            <div className="pt-47/2 pb-31/2">
              <h2 className="section-title">三大功能场景&解决方案</h2>
            </div>
            <div className="grid grid-cols-3 gap-7">
              <SmallCard
                icon="/images/trends/f1.png"
                title="灵感捕捉"
                description="聚合全网潮搭的海量鞋服款式库"
              />
              <SmallCard
                icon="/images/trends/f2.png"
                title="市场洞察"
                description="聚合全网潮搭的海量鞋服款式库"
              />
              <SmallCard
                icon="/images/trends/f3.png"
                title="AI智能创款"
                description="聚合全网潮搭的海量鞋服款式库"
              />
            </div>
            <div className="h-36"></div>

            <SectionCard
              grid
              title={"市场分析，透视历史"}
              subtitle="基于全网电商市场海量的历史销售数据进行探索，全方位多角度不断深入细分，为企划与设计提供有力的数据支持"
              mode={"right"}
              className="pb-37"
              list={[
                {
                  icon: "/images/trends/i1.png",
                  text: "全方位的市场动向分析",
                  description: "横向分析行业大盘、竞争对手的布局，掌握市场动向",
                },
                {
                  icon: "/images/trends/i2.png",
                  text: "多层级的品类透视分析",
                  description:
                    "纵向分析品类、价格带、品牌、店铺、款式再到颜色、材料等粒度，定位到具体的设计元素",
                },
              ]}
            >
              <div className={cn(styles["image-wrap"], " w-4/5")}>
                <Image
                  src="/images/library/智能化搜索.png"
                  fill
                  className="image"
                  alt="智能化搜索"
                />
              </div>
            </SectionCard>
            <SectionCard
              title={"流行榜单，洞察当下"}
              subtitle="利用AI算法的能力，针对当前市场上最热门的店铺、款式等进行属性的分解与分析，寻找出当下市场上最热销、最受欢迎的款式、颜色、风格、面料等"
              mode={"left"}
              className="pb-37"
            >
              <div className={cn(styles["image-wrap"], " w-4/5")}>
                <Image
                  src="/images/library/可视化管理.png"
                  fill
                  className="image"
                  alt="可视化管理"
                />
              </div>
            </SectionCard>
            <SectionCard
              grid
              title={"趋势预测未来"}
              subtitle="通过知识图谱与NLP自然语言技术对当前社会上的流行信息进行捕捉并加工，提炼出社交、媒体、机构、电商、品牌五大指数，对未来一段时间可能流行的款式、风格等进行预测，指导品牌进行企划定位"
              mode={"right"}
              className="pb-37"
              list={[
                {
                  icon: "/images/trends/i3.png",
                  text: "社交指数",
                  description:
                    "以小红书、instagram、微博等社交软件上的文本、图片等内容进行分析得出",
                },
                {
                  icon: "/images/trends/i4.png",
                  text: "媒体指数",
                  description:
                    "以市面上各种媒体的公开文章或报道等内容进行分析得出",
                },
                {
                  icon: "/images/trends/i5.png",
                  text: "机构指数",
                  description:
                    "以wgsn、蝶讯、贝恩等外部趋势研究结构的研究内容进行分析得出",
                },
                {
                  icon: "/images/trends/i6.png",
                  text: "电商指数",
                  description:
                    "以淘系、抖音、得物等电商平台的热卖情况进行分析得出",
                },
                {
                  icon: "/images/trends/i7.png",
                  text: "品牌指数",
                  description:
                    "以Farfetch、巴黎世家、Gucci、爱马仕等对流行有较大影响力的品牌方的款式设计方向进行分析得出",
                },
              ]}
            >
              <div className={cn(styles["image-wrap"], " w-4/5")}>
                <Image
                  src="/images/library/整合数字资产.png"
                  fill
                  className="image"
                  alt="整合数字资产"
                />
              </div>
            </SectionCard>
          </div>
        </div>

        {/** 款式平台 */}
        <div className="bg-black">
          <div className="container">
            <h2 className="section-title py-47/2" style={{ margin: 0 }}>
              款式平台
            </h2>
            <SectionCard
              subtitle="通过AI人工智能、大数据技术，结合全球电商、秀场趋势及销售大数据分析，汇聚数百位优秀设计师，每年实现原创鞋款更新量达数千款，为鞋类行业提供精准设计资讯、在线3D设计、实物样品开发、供应链配套等一站式服务。"
              mode={"left"}
              className="pb-37"
            >
              <div className={cn(styles["image-wrap"], " w-4/5")}>
                <Image
                  src="/images/library/智能化搜索.png"
                  fill
                  className="image"
                  alt="智能化搜索"
                />
              </div>
            </SectionCard>
          </div>
        </div>
        {/** 核心优势 */}
        <div className="bg-rev-bg-black-12 pb-30">
          <div className="container">
            <h2 className="section-title pt-47/2">核心优势</h2>
            <FunctionSection
              size="medium"
              items={[
                {
                  icon: "/images/verse/数字化材料库.png",
                  title: "数字化材料库",
                  description: "专注鞋服行业数字化材料图书馆",
                },
                {
                  icon: "/images/verse/3D可视化.png",
                  title: "3D可视化",
                  description: "虚拟仿真实物效果",
                },
                {
                  icon: "/images/verse/标准色彩库.png",
                  title: "标准色彩库",
                  description: "潘通、Color、建立个人搭配色板",
                },
                {
                  icon: "/images/verse/精准搜索.png",
                  title: "精准搜索",
                  description: "标准化信息便于快速找到材料",
                },
              ]}
            />
          </div>
        </div>
        {/** 对于鞋企 */}
        <div className="bg-rev-bg-black-0B">
          <div className="container">
            <h2 className="section-title py-47/2" style={{ margin: 0 }}>
              对于鞋企
            </h2>
            <SectionCard
              title="传统鞋企痛点"
              mode={"right"}
              className="pb-37"
              list={[
                {
                  icon: "/images/trends/i8.png",
                  text: "开发周期长 错过趋势",
                },
                {
                  icon: "/images/trends/i9.png",
                  text: "开发成本高 中单率低",
                },
                {
                  icon: "/images/trends/i10.png",
                  text: "修改反馈慢 效率低下",
                },
                {
                  icon: "/images/trends/i11.png",
                  text: "无数据沉淀 不可追溯",
                },
                {
                  icon: "/images/trends/i12.png",
                  text: "客户端断链 无法闭环",
                },
              ]}
            >
              <div className={cn(styles["image-wrap"], " w-4/5")}>
                <Image
                  src="/images/library/智能化搜索.png"
                  fill
                  className="image"
                  alt="智能化搜索"
                />
              </div>
            </SectionCard>

            <h2 className="section-title pb-47/2" style={{ margin: 0 }}>
              鞋企解决方案
            </h2>
            <SectionCard
              grid
              card
              mode={"left"}
              className="pb-37"
              list={[
                {
                  icon: "/images/trends/i13.png",
                  text: "最新3D原创款式",
                  description: "数字化面料最新款式",
                },
                {
                  icon: "/images/trends/i4.png",
                  text: "高清渲染图直出",
                  description: "丰富电商渠道展现方式",
                },
                {
                  icon: "/images/trends/i15.png",
                  text: "私域3D呈现",
                  description: "3D具象化推款",
                },
                {
                  icon: "/images/trends/i16.png",
                  text: "丰富推广渠道",
                  description: "一年多场流行趋势发布会",
                },
              ]}
            >
              <div className={cn(styles["image-wrap"], " w-4/5")}>
                <Image
                  src="/images/library/智能化搜索.png"
                  fill
                  className="image"
                  alt="智能化搜索"
                />
              </div>
            </SectionCard>
          </div>
        </div>
        {/** 对于传统材料商 */}
        <div className="bg-rev-bg-black-12">
          <div className="container">
            <h2 className="section-title py-47/2" style={{ margin: 0 }}>
              对于传统材料商
            </h2>
            <SectionCard
              title="传统材料商痛点"
              mode={"right"}
              className="pb-37"
              list={[
                {
                  icon: "/images/trends/i17.png",
                  text: "展示方式单一",
                },
                {
                  icon: "/images/trends/i8.png",
                  text: "展现效果普通",
                },
                {
                  icon: "/images/trends/i19.png",
                  text: "实物费用昂贵",
                },
                {
                  icon: "/images/trends/i20.png",
                  text: "缺乏有效营销",
                },
              ]}
            >
              <div className={cn(styles["image-wrap"], " w-4/5")}>
                <Image
                  src="/images/library/智能化搜索.png"
                  fill
                  className="image"
                  alt="智能化搜索"
                />
              </div>
            </SectionCard>

            <h2 className="section-title pb-47/2" style={{ margin: 0 }}>
              材料商解决方案
            </h2>
            <SectionCard
              grid
              card
              mode={"left"}
              className="pb-37"
              list={[
                {
                  icon: "/images/trends/i21.png",
                  text: "AI配色",
                  description:
                    "根据用户自行上传的颜色、图案，基于流行趋势，AI自动生成多种爆款配色方案",
                },
                {
                  icon: "/images/trends/i22.png",
                  text: "在线材料搭配",
                  description:
                    "面料任意搭配、老爹鞋，时装鞋，休闲鞋等，满足不同客户需求",
                },
                {
                  icon: "/images/trends/i23.png",
                  text: "最新3D原创款式",
                  description: "数字化面料最新款式",
                },
                {
                  icon: "/images/trends/i24.png",
                  text: "高清渲染图直出",
                  description: "丰富电商渠道展现方式",
                },
                {
                  icon: "/images/trends/i25.png",
                  text: "私域3D呈现",
                  description: "3D具象化推款",
                },
                {
                  icon: "/images/trends/i26.png",
                  text: "丰富推广渠道",
                  description: "一年多场流行趋势发布会",
                },
              ]}
            >
              <div className={cn(styles["image-wrap"], " w-4/5")}>
                <Image
                  src="/images/library/智能化搜索.png"
                  fill
                  className="image"
                  alt="智能化搜索"
                />
              </div>
            </SectionCard>
          </div>
        </div>
        {/** 他们正在使用 */}
        <div className="bg-rev-bg-black-0B">
          <div className="container pb-32">
            <h2 className="section-title pt-47/2">他们正在使用</h2>
            <h3 className="section-subtitle">
              一段话的介绍一段话的介绍一段话的介绍一段话的介绍
            </h3>
            <div className="grid grid-cols-15 gap-5">
              {Array.from({ length: 45 }).map((item, index) => {
                return (
                  <Avatar
                    url="https://img2.doubanio.com/icon/u1605435-1.jpg"
                    key={String(index)}
                  ></Avatar>
                );
              })}
            </div>
          </div>
        </div>
        {/** 联系我们 */}
        <div className="bg-rev-bg-contact">
          <div className="container pb-32">
            <h2 className="section-title pt-47/2">联系我们</h2>
            <h3 className="section-subtitle">即刻体验数字时尚创新之旅</h3>
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

export default Trends;
