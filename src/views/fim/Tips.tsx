import cn from "classnames";
import Image from "next/image";
import styles from "styles/Fim.module.scss";
export default function Tips() {
  return (
    <div className={cn(styles.tips, "container")}>
      <div className={styles.content}>
        <div className={styles.icon}>
          <Image src="/images/library/tips-icon.png" fill alt="" />
        </div>
        <div className={styles.body}>
          <h2>设计师的“素材武器库”</h2>
          <p>
            让每个品牌都拥有自己的基因图谱（内容标签树）且随市场数据的变化不断演绎、丰富。
          </p>
        </div>
      </div>
    </div>
  );
}
