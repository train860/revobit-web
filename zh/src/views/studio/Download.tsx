import Image from "next/image";
import styles from "styles/Studio.module.scss";
export default function Download() {
  return (
    <div className={styles.download}>
      <h2>下载端口</h2>

      <div className={styles.download__content}>
        <div className={styles.download__bg}>STUDIO</div>
        <div className={styles.download__wrap}>
          <div className={styles.card}>
            <div className={styles.icon__wrap}>
              <Image src="/images/studio/d1.png" fill alt="" />
            </div>
            <p>下载Revofim-Studio</p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon__wrap}>
              <Image src="/images/studio/d2.png" fill alt="" />
            </div>
            <p>申请使用</p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon__wrap}>
              <Image src="/images/studio/d3.png" fill alt="" />
            </div>
            <p>申请销售演示</p>
          </div>
        </div>
      </div>
    </div>
  );
}
