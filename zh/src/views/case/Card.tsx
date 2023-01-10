import Image from "next/image";
import styles from "styles/Case.module.scss";

interface Props {
  title: string;
  logo: string;
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
        <div className="logo">
          <Image src={props.logo} alt="" fill />
        </div>
        <h2>{props.title}</h2>
        <div className={styles.icon}>
          <Image src={"/images/icons/btn-next.png"} alt="" fill />
        </div>
      </div>
    </div>
  );
}
