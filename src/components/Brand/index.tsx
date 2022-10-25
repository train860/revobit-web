import Button from "components/Button";
import Image from "next/future/image";
import { useEffect, useState } from "react";

import styles from "./Brand.module.scss";
export type ListItem = {
  icon: string;
};
export default function Brand() {
  const [list, setList] = useState<ListItem[]>([]);
  useEffect(() => {
    const mList = [];
    for (let i = 1; i <= 24; i++) {
      mList.push({ icon: `./images/${i}.svg` });
    }
    setList([...mList]);
  }, []);

  return (
    <div className="relative">
      <div className={styles.brand}>
        {list.map((item: ListItem, index: number) => {
          return (
            <div className={styles.item} key={String(index)}>
              {/**<Image src={require(item.icon)} alt="" />**/}
            </div>
          );
        })}
      </div>
      <div className={styles.cover}>
        <Button>查看全部客户</Button>
      </div>
    </div>
  );
}
