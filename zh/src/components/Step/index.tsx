import cn from "classnames";

import styles from "./Step.module.scss";
export type DesItem = {
  index: number | number[];
  text: string | string[];
};
export interface Props {
  selectedIndex: number;
  className?: string;
  list: DesItem[];
}
export default function Step({ className, selectedIndex, list }: Props) {
  const _className = cn(styles["steps"], className);
  return (
    <div className={_className}>
      {list.map((item, index) => {
        const _className = cn(
          styles["step"],
          { [styles.first]: index === 0 },
          { [styles.last]: index === list.length - 1 },
          { [styles["circle-step"]]: Array.isArray(item.index) }
        );
        if (Array.isArray(item.index)) {
          return (
            <div className={_className} key={String(item.index)}>
              <div
                className={cn(
                  "w-full text-center",
                  {
                    [styles.active]: selectedIndex > item.index[0],
                  },
                  { [styles.selected]: selectedIndex === item.index[0] }
                )}
              >
                <p>{item.text[0]}</p>
                <div className="flex mt-4">
                  <div className={cn(styles.bar, styles["left-top"])}></div>
                  <div
                    className={styles["circle"]}
                    style={{ marginTop: "-0.375rem" }}
                  ></div>
                  <div className={cn(styles.bar, styles["right-top"])}></div>
                </div>
              </div>
              <div
                className={cn(
                  "w-full text-center",
                  { [styles.active]: selectedIndex > item.index[1] },
                  { [styles.selected]: selectedIndex === item.index[1] }
                )}
              >
                <div className="flex items-end mb-4">
                  <div className={cn(styles.bar, styles["left-bottom"])}></div>
                  <div
                    className={styles["circle"]}
                    style={{ marginBottom: "-0.375rem" }}
                  ></div>
                  <div className={cn(styles.bar, styles["right-bottom"])}></div>
                </div>
                <p>{item.text[1]}</p>
              </div>
            </div>
          );
        }
        return (
          <div
            className={cn(
              _className,
              { [styles.active]: selectedIndex > item.index },
              { [styles.selected]: selectedIndex === item.index }
            )}
            key={String(item.index)}
          >
            <p>&nbsp;</p>
            <div className={styles["progress"]}>
              <div className={styles["line"]}></div>
              <div className={styles["circle"]}></div>
              <div className={styles["line"]}></div>
            </div>
            <p className={styles.text}>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
}
