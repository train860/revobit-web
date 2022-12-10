import cn from "classnames";
import SectionCard from "components/SectionCard";
import Image from "next/image";
import styles from "styles/Trends.module.scss";
export default function MarketingSection() {
  return (
    <>
      <SectionCard
        grid
        title={"市场分析，透视历史"}
        subtitle="基于全网电商市场海量的历史销售数据进行探索，全方位多角度不断深入细分，为企划与设计提供有力的数据支持。"
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
            src="/images/trends/market1.png"
            fill
            className="image"
            alt="市场分析，透视历史"
          />
        </div>
      </SectionCard>
      <SectionCard
        title={"流行榜单，洞察当下"}
        subtitle="利用AI算法的能力，针对当前市场上最热门的店铺、款式等进行属性的分解与分析，寻找出当下市场上最热销、最受欢迎的款式、颜色、风格、面料等。"
        mode={"left"}
        className="pb-37"
      >
        <div className={cn(styles["image-wrap"], " w-4/5")}>
          <Image
            src="/images/trends/market2.png"
            fill
            className="image"
            alt="流行榜单，洞察当下"
          />
        </div>
      </SectionCard>
      <SectionCard
        grid
        title={"趋势预测未来"}
        subtitle="通过知识图谱与NLP自然语言技术对当前社会上的流行信息进行捕捉并加工，提炼出社交、媒体、机构、电商、品牌五大指数，对未来一段时间可能流行的款式、风格等进行预测，指导品牌进行企划定位。"
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
            description: "以市面上各种媒体的公开文章或报道等内容进行分析得出",
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
            description: "以淘系、抖音、得物等电商平台的热卖情况进行分析得出",
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
            src="/images/trends/market3.png"
            fill
            className="image"
            alt="趋势预测未来"
          />
        </div>
      </SectionCard>
    </>
  );
}
