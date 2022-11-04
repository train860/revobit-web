import cn from "classnames";
import Button from "components/Button";
import Image from "next/future/image";
import { useEffect, useState } from "react";

import styles from "./Brand.module.scss";

export type ListItem = {
  icon: string;
  width: string;
  height: string;
};
const items: ListItem[][] = [
  [
    { width: "95px", height: "95px", icon: "安踏" },
    { width: "108px", height: "108px", icon: "李宁" },
    { width: "130px", height: "73px", icon: "x特步" },
    { width: "130px", height: "94px", icon: "peak" },
    { width: "100px", height: "35px", icon: "fila" },
    { width: "115px", height: "26px", icon: "森马" },
    { width: "150px", height: "42px", icon: "balabala" },
    { width: "110px", height: "110px", icon: "鸿星尔克" },
    { width: "160px", height: "63px", icon: "红蜻蜓" },
    { width: "140px", height: "35px", icon: "TSUBO" },
    { width: "240px", height: "26px", icon: "alexander wang" },
    { width: "240px", height: "17px", icon: "charles-&-keith" },
    { width: "70px", height: "92px", icon: "BrownShoe" },
    { width: "182px", height: "44px", icon: "Dr kong" },
    { width: "181px", height: "40px", icon: "Descente" },
  ],
  [
    { width: "20px", height: "20px", icon: "建发集团" },
    { width: "20px", height: "20px", icon: "GOLD EMPEROR" },
    { width: "20px", height: "20px", icon: "合作商-03" },
    { width: "20px", height: "20px", icon: "合作商-04" },
    { width: "20px", height: "20px", icon: "KINGLIKE荣信" },
    { width: "20px", height: "20px", icon: "Caleres" },
    { width: "20px", height: "20px", icon: "其云科技" },
    { width: "20px", height: "20px", icon: "合作商-06" },
    { width: "20px", height: "20px", icon: "隆丰革乐美有限公司" },
    { width: "20px", height: "20px", icon: "双驰企业" },
    { width: "20px", height: "20px", icon: "华峰工贸" },
    { width: "20px", height: "20px", icon: "雄宝鞋业" },
  ],
  [
    { width: "20px", height: "20px", icon: "兴业科技" },
    { width: "20px", height: "20px", icon: "华峰" },
    { width: "20px", height: "20px", icon: "冠星" },
    { width: "20px", height: "20px", icon: "路豹" },
    { width: "20px", height: "20px", icon: "皮裕皮革" },
    { width: "20px", height: "20px", icon: "普斯特" },
    { width: "20px", height: "20px", icon: "信泰集团" },
    { width: "20px", height: "20px", icon: "丁守鞋材" },
    { width: "20px", height: "20px", icon: "Paiho" },
    { width: "20px", height: "20px", icon: "旭泰" },
  ],
  [
    { width: "20px", height: "20px", icon: "microsoft for startups" },
    { width: "20px", height: "20px", icon: "阿里云" },
    { width: "20px", height: "20px", icon: "华为云" },
  ],
];
const tabItems: string[] = ["品牌", "制造商", "材料商", "生态合作伙伴"];
export default function Brand() {
  const [activeIndex, setActiveIndex] = useState(0);
  const renderTabs = () => {
    return tabItems.map((item, index) => {
      return (
        <div
          className={cn(styles["tab"], {
            [styles["active"]]: activeIndex === index,
          })}
          key={index}
          onClick={() => setActiveIndex(index)}
        >
          {item}
          <div className={styles["line"]}></div>
        </div>
      );
    });
  };
  return (
    <div className="relative">
      <div className={cn(styles.tabs, "container")}>{renderTabs()}</div>
      <div className={cn(styles.brand, "container")}>
        {items[activeIndex].map((item: ListItem, index: number) => {
          return (
            <div className={styles.item} key={String(index)}>
              <div
                className={styles["image-wrap"]}
                style={{ width: item.width, height: item.height }}
              >
                <Image src={require(`./images/${item.icon}.png`)} alt="" fill />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
