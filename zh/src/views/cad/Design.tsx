import Image from "next/image";
import styles from "styles/Cad.module.scss";
export default function Design() {
  return (
    <div className={styles.design}>
      <div className={styles["design-content"]}>
        <div className={styles["bg-image"]}>
          <Image src="/images/cad/design.png" alt="" fill />
        </div>
        <div className={styles["text"]}>
          <p>设计、创建和修改鞋类模型及其图案，以绝对精确度在3D或2D中</p>
        </div>
      </div>
    </div>
  );
}