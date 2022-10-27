import Button from "components/Button";
import Image from "next/future/image";

import styles from "./CommonBanner.module.scss";
interface Props {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink?: string;
}

export default function CommonBanner(props: Props) {
  return (
    <div className={styles["common-banner"]}>
      <Image src={props.image} alt="" fill className={styles["image"]} />
      <div className={styles["cover"]}>
        <h2 className={styles["title"]}>{props.title}</h2>
        <p className={styles["subtitle"]}>{props.subtitle}</p>
        <Button>{props.buttonText}</Button>
      </div>
    </div>
  );
}
