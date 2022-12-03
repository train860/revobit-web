import pager1 from "assets/images/home/pager-1.png";
import pager2 from "assets/images/home/pager-2.png";
import cn from "classnames";
import Progress from "components/Progress";
import Image from "next/image";
import { useState } from "react";
import styles from "styles/Home.module.scss";
export default function Banner() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const imageNode = (
    <Image src="/images/banner.png" alt="" fill className={styles["image"]} />
  );
  const videoNode = (
    <video
      className={styles["bg-video"]}
      autoPlay={true}
      loop={true}
      muted={true}
      controls={false}
    >
      <source src="/videos/main.mp4"></source>
    </video>
  );
  const nodes = [videoNode, imageNode];
  return (
    <div className={styles["top-banner"]}>
      <div className={styles["banner-wrap"]}>{nodes[activeIndex]}</div>
      <div className={styles["mask"]}>
        <div className={cn(styles["content"], "container")}>
          <span className={styles["title"]}>打造虚拟时尚 重构数字世界</span>
          {/** 
          <div className={styles.pager}>
            <div className={styles["pager-wrap"]}>
              <div
                className={cn(styles["pager-item"], {
                  [styles.active]: activeIndex === 0,
                })}
                onClick={() => setActiveIndex(0)}
              >
                <Image src={pager2} alt="" />
                <div className={styles["pager-item-cover"]}></div>
                <Progress
                  className={styles.progress}
                  percent={10}
                  width={25}
                  pathStrokeColor="rgba(255, 255, 255, 0.3)"
                  color={"#fff"}
                  strokeWidth={2}
                />
              </div>
              <div
                className={cn(styles["pager-item"], {
                  [styles.active]: activeIndex === 1,
                })}
                onClick={() => setActiveIndex(1)}
              >
                <Image src={pager1} alt="" />
                <div className={styles["pager-item-cover"]}></div>
              </div>
            </div>
          </div>
          */}
        </div>
      </div>
    </div>
  );
}
