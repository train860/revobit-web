import cn from "classnames";
import Image from "next/image";

import bg from "./bg.png";
import styles from "./SmallCard.module.scss";
interface Props {
  icon: string;
  title: string;
  description: string;
  active?: boolean;
  onClick?: () => void;
}
export default function SmallCard({
  active,
  icon,
  title,
  description,
  onClick,
}: Props) {
  return (
    <div className={cn(styles.card)} onClick={onClick}>
      <div className={styles["icon-wrap"]}>
        <div className={styles["icon-bg"]}></div>
        <div className={styles.icon}>
          <Image src={icon} alt={title} fill className="image" />
        </div>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p>{description}</p>
      </div>
      {active && (
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image src={bg} fill alt="" />
        </div>
      )}
    </div>
  );
}
