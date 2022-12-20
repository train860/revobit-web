import Image from "next/image";
import styles from "styles/Studio.module.scss";
interface CardProps {
  icon: string;
  title: string;
}
export default function Card(props: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrap}>
        <Image src={props.icon} fill alt="" />
      </div>
      <p>{props.title}</p>
    </div>
  );
}
