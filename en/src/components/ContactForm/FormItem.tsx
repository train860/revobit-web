import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import cn from "classnames";
import ArrowDownIcon from "components/Icons/ArrowDownIcon";
import Downshift from "downshift";
import { useEffect, useRef } from "react";

import styles from "./ContactForm.module.scss";
import Select from "./Select";
interface Props {
  className?: string;
  icon?: React.ReactNode;
  label: string;
  mode: "horizontal" | "vertical";
  type: "text" | "textarea" | "select";
  value: string;
  onChange?: (value: string) => void;
}

const options = [
  {
    value: "1-10",
    title: "1-10",
  },
  { value: "11-50", title: "11-50" },
  { value: "51-250", title: "51-250" },
  { value: "251-2k", title: "251-2k" },
  { value: "2k-5k", title: "2k-5k" },
  { value: "5k-10k", title: "5k-10k" },
  { value: "10k-50k", title: "10k-50k" },
  { value: "50k-100k", title: "50k-100k" },
  { value: "100k+", title: "100k+" },
];

export default function FormItem(props: Props) {
  const renderItem = () => {
    if (props.type === "textarea") {
      return (
        <textarea
          rows={4}
          className={styles["form-item-input"]}
          value={props.value}
          onChange={(e) => props.onChange?.(e.target.value)}
        />
      );
    }
    if (props.type === "text") {
      return (
        <input
          className={styles["form-item-input"]}
          type="text"
          value={props.value}
          onChange={(e) => props.onChange?.(e.target.value)}
        />
      );
    }
    return null;
  };
  if (props.type === "select") {
    return (
      <Select
        className={cn(
          styles["form-item"],
          { [styles["vertical"]]: props.mode === "vertical" },
          props.className
        )}
        items={options}
        label={
          <label className={styles["form-item-label"]}>
            {props.icon && <span className="mr-2">{props.icon}</span>}
            <span>{props.label}</span>
          </label>
        }
        onChange={(val) => props.onChange?.(val)}
      ></Select>
    );
  }
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
      {renderItem()}
    </div>
  );
}
