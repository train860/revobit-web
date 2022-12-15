import Image from "next/image";
import styles from "styles/Cad.module.scss";
export default function Highlights() {
  return (
    <div className={styles.highlights}>
      <div className={styles["highlights-content"]}>
        <h2>软件亮点</h2>
        <div className={styles["items"]}>
          <div className={styles["item"]}>
            <div className={styles["item-icon"]}>
              <Image
                className={styles["image"]}
                src="/images/cad/h1.png"
                fill
                alt=""
              />
            </div>
            <p>丰富的工艺造型模板库，快速表达3D创意设计</p>
          </div>
          <div className={styles["item"]}>
            <div className={styles["item-icon"]}>
              <Image
                className={styles["image"]}
                src="/images/cad/h2.png"
                fill
                alt=""
              />
            </div>
            <p>串联鞋履数字化研发各个环节，高效协同</p>
          </div>
          <div className={styles["item"]}>
            <div className={styles["item-icon"]}>
              <Image
                className={styles["image"]}
                src="/images/cad/h3.png"
                fill
                alt=""
              />
            </div>
            <p>设计开发与工厂生产无缝对接，降低沟通成本</p>
          </div>
          <div className={styles["item"]}>
            <div className={styles["item-icon"]}>
              <Image
                className={styles["image"]}
                src="/images/cad/h4.png"
                fill
                alt=""
              />
            </div>
            <p>简单流畅的参数化建模，降低学习使用成本</p>
          </div>
        </div>
      </div>
    </div>
  );
}
