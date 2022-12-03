import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import {
  ControlledMenu,
  MenuItem,
  SubMenu,
  useMenuState,
} from "@szhsin/react-menu";
import logo from "assets/images/logo-header.svg";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Headroom from "react-headroom";

import styles from "./Header.module.scss";
interface Props {
  className?: string;
}
export default function Header({ className }: Props) {
  const ref = useRef(null);

  return (
    <Headroom className={cn(styles["header"], styles["header-en"], className)}>
      <div className={cn(styles["header-wrap"], "container")}>
        <div className={styles["logo"]}>
          <Image alt="" fill src={"/images/logo-en.png"} />
        </div>
        <ul className={styles["menu"]}>
          <li className={styles["active"]}>
            <Link href="/">Home</Link>
            <div className={styles.line}></div>
          </li>
          <li>
            <a href="" ref={ref}>
              Product
            </a>
          </li>

          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </Headroom>
  );
}
