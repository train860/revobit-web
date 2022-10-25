import cn from "classnames";
import Image from "next/future/image";
import { useState } from "react";

import styles from "./Slider.module.scss";
type ListItem = {
  icon: React.ReactNode;
  title: string;
  images: string[];
  desc: string;
};
export interface Props {
  list: ListItem[];
}
export default function Slider(props: Props) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <div className={styles.slider}>
      <div className={styles.controls}>
        {props.list.map((item: ListItem, index: number) => {
          const _className = cn(styles.btn, {
            [styles.active]: activeIndex === index,
          });
          return (
            <div className={_className} key={String(index)}>
              <span className={styles.icon}>{item.icon}</span>
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
      <div className={styles.content}>
        <div className={styles.images}>
          {props.list[activeIndex].images.map((item: string, index: number) => {
            return <Image src={require(item)} alt="" key={String(index)} />;
          })}
        </div>
        <div className={styles.desc}>{props.list[activeIndex].desc}</div>
      </div>
    </div>
  );
}
