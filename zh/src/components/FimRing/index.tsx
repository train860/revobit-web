import cn from "classnames";
import Image from "next/image";

import styles from "./FimRing.module.scss";
import LibraryIcon from "./LibraryIcon";
import TrendsIcon from "./LibraryIcon";
import ManagerIcon from "./ManagerIcon";
import RingIcon from "./RingIcon";
import StudioIcon from "./StudioIcon";

export default function FimRing() {
  return (
    <div className={cn(styles["fim-ring"])}>
      <div className={styles.main}>
        <RingIcon width={"100%"} />
      </div>
      <div className={styles.sider}>
        <div className={styles.item}>
          <div className={styles.icon}>
            <div className={styles["icon-bg"]}></div>
            <div className={styles["icon-wrap"]}>
              <Image
                src={"/images/fim/fim1.png"}
                fill
                alt=""
                className={"image"}
              />
            </div>
          </div>
          <div className={styles.content}>
            <h2>Trend</h2>
            <p>基于海量数据分析，借助AI智能精准洞察趋势打造爆款</p>
          </div>
          <div className={styles["item-bg"]}>
            <Image src={"/images/fim/fim-bar-bg.png"} fill alt="" />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}>
            <div className={styles["icon-bg"]}></div>
            <div className={styles["icon-wrap"]}>
              <Image
                src={"/images/fim/fim2.png"}
                fill
                alt=""
                className={"image"}
              />
            </div>
          </div>
          <div className={styles.content}>
            <h2>Studio</h2>
            <p>交互式3D实时查看与设计，帮助信息无缝沟通传达</p>
          </div>
          <div className={styles["item-bg"]}>
            <Image src={"/images/fim/fim-bar-bg.png"} fill alt="" />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}>
            <div className={styles["icon-bg"]}></div>
            <div className={styles["icon-wrap"]}>
              <Image
                src={"/images/fim/fim3.png"}
                fill
                alt=""
                className={"image"}
              />
            </div>
          </div>
          <div className={styles.content}>
            <h2>Manager</h2>
            <p>实时掌控工作进度，推动关键流程运转，提升整体效率</p>
          </div>
          <div className={styles["item-bg"]}>
            <Image src={"/images/fim/fim-bar-bg.png"} fill alt="" />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}>
            <div className={styles["icon-bg"]}></div>
            <div className={styles["icon-wrap"]}>
              <Image
                src={"/images/fim/fim4.png"}
                fill
                alt=""
                className={"image"}
              />
            </div>
          </div>
          <div className={styles.content}>
            <h2>Library</h2>
            <p>集中管理、沉淀数字资产，实现数字资产的共享与敏捷调用</p>
          </div>
          <div className={styles["item-bg"]}>
            <Image src={"/images/fim/fim-bar-bg.png"} fill alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
