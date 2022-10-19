import cn from "classnames";

import styles from "./Footer.module.scss";
export default function Footer() {
  return (
    <div className={cn(styles["footer"])}>
      <div className="container">footer</div>
    </div>
  );
}
