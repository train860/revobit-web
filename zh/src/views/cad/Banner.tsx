import Image from "next/image";
import styles from "styles/Cad.module.scss";
export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image
        src={"/images/cad/banner.png"}
        alt=""
        fill
        className={styles["image"]}
      />
      <div className={styles["cover"]}>
        <div className={styles["content"]}>
          <div className={styles["title"]}>
            <span>快速上手</span>
            <span className={styles.line}>I</span>
            <span>高效建模</span>
            <span className={styles.line}>I</span>
            <span>精准开版</span>
            <span className={styles.line}>I</span>
            <span>直通生产</span>
          </div>
          <h2>国内领先的鞋类2D开版+3D参数化建模专业软件</h2>
        </div>
      </div>
    </div>
  );
}
