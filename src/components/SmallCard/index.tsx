import Image from "next/future/image";

import styles from "./SmallCard.module.scss";
interface Props {
  icon: string;
  title: string;
  description: string;
}
export default function SmallCard({ icon, title, description }: Props) {
  return (
    <div className={styles.card}>
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
    </div>
  );
}
