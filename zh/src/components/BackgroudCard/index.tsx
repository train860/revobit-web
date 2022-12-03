import cn from "classnames";
import Image from "next/image";

import styles from "./BackgroundCard.module.scss";

interface Props {
  className?: string;
  image: string;
  background: string;
  vertical?: boolean;
  title: string;
  text: string[];
  size?: "small" | "medium" | "large" | "tall";
}
export default function BackgroundCard({
  className,
  vertical,
  title,
  text,
  image,
  background,
  size,
}: Props) {
  return (
    <div
      className={cn(styles["bg-card"], className, {
        [styles.vertical]: vertical,
        [styles["small"]]: size === "small",
        [styles["large"]]: size === "large",
        [styles["tall"]]: size === "tall",
      })}
      style={{ background }}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
      <div className={styles.icon}></div>
      <div className={styles["bg-image"]}>
        <Image
          src={image}
          alt={title}
          fill
          className={vertical ? styles["image"] : "image"}
        />
      </div>
    </div>
  );
}
