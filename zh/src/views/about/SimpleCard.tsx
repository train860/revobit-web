import Image from "next/image";
import styles from "styles/About.module.scss";

interface Props {
  icon: string;
  title: string;
  description: string;
}
export default function SimpleCard(props: Props) {
  return (
    <div className={styles["simple-card"]}>
      <div className={styles["icon"]}>
        <Image src={props.icon} alt="" fill />
      </div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}
