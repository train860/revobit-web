import cn from "classnames";
import Button from "components/Button";
import Image from "next/future/image";
import { useEffect, useState } from "react";

import styles from "./Brand.module.scss";

export type ListItem = {
  icon: string;
};
const items: string[][] = [
  [
    "安踏",
    "李宁",
    "x特步",
    "peak",
    "fila",
    "森马",
    "balabala",
    "鸿星尔克",
    "红蜻蜓",
    "TSUBO",
    "alexander wang",
    "charles-&-keith",
    "BrownShoe",
    "Dr kong",
    "Descente",
  ],
  [
    "建发集团",
    "GOLD EMPEROR",
    "合作商-03",
    "合作商-04",
    "KINGLIKE荣信",
    "Caleres",
    "其云科技",
    "合作商-06",
    "隆丰革乐美有限公司",
    "双驰企业",
    "华峰工贸",
    "雄宝鞋业",
  ],
  [
    "兴业科技",
    "华峰",
    "冠星",
    "路豹",
    "皮裕皮革",
    "普斯特",
    "信泰集团",
    "丁守鞋材",
    "Paiho",
    "旭泰",
  ],
  ["microsoft for startups", "阿里云", "华为云"],
];
const tabItems: string[] = ["品牌", "制造商", "材料商", "生态合作伙伴"];
export default function Brand() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [list, setList] = useState<ListItem[]>([]);
  useEffect(() => {
    const mList = [];
    for (let i = 1; i <= 24; i++) {
      mList.push({ icon: `./images/${i}.svg` });
    }
    setList([...mList]);
  }, []);
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
      <div className={styles.brand}>
        {list.map((item: ListItem, index: number) => {
          return (
            <div className={styles.item} key={String(index)}>
              {/**<Image src={require(item.icon)} alt="" />**/}
            </div>
          );
        })}
      </div>
    </div>
  );
}
