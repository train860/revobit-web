import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import cn from "classnames";
import ArrowDownIcon from "components/Icons/ArrowDownIcon";
import { useRef } from "react";

import styles from "./ContactForm.module.scss";
interface Props {
  className?: string;
  icon?: React.ReactNode;
  label: string;
  mode: "horizontal" | "vertical";
  type: "text" | "textarea" | "select";
  value: string;
  onChange?: (value: string) => void;
}
export default function FormItem(props: Props) {
  const renderItem = () => {
    if (props.type === "textarea") {
      return (
        <textarea
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
    return (
      <div className="text-white flex-1" style={{ margin: "-1.1875rem 0" }}>
        <Menu
          className={styles["select"]}
          onItemClick={(e) => {
            props.onChange?.(e.value);
          }}
          menuButton={
            <MenuButton className="flex flex-row justify-between items-center w-full h-full">
              <div>{props.value}</div>
              <ArrowDownIcon />
            </MenuButton>
          }
          transition
        >
          <MenuItem
            className={cn({ active: props.value === "1-10" })}
            value={"1-10"}
          >
            1-10
          </MenuItem>
          <MenuItem
            className={cn({ active: props.value === "11-50" })}
            value={"11-50"}
          >
            11-50
          </MenuItem>
          <MenuItem
            className={cn({ active: props.value === "51-250" })}
            value={"51-250"}
          >
            51-250
          </MenuItem>
          <MenuItem
            className={cn({ active: props.value === "251+" })}
            value={"251+"}
          >
            251+
          </MenuItem>
        </Menu>
      </div>
    );
  };
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
