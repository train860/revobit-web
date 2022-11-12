import Image from "next/future/image";

import styles from "./LightCard.module.scss";
interface Props {
  icon: string;
  title: string;
  description: string;
}
export default function LightCard({ icon, title, description }: Props) {
  return (
    <div className={styles["light-card"]}>
      <div className={styles.icon}>
        <Image src={icon} alt={title} fill className="image" />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
