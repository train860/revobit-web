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
import { useCallback, useRef } from "react";
import Headroom from "react-headroom";

import styles from "./Header.module.scss";
interface Props {
  className?: string;
}
export default function Header({ className }: Props) {
  const handleProductClick = useCallback(() => {
    const capability = document.getElementById("capability");
    if (!capability) {
      return;
    }
    window.scrollTo({
      top: capability?.offsetTop,
      behavior: "smooth",
    });
  }, []);
  const handleContactClick = useCallback(() => {
    const form = document.getElementById("contact-form");
    if (!form) {
      return;
    }
    window.scrollTo({
      top: form?.offsetTop,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className={cn(styles["header"])}>
      <div style={{ height: 30 }}></div>
      <Headroom
        pinStart={30}
        className={cn(styles["header-room"], styles["header-en"], className)}
      >
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
              <a href="javascript:;" onClick={handleContactClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </Headroom>
    </div>
  );
}
