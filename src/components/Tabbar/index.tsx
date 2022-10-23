import cn from "classnames";

import styles from "./Tabbar.module.scss";
export type TabbarItem = {
  icon: string | React.ReactNode;
  text: string;
};
export interface Props {
  className?: string;
  items: TabbarItem[];
  activeIndex: number;
  onItemChange?: (index: number) => void;
}
export default function Tabbar({
  className,
  activeIndex,
  items,
  onItemChange,
}: Props) {
  const _className = cn(styles["tabbar"], className);
  return (
    <div className={_className}>
      {items.map((item, index) => {
        const { icon, text } = item;
        return (
          <div
            onClick={() => onItemChange?.(index)}
            className={cn(styles["tabbar-item"], {
              [styles["active"]]: activeIndex === index,
            })}
            key={index}
          >
            <div className={styles["icon"]}>{icon}</div>
            <div className={styles["text"]}>{text}</div>
          </div>
        );
      })}
    </div>
  );
}
