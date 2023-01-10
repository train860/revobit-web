import Image from "next/image";
import styles from "styles/About.module.scss";

interface Props {
  title: string;
  time: string;
  link?: string;
  image: string;
}
export default function Card(props: Props) {
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className={styles.cover}></div>
      <div className={styles.content}>
        <div className="time">{props.time}</div>
        <h2>{props.title}</h2>
        <div className={styles.icon}>
          <Image src={"/images/icons/btn-next.png"} alt="" fill />
        </div>
      </div>
    </div>
  );
}
