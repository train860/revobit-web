import cn from "classnames";
import Image from "next/image";
import styles from "styles/Studio.module.scss";
export default function Number() {
  return (
    <div className={styles.number}>
      <div className="container relative">
        <div className={styles.num}>123</div>
        <div className={styles.title}>简单三步，获得惊人效果</div>
      </div>
      <div className={styles["number-section"]}>
        <div className={styles["image-wrapper"]}>
          <Image
            src="/images/studio/1.png"
            alt=""
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.text}>
          <h2>第一步</h2>
          <h1>上传模型</h1>
        </div>
      </div>
      <div className={styles["number-section"]}>
        <div className={cn(styles["image-wrapper"], styles.small)}>
          <Image
            src="/images/studio/2.png"
            alt=""
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.text}>
          <h2>第二步</h2>
          <h1>模型预览</h1>
        </div>
      </div>
      <div className={styles["number-section"]}>
        <div className={cn(styles["image-wrapper"], styles.small)}>
          <Image
            src="/images/studio/3.png"
            alt=""
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.text}>
          <h2>第三步</h2>
          <h1>材质颜色</h1>
        </div>
      </div>
    </div>
  );
}
