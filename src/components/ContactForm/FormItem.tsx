import cn from "classnames";
import { useRef } from "react";

import styles from "./ContactForm.module.scss";
interface Props {
  className?: string;
  icon?: React.ReactNode;
  label: string;
  mode: "horizontal" | "vertical";
  type: "text" | "textarea";
  value: string;
  onChange?: (value: string) => void;
}
export default function FormItem(props: Props) {
  return (
    <div
      className={cn(
        styles["form-item"],
        { [styles["vertical"]]: props.mode === "vertical" },
        props.className
      )}
    >
      <label className={styles["form-item-label"]}>
        {props.icon && <span className="mr-2">{props.icon}</span>}
        <span>{props.label}</span>
      </label>
      {props.type === "textarea" ? (
        <textarea
          className={styles["form-item-input"]}
          value={props.value}
          onChange={(e) => props.onChange?.(e.target.value)}
        />
      ) : (
        <input
          className={styles["form-item-input"]}
          type="text"
          value={props.value}
          onChange={(e) => props.onChange?.(e.target.value)}
        />
      )}
    </div>
  );
}
