import Image from "next/image";

import styles from "./BigCard.module.scss";
interface Props {
  icon: string;
  title: string;
  description: string;
}
export default function BigCard({ icon, title, description }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.bg}></div>
      <div className={styles.icon}>
        <Image src={icon} alt={title} fill className="image" />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
