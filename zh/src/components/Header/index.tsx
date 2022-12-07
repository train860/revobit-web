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
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useRef, useState } from "react";
import Headroom from "react-headroom";

import styles from "./Header.module.scss";
interface Props {
  className?: string;
}
export default function Header({ className }: Props) {
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [active, setActive] = useState(-1);
  const id = useRef(0);

  //const [menuProps, toggleMenu] = useMenuState({ transition: true });

  const mouseEvents = (index: number) => ({
    onMouseEnter: () => {
      clearTimeout(id.current);
      //menuProps.state !== "closing" && toggleMenu(true);
      active !== index && setActive(index);
    },
    onMouseLeave: () => {
      const timer = setTimeout(() => setActive(-1), 100);
      id.current = Number(timer);
    },
  });

  const handleMenuItemClick = (url: string) => {
    location.href = url;
  };
  return (
    <Headroom className={cn(styles["header"], className)}>
      <div className={cn(styles["header-wrap"], "container")}>
        <div className={styles["logo"]}>
          <Image alt="" fill src={logo} />
        </div>
        <ul className={styles["menu"]}>
          <li className={styles["active"]}>
            <Link href="/">首页</Link>
            <div className={styles.line}></div>
          </li>
          <li>
            <a href="javascript:;" ref={ref0} {...mouseEvents(0)}>
              数字化解决方案
            </a>
          </li>
          <li>
            <a href="javascript:;" ref={ref1} {...mouseEvents(1)}>
              材料数字化
            </a>
          </li>
          <li>
            <a href="javascript:;" ref={ref2} {...mouseEvents(2)}>
              设计工具
            </a>
          </li>
          <li>
            <a href="">品牌案例</a>
          </li>
          <li>
            <a href="">关于我们</a>
          </li>
        </ul>
      </div>
      <ControlledMenu
        {...mouseEvents(0)}
        state={active == 0 ? "opening" : "closing"}
        transition={true}
        className={styles["menu-dropdown"]}
        anchorRef={ref0}
      >
        <div className={styles["menu-dropdown__wrap"]}>
          <MenuItem
            className={styles["first"]}
            onClick={() => handleMenuItemClick("/fim.html")}
          >
            Revofim概览
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("/")}>
            Revofim studio
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("/fim/library.html")}>
            Revofim library
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("/fim/manager.html")}>
            Revofim manager
          </MenuItem>
          <MenuItem
            className={styles["last"]}
            onClick={() => handleMenuItemClick("/trends.html")}
          >
            Revofim trends
          </MenuItem>
        </div>
      </ControlledMenu>
      <ControlledMenu
        {...mouseEvents(1)}
        state={active == 1 ? "opening" : "closing"}
        transition={true}
        className={styles["menu-dropdown"]}
        anchorRef={ref1}
      >
        <div className={styles["menu-dropdown__wrap"]}>
          <MenuItem
            className={styles["first"]}
            onClick={() => handleMenuItemClick("/verse/versekit.html")}
          >
            Versekit
          </MenuItem>
          <MenuItem
            className={styles["last"]}
            onClick={() => handleMenuItemClick("/verse/versebook.html")}
          >
            Versebook
          </MenuItem>
        </div>
      </ControlledMenu>
      <ControlledMenu
        {...mouseEvents(2)}
        state={active == 2 ? "opening" : "closing"}
        transition={true}
        className={styles["menu-dropdown"]}
        anchorRef={ref2}
      >
        <div className={styles["menu-dropdown__wrap"]}>
          <MenuItem className={cn(styles["first"], styles["last"])}>
            KicksCAD
          </MenuItem>
        </div>
      </ControlledMenu>
    </Headroom>
  );
}
