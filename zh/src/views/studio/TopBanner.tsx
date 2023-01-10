import Image from "next/image";
import styles from "styles/Studio.module.scss";
export default function TopBanner() {
  return (
    <div className={styles["top-banner"]}>
      <div className={styles["top-banner-content"]}>
        <div className={styles["top-banner-text"]}>
          <Image src="/images/studio/banner_text.png" alt="" fill />
        </div>
        <p>运用3D设计快速沟通和评审</p>
        <div className={styles.shoe}>
          <div className={styles["shoe-gif"]}>
            <Image src="/images/studio/shoe.gif" alt="" fill />
          </div>
          <div className={styles["shoe-under"]}>
            <Image src="/images/studio/shoe_under.png" alt="" fill />
          </div>
        </div>
      </div>
    </div>
  );
}
