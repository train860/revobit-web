import cn from "classnames";

import styles from "./Button.module.scss";
export interface Props {
  className?: string;
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}
export default function Button({ children, className, size, onClick }: Props) {
  const _className = cn(styles["button"], className, styles[size || "medium"]);
  return (
    <button className={_className} onClick={onClick}>
      {children}
    </button>
  );
}
