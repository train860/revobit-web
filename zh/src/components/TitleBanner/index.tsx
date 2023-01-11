import Image from "next/image";

import styles from "./TitleBanner.module.scss";
interface Props {
  title: string;
  backgroundImage: string;
}

export default function TitleBanner(props: Props) {
  return (
    <div className={styles["title-banner"]}>
      <Image src={props.backgroundImage} fill alt="" className={styles.image} />
      <div className={styles.cover}>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}
