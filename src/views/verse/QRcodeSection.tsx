import Image from "next/future/image";
import styles from "styles/Verse.module.scss";
export default function QRcodeSection() {
  return (
    <div className={styles["qrcode-section"]}>
      <div className={styles["qrcode-card"]}>
        <div className={styles["qrcode-image"]}>
          <Image src="" fill alt="" className="image" />
        </div>
        <p>扫码关注官方公众号</p>
      </div>
      <div className={styles["qrcode-card"]}>
        <div className={styles["qrcode-image"]}>
          <Image src="" fill alt="" className="image" />
        </div>
        <p>微信扫码进入小程序</p>
      </div>
      <div className={styles["qrcode-card"]}>
        <div className={styles["qrcode-image"]}>
          <Image src="" fill alt="" className="image" />
        </div>
        <p>扫码下载APP</p>
      </div>
    </div>
  );
}
