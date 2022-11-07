import cn from "classnames";

import styles from "./SectionCard.module.scss";
export type DesItem = {
  icon?: React.ReactNode;
  text: string;
};
export interface Props {
  className?: string;
  textClassName?: string;
  children?: React.ReactNode;
  title: string;
  list?: DesItem[];
  mode?: "left" | "right";
}
export default function SectionCard({
  title,
  children,
  className,
  textClassName,
  list,
  mode,
}: Props) {
  const _className = cn(
    styles["section-card"],
    { [styles.right]: mode === "right" },
    className
  );
  return (
    <div className={_className}>
      <div className={cn(styles["section-card-text"], textClassName)}>
        <h2>{title}</h2>
        {list?.map((item, index) => {
          const { icon, text } = item;
          return (
            <div className={styles["des-item"]} key={index}>
              {icon}
              <span>{text}</span>
            </div>
          );
        })}
      </div>
      <div className="w-72"></div>
      <div className={styles["section-card-content"]}>{children}</div>
    </div>
  );
}
