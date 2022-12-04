import cn from "classnames";
import Button from "components/Button";
import Image from "next/image";
import styles from "styles/Verse.module.scss";
export default function SettingSection() {
  return (
    <div className={styles.setting}>
      <div className={cn(styles.mask, styles.mask1)}>
        <div className="relative h-full w-full">
          <Image src="/images/verse/mask1.png" fill alt="" />
        </div>
      </div>
      <div className={cn(styles.mask, styles.mask2)}>
        <div className="relative h-full w-full">
          <Image src="/images/verse/mask2.png" fill alt="" />
        </div>
      </div>
      <div className={cn(styles["setting-wrap"], "container")}>
        <div className={styles.main}>
          <h2 className={styles.title}>技术参数与工作站配置要求</h2>
          <Button size="small">查看详情</Button>
        </div>
        <div className={styles["image-wrap"]}>
          <Image
            src="/images/verse/设计巧妙，极致架构.png"
            fill
            alt=""
            className="image"
          />
        </div>
      </div>
    </div>
  );
}
