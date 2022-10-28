import cn from "classnames";
import Image from "next/future/image";

import styles from "./Tabbar.module.scss";
export type TabbarItem = {
  icon: string | React.ReactNode;
  text: string;
};
export interface Props {
  simple?: boolean;
  className?: string;
  items: TabbarItem[];
  activeIndex: number;
  onItemChange?: (index: number) => void;
}
export default function Tabbar({
  simple,
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
            onMouseEnter={() => onItemChange?.(index)}
            className={cn(styles["tabbar-item"], {
              [styles["active"]]: activeIndex === index,
            })}
            key={index}
          >
            {!simple && (
              <div className={styles["icon"]}>
                <div className={styles.bg}></div>
                {icon && (
                  <Image
                    src={require(`assets/icons/${icon}`)}
                    alt=""
                    style={{ width: "2.5rem" }}
                  />
                )}
              </div>
            )}

            <div className={styles["text"]}>{text}</div>
          </div>
        );
      })}
    </div>
  );
}
