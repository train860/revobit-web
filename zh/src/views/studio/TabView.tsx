import cn from "classnames";
import Image from "next/image";
import { useState } from "react";
import styles from "styles/Studio.module.scss";
export type TabItem = {
  title: string;
  icon: string;
  image: string;
};

const items: TabItem[] = [
  {
    title: "鞋履",
    icon: "/images/studio/Icon_Category_Shoe.png",
    image: "/images/studio/t1.png",
  },
  {
    title: "服装",
    icon: "/images/studio/Icon_Category_Clothes.png",
    image: "/images/studio/服装.png",
  },
  {
    title: "包包",
    icon: "/images/studio/Icon_Category_Bag.png",
    image: "/images/studio/包.png",
  },
  {
    title: "配饰",
    icon: "/images/studio/Icon_Category_Cap.png",
    image: "/images/studio/配饰.png",
  },
  {
    title: "数码",
    icon: "/images/studio/Icon_Category_Other.png",
    image: "/images/studio/数码.png",
  },
  {
    title: "工业品",
    icon: "/images/studio/Icon_Category_Menufacture.png",
    image: "/images/studio/工业品.png",
  },
];

export default function TabView() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={styles["tab-view"]}>
      <h2>素材展示</h2>
      <div className={styles["tab-view__content"]}>
        <div className={styles["image-wrapper"]}>
          <Image
            src={items[activeIndex].image}
            alt=""
            fill
            className={styles.image}
          />
        </div>
        <div className={styles["btns"]}>
          {items.map((item, index) => {
            return (
              <div
                className={cn(styles["btn"], {
                  [styles.active]: index === activeIndex,
                })}
                key={index}
                onClick={() => index !== activeIndex && setActiveIndex(index)}
              >
                <div className={styles["btn__icon"]}>
                  <Image src={item.icon} alt="" fill />
                </div>
                <div className={styles["btn__text"]}>{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
