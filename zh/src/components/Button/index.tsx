import cn from "classnames";

import styles from "./Button.module.scss";
export interface Props {
  className?: string;
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  style?: React.CSSProperties;
}
export default function Button({
  children,
  className,
  size,
  style,
  onClick,
}: Props) {
  const _className = cn(styles["button"], className, styles[size || "medium"]);
  return (
    <button className={_className} style={style} onClick={onClick}>
      {children}
    </button>
  );
}
