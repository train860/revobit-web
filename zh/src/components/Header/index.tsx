import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import {
  ControlledMenu,
  MenuItem,
  MenuState,
  SubMenu,
  useMenuState,
} from "@szhsin/react-menu";
import logo from "assets/images/logo-header.svg";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useCallback, useRef, useState } from "react";
import Headroom from "react-headroom";

import styles from "./Header.module.scss";

type MyMenuState = {
  [key: number]: MenuState;
};

interface Props {
  className?: string;
}
export default function Header({ className }: Props) {
  const router = useRouter();

  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [menuState, setMenuState] = useState<MyMenuState>({
    0: "closed",
    1: "closed",
    2: "closed",
  });
  const timer = useRef<Record<number, number>>({
    0: 0,
    1: 0,
    2: 0,
  });

  //const [menuProps, toggleMenu] = useMenuState({ transition: true });

  const mouseEvents = (index: number) => ({
    onMouseEnter: () => {
      //menuProps.state !== "closing" && toggleMenu(true);
      if (menuState[index] !== "closing") {
        clearTimeout(timer.current[index]);
        setMenuState({ ...menuState, [index]: "opening" });
      }
    },
    onMouseLeave: () => {
      setMenuState({ ...menuState, [index]: "closing" });
      const t = setTimeout(
        () => setMenuState({ ...menuState, [index]: "closed" }),
        1
      );
      timer.current[index] = Number(t);
    },
  });

  const handleMenuItemClick = (url: string) => {
    location.href = url;
  };

  const isActive = useCallback(
    (key: string) => {
      switch (key) {
        case "index":
          return router.pathname === "/";
        case "1":
          return (
            router.pathname.indexOf("fim") > -1 ||
            router.pathname.indexOf("studio") > -1
          );
        case "2":
          return router.pathname.indexOf("verse") > -1;
        case "3":
          return router.pathname.indexOf("cad") > -1;
      }
      return false;
    },
    [router.pathname]
  );
  return (
    <Headroom className={cn(styles["header"], className)}>
      <div className={cn(styles["header-wrap"], "container")}>
        <div className={styles["logo"]}>
          <Image alt="" fill src={logo} />
        </div>
        <ul className={styles["menu"]}>
          <li className={cn({ [styles["active"]]: isActive("index") })}>
            <Link href="/">首页</Link>
            {isActive("index") && <div className={styles.line}></div>}
          </li>
          <li className={cn({ [styles["active"]]: isActive("1") })}>
            <a href="javascript:;" ref={ref0} {...mouseEvents(0)}>
              数字化解决方案
            </a>
            {isActive("1") && <div className={styles.line}></div>}
          </li>
          <li className={cn({ [styles["active"]]: isActive("2") })}>
            <a href="javascript:;" ref={ref1} {...mouseEvents(1)}>
              材料数字化
            </a>
            {isActive("2") && <div className={styles.line}></div>}
          </li>
          <li className={cn({ [styles["active"]]: isActive("3") })}>
            <a href="javascript:;" ref={ref2} {...mouseEvents(2)}>
              设计工具
            </a>
            {isActive("3") && <div className={styles.line}></div>}
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
        state={menuState[0]}
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
          <MenuItem onClick={() => handleMenuItemClick("/studio.html")}>
            Revofim Studio
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("/fim/library.html")}>
            Revofim Library
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("/fim/manager.html")}>
            Revofim Manager
          </MenuItem>
          <MenuItem
            className={styles["last"]}
            onClick={() => handleMenuItemClick("/trends.html")}
          >
            Revofim Trends
          </MenuItem>
        </div>
      </ControlledMenu>
      <ControlledMenu
        {...mouseEvents(1)}
        state={menuState[1]}
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
        state={menuState[2]}
        transition={true}
        className={styles["menu-dropdown"]}
        anchorRef={ref2}
      >
        <div className={styles["menu-dropdown__wrap"]}>
          <MenuItem
            className={cn(styles["first"], styles["last"])}
            onClick={() => handleMenuItemClick("/cad.html")}
          >
            KicksCAD
          </MenuItem>
        </div>
      </ControlledMenu>
    </Headroom>
  );
}
