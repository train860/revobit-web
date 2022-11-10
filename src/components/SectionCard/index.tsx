import cn from "classnames";
import Image from "next/future/image";

import styles from "./SectionCard.module.scss";
export type DesItem = {
  icon?: string;
  text: string;
};
export interface Props {
  className?: string;
  textClassName?: string;
  children?: React.ReactNode;
  title: string;
  subtitle?: string;
  list?: DesItem[];
  mode?: "left" | "right";
  grid?: boolean;
  gap?: number;
}
export default function SectionCard({
  title,
  subtitle,
  children,
  className,
  textClassName,
  list,
  mode,
  grid,
  gap,
}: Props) {
  const _className = cn(
    styles["section-card"],
    { [styles.right]: mode === "right" },
    { [styles["with-grid"]]: grid },
    className
  );
  return (
    <div className={_className}>
      <div className={cn(styles["section-card-text"], textClassName)}>
        <h2>{title}</h2>
        {subtitle && <p className={styles["subtitle"]}>{subtitle}</p>}
        {list && (
          <div className={styles["list"]}>
            {list?.map((item, index) => {
              const { icon, text } = item;
              return (
                <div className={styles["des-item"]} key={index}>
                  {icon && (
                    <span className={styles.icon}>
                      <Image className="image" src={icon} fill alt={icon} />
                    </span>
                  )}
                  <span>{text}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className={`w-${gap || 12}`}></div>
      <div className={styles["section-card-content"]}>{children}</div>
    </div>
  );
}
