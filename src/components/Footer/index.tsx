import logo from "assets/images/logo-footer.svg";
import cn from "classnames";
import BilibliIcon from "components/Icons/BilibiliIcon";
import EmailIcon from "components/Icons/EmailIcon";
import LocationIcon from "components/Icons/LocationIcon";
import PhoneIcon from "components/Icons/PhoneIcon";
import QQIcon from "components/Icons/QQIcon";
import TiktokIcon from "components/Icons/TiktokIcon";
import TimeIcon from "components/Icons/TimeIcon";
import WechatIcon from "components/Icons/WechatIcon";
import Image from "next/future/image";
import { useTranslation } from "next-i18next";

import styles from "./Footer.module.scss";

type LinkItem = {
  name: string;
  url?: string;
};

export default function Footer() {
  const { t } = useTranslation("common");
  return (
    <div className={cn(styles["footer"])}>
      <div className="container grid grid-cols-2">
        <div className={styles["col-card"]}>
          <div className="">
            <Image alt="" src={logo} />
          </div>
          <div className={styles["left-section"]}>
            <LocationIcon />
            <span>{t("footer.location")}</span>
          </div>
          <div className={styles["left-section"]}>
            <TimeIcon />
            <span>{t("footer.workTime")}</span>
          </div>
          <div className={styles["left-section"]}>
            <PhoneIcon />
            <span>{t("footer.contact")}</span>
          </div>
          <div className={styles["left-section"]}>
            <EmailIcon />
            <span>{t("footer.email")}</span>
          </div>
          <div className={styles["left-section"]}>
            <div className="flex flex-row items-center">
              <BilibliIcon className="mr-6" />
              <TiktokIcon className="mr-6" />
              <WechatIcon className="mr-6" />
              <QQIcon />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4">
          <div className={styles["col-card"]}>
            <h2>{t("footer.product.title")}</h2>
            {(
              t("footer.product.values", {
                returnObjects: true,
              }) as LinkItem[]
            ).map((item: LinkItem, index: number) => (
              <p key={String(index)}>{item.name}</p>
            ))}
          </div>
          <div className={styles["col-card"]}>
            <h2>解决方案</h2>
            <p>
              <a href="">品牌商</a>
            </p>
            <p>
              <a href="">材料商</a>
            </p>
            <p>
              <a href="">制造商</a>
            </p>
            <p>
              <a href="">生态合作伙伴</a>
            </p>
          </div>
          <div className={styles["col-card"]}>
            <h2>供应链</h2>
            <p>
              <a href="">美安科技</a>
            </p>
            <p>
              <a href="">智慧生物科技</a>
            </p>
            <p>
              <a href="">美达布料工艺</a>
            </p>
          </div>
          <div className={styles["col-card"]}>
            <h2>下载中心</h2>
            <p>
              <a href="">Revofim</a>
            </p>
            <p>
              <a href="">Versebook</a>
            </p>
            <p>
              <a href="">Versekit</a>
            </p>
            <p>
              <a href="">KicksCAD</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
