import cn from "classnames";

import styles from "./Button.module.scss";
export interface Props {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}
export default function Button({ children, className, onClick }: Props) {
  const _className = cn(styles["button"], className);
  return (
    <button className={_className} onClick={onClick}>
      {children}
    </button>
  );
}
