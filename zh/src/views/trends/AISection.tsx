import cn from "classnames";
import SectionCard from "components/SectionCard";
import Image from "next/image";
import styles from "styles/Trends.module.scss";
export default function AISection() {
  return (
    <>
      <SectionCard
        title={"关键词创款"}
        subtitle="通过输入品类或款式，可以快速生成基础款式进行修改调整，帮助品牌大副缩短从0-1过程的时间"
        mode={"right"}
        className="pb-37"
      >
        <div className={cn(styles["image-wrap"], " w-4/5")}>
          <Image
            src="/images/trends/ai1.png"
            fill
            className="image"
            alt="可视化管理"
          />
        </div>
      </SectionCard>
      <SectionCard
        title={"单图创款"}
        subtitle="通过上传一个款式图，可以锁定特定部位（如下装），进行拓款与拓色的操作，大幅提升快反的效率"
        mode={"left"}
        className="pb-37"
      >
        <div className={cn(styles["image-wrap"], " w-4/5")}>
          <Image
            src="/images/trends/ai2.png"
            fill
            className="image"
            alt="可视化管理"
          />
        </div>
      </SectionCard>
      <SectionCard
        title={"多图融合创款"}
        subtitle="通过提取两个图片的特征进行融合，可以快速生成新的款式"
        mode={"right"}
        className="pb-37"
      >
        <div className={cn(styles["image-wrap"], " w-4/5")}>
          <Image
            src="/images/trends/ai3.png"
            fill
            className="image"
            alt="可视化管理"
          />
        </div>
      </SectionCard>
      <SectionCard
        title={"智能拓色"}
        subtitle="一键生成更多的配色方案"
        mode={"left"}
        className="pb-37"
      >
        <div className={cn(styles["image-wrap"], " w-4/5")}>
          <Image
            src="/images/trends/ai4.png"
            fill
            className="image"
            alt="可视化管理"
          />
        </div>
      </SectionCard>
    </>
  );
}
