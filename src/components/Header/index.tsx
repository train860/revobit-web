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
import { useRef } from "react";
import Headroom from "react-headroom";

import styles from "./Header.module.scss";
interface Props {
  className?: string;
}
export default function Header({ className }: Props) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;
  const ref = useRef(null);
  const id = useRef(0);
  const [menuProps, toggleMenu] = useMenuState({ transition: true });

  const mouseEvents =
    locale === "zh"
      ? {
          onMouseEnter: () => {
            clearTimeout(id.current);
            menuProps.state !== "closing" && toggleMenu(true);
          },
          onMouseLeave: () => {
            const timer = setTimeout(() => toggleMenu(false), 100);
            id.current = Number(timer);
          },
        }
      : null;

  return (
    <Headroom
      className={cn(
        styles["header"],
        { [styles["header-en"]]: locale === "en" },
        className
      )}
    >
      <div className={cn(styles["header-wrap"], "container")}>
        <div className={styles["logo"]}>
          <Image
            alt=""
            fill
            src={locale === "zh" ? logo : "/images/logo-en.png"}
          />
        </div>
        <ul className={styles["menu"]}>
          <li className={styles["active"]}>
            <Link href="/">{t("header.home")}</Link>
            <div className={styles.line}></div>
          </li>
          <li>
            <a href="" ref={ref} {...mouseEvents}>
              {t("header.product")}
            </a>
          </li>
          {locale === "zh" ? (
            <>
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
            </>
          ) : (
            <li>
              <a href="">Contact</a>
            </li>
          )}
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
