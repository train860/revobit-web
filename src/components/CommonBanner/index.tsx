import cn from "classnames";
import Button from "components/Button";
import Image from "next/image";
import React from "react";

import styles from "./CommonBanner.module.scss";
interface Props {
  id?: string;
  className?: string;
  image: string;
  title?: string | React.ReactNode;
  subtitle?: string;
  description?: string;
  buttonText: string | string[];
  buttonClassnames?: string | string[];
  buttonLink?: string;
}

export default function CommonBanner(props: Props) {
  let buttons: string[] = [];
  let btnClassnames: string[] = [];
  if (Array.isArray(props.buttonText)) {
    buttons = props.buttonText;
  } else {
    buttons = [props.buttonText];
  }
  if (props.buttonClassnames) {
    btnClassnames = Array.isArray(props.buttonClassnames)
      ? props.buttonClassnames
      : [props.buttonClassnames];
  }

  return (
    <div id={props.id} className={cn(styles["common-banner"], props.className)}>
      <Image src={props.image} alt="" fill className={styles["image"]} />
      <div className={styles["cover"]}>
        <div className={styles["content"]}>
          {props.title && <div className={styles["title"]}>{props.title}</div>}
          {props.subtitle && (
            <div className={styles["subtitle"]}>{props.subtitle}</div>
          )}
          <p>{props.description}</p>
          <div className={styles["buttons"]}>
            {buttons.map((text, index) => (
              <Button
                className={cn(styles["btn"], btnClassnames[index] || "")}
                key={String(index)}
              >
                {text}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
