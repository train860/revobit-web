import cn from "classnames";
import SectionCard from "components/SectionCard";
import Image from "next/image";
import styles from "styles/Trends.module.scss";
export default function InspirationSection() {
  return (
    <>
      <SectionCard
        grid
        title={"如何快速获悉当前市场潮流动向"}
        mode={"right"}
        className="pb-37"
        list={[
          {
            icon: "/images/trends/i1.png",
            text: "海量电商热销款式",
            description: "淘宝、天猫、抖音电商、亚马逊等电商平台的海量热销款式",
          },
          {
            icon: "/images/trends/i2.png",
            text: "全网潮搭款式聚合",
            description:
              "数百万instagram、抖音、小红书、微博等社交平台的鞋服类潮人穿搭",
          },
          {
            icon: "/images/trends/i2.png",
            text: "潮流爆款元素拆解",
            description:
              "基于电商爆款与潮人穿搭，通过AI算法的识别与拆解，洞察当前最流行的设计元素",
          },
        ]}
      >
        <div className={cn(styles["image-wrap"], " w-4/5")}>
          <Image
            src="/images/trends/ins1.png"
            fill
            className="image"
            alt="如何快速获悉当前市场潮流动向"
          />
        </div>
      </SectionCard>
      <SectionCard
        title={"如何高效且准确地进行素材搜集"}
        mode={"left"}
        className="pb-37"
        list={[
          {
            icon: "/images/trends/i1.png",
            text: "AI多模态搜索",
            description:
              "自研AI深度学习算法，不仅支持多个文本标签组合筛选，还可结合颜色、相似图等进行联合搜索，更高效准确地找到心意素材",
          },
          {
            icon: "/images/trends/i2.png",
            text: "方便快捷的素材管理",
            description:
              "可以新建不同主题的企划案，将素材进行针对性的整理与归类，并且支持一键生成设计企划案",
          },
          {
            icon: "/images/trends/i2.png",
            text: "数据辅助分析决策",
            description:
              "所有电商款式或穿搭图，都有对应的衡量指标进行参考，如电商的销量、销售额等，社交的点赞数、评论数等，提供给使用者进行决策参考",
          },
        ]}
      >
        <div className={cn(styles["image-wrap"], " w-4/5")}>
          <Image
            src="/images/trends/ins2.png"
            fill
            className="image"
            alt="如何高效且准确地进行素材搜集"
          />
        </div>
      </SectionCard>
    </>
  );
}
