import cn from "classnames";
import Button from "components/Button";
import Image from "next/image";
import styles from "styles/Trends.module.scss";
export default function VideoSection() {
  return (
    <div className={styles.video}>
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
      <div className={cn(styles["video-wrap"], "container")}>
        <div className="flex flex-1 flex-row justify-between">
          <div className={styles.main}>
            <div className={styles["image-wrap"]}>
              <Image
                src={"/images/trends/v1.png"}
                fill
                className="image"
                alt=""
              />
              <div className={styles["play-cover"]}>
                <div className={styles["play-btn"]}>
                  <Image src={"/images/trends/play.png"} fill alt="" />
                </div>
              </div>
            </div>
            <div className={styles["content-wrap"]}>
              <h2>原创新款</h2>
              <p>每月更新百款以上 线上直接预览操作 降低企业成本</p>
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles["image-wrap"]}>
              <Image
                src={"/images/trends/v2.png"}
                fill
                className="image"
                alt=""
              />
              <div className={styles["play-cover"]}>
                <div className={styles["play-btn"]}>
                  <Image src={"/images/trends/play.png"} fill alt="" />
                </div>
              </div>
            </div>
            <div className={styles["content-wrap"]}>
              <h2>在线材料/色彩搭配</h2>
              <p>一段话的介绍一段话的介绍一段话的介绍一段话的介绍</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
