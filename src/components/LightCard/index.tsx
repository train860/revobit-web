import cn from "classnames";
import Image from "next/future/image";

import styles from "./LightCard.module.scss";
interface Props {
  size?: "small" | "medium" | "large";
  icon: string;
  title: string;
  description: string;
}
export default function LightCard({ icon, title, description, size }: Props) {
  const _className = cn(
    styles["light-card"],
    { [styles.small]: size === "small" },
    { [styles.medium]: size === "medium" },
    { [styles.large]: size === "large" }
  );
  return (
    <div className={_className}>
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
