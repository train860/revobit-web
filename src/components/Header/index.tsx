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
import Image from "next/future/image";
import { useRef } from "react";
import Headroom from "react-headroom";

import styles from "./Header.module.scss";
export default function Header() {
  const ref = useRef(null);
  const id = useRef(0);
  const [menuProps, toggleMenu] = useMenuState({ transition: true });

  const mouseEvents = {
    onMouseEnter: () => {
      clearTimeout(id.current);
      menuProps.state !== "closing" && toggleMenu(true);
    },
    onMouseLeave: () => {
      id.current = setTimeout(() => toggleMenu(false), 100);
    },
  };

  return (
    <Headroom className={styles["header"]}>
      <div className="container flex py-3">
        <div className={styles["logo"]}>
          <Image alt="" src={logo} />
        </div>
        <ul className={styles["menu"]}>
          <li>
            <a href="">首页</a>
          </li>
          <li className={styles["active"]}>
            <a href="" ref={ref} {...mouseEvents}>
              产品
            </a>
          </li>
          <li>
            <a href="">解决方案</a>
          </li>
          <li>
            <a href="">供应链</a>
          </li>
          <li>
            <a href="">下载中心</a>
          </li>
          <li>
            <a href="">关于我们</a>
          </li>
        </ul>
      </div>
      <ControlledMenu
        {...menuProps}
        {...mouseEvents}
        className={styles["menu-dropdown"]}
        anchorRef={ref}
        onClose={() => toggleMenu(false)}
      >
        <div className={styles["menu-dropdown__wrap"]}>
          <SubMenu label="Fim系列" className={styles["first"]}>
            <div
              className={cn(styles["menu-dropdown__wrap"], "ml-2")}
              style={{ marginTop: 0 }}
            >
              <MenuItem className={styles["first"]}>Library</MenuItem>
              <MenuItem className={styles["last"]}>Manager</MenuItem>
            </div>
          </SubMenu>
          <MenuItem>Verse系列</MenuItem>
          <MenuItem className={styles["last"]}>KicksCAD</MenuItem>
        </div>
      </ControlledMenu>
    </Headroom>
  );
}
