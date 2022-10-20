import cn from "classnames";

import styles from "./Button.module.scss";
export interface Props {
  className?: string;
  children?: React.ReactNode;
}
export default function Button({ children, className }: Props) {
  const _className = cn(styles["button"], className);
  return <button className={_className}>{children}</button>;
}
