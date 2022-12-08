import { animated, config, useSpring } from "@react-spring/web";
import cn from "classnames";
import Button from "components/Button";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
    { width: "104px", height: "73px", icon: "建发集团" },
    { width: "200px", height: "100px", icon: "GOLD EMPEROR" },
    { width: "75px", height: "74px", icon: "合作商-03" },
    { width: "80px", height: "87px", icon: "合作商-04" },
    { width: "150px", height: "22px", icon: "KINGLIKE荣信" },
    { width: "160px", height: "41px", icon: "Caleres" },
    { width: "120px", height: "33px", icon: "其云科技" },
    { width: "150px", height: "26px", icon: "合作商-06" },
    { width: "200px", height: "15px", icon: "隆丰革乐美有限公司" },
    { width: "130px", height: "49px", icon: "双驰企业" },
    { width: "140px", height: "41px", icon: "华峰工贸" },
    { width: "170px", height: "38px", icon: "雄宝鞋业" },
  ],
  [
    { width: "140px", height: "51px", icon: "兴业科技" },
    { width: "120px", height: "57px", icon: "华峰" },
    { width: "80px", height: "84px", icon: "冠星" },
    { width: "80px", height: "75px", icon: "路豹" },
    { width: "140px", height: "109px", icon: "皮裕皮革" },
    { width: "60px", height: "62px", icon: "普斯特" },
    { width: "160px", height: "43px", icon: "信泰集团" },
    { width: "170px", height: "57px", icon: "丁守鞋材" },
    { width: "160px", height: "40px", icon: "Paiho" },
    { width: "95px", height: "75px", icon: "旭泰" },
  ],
  [
    { width: "160px", height: "52px", icon: "microsoft for startups" },
    { width: "150px", height: "33px", icon: "阿里云" },
    { width: "160px", height: "54px", icon: "华为云" },
  ],
];
const tabItems: string[] = ["品牌", "制造商", "材料商", "生态合作"];

function BrandSection({ index }: { index: number }) {
  const triggerRef = useRef(null);
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false,
  });
  const imgStyle = useSpring({
    config: { ...config.default },
    from: { opacity: 0, scale: 0 },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      scale: dataRef?.isIntersecting ? 1 : 0,
    },
  });
  return (
    <div
      className={cn(styles.brand, "container")}
      ref={triggerRef}
      key={String(tabItems[index])}
    >
      {items[index].map((item: ListItem, index: number) => {
        return (
          <div className={styles.item} key={String(index)}>
            <animated.div
              className={styles["image-wrap"]}
              style={{ width: item.width, height: item.height, ...imgStyle }}
            >
              <Image src={require(`./images/${item.icon}.png`)} alt="" fill />
            </animated.div>
          </div>
        );
      })}
    </div>
  );
}
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
      <BrandSection key={String(activeIndex)} index={activeIndex} />
    </div>
  );
}
