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
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import styles from "./Footer.module.scss";

type LinkItem = {
  name: string;
  url?: string;
};
interface Props {
  className?: string;
}
export default function Footer({ className }: Props) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;
  return (
    <div className={cn(styles["footer"], className)}>
      <div className="container flex flex-row">
        <div className={cn(styles["col-card"], "flex-2")}>
          <div className={styles["logo"]}>
            <Image
              alt=""
              fill
              src={locale === "zh" ? logo : "/images/logo-en.png"}
            />
          </div>
          <div
            className={cn(styles["left-section"], "relative")}
            style={{ alignItems: "start" }}
          >
            <LocationIcon style={{ width: 30 }} />
            <span style={{ marginTop: -4 }}>{t("footer.location")}</span>
          </div>
          <div className={styles["left-section"]}>
            <TimeIcon />
            <span>{t("footer.workTime")}</span>
          </div>
          {locale === "zh" && (
            <div className={styles["left-section"]}>
              <PhoneIcon />
              <span>{t("footer.contact")}</span>
            </div>
          )}
          <div className={styles["left-section"]}>
            <EmailIcon />
            <span>{t("footer.email")}</span>
          </div>
          {locale === "zh" && (
            <div className={styles["left-section"]}>
              <div className="flex flex-row items-center">
                <BilibliIcon className="mr-6" />
                <TiktokIcon className="mr-6" />
                <WechatIcon className="mr-6" />
                <QQIcon />
              </div>
            </div>
          )}
        </div>

        <div className="flex-3 grid grid-cols-5 gap-1">
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
            <h2>{t("footer.solutions.title")}</h2>
            {(
              t("footer.solutions.values", {
                returnObjects: true,
              }) as LinkItem[]
            ).map((item: LinkItem, index: number) => (
              <p key={String(index)}>{item.name}</p>
            ))}
          </div>
          <div className={styles["col-card"]}>
            <h2>{t("footer.chains.title")}</h2>
            {(
              t("footer.chains.values", {
                returnObjects: true,
              }) as LinkItem[]
            ).map((item: LinkItem, index: number) => (
              <p key={String(index)}>{item.name}</p>
            ))}
          </div>
          <div className={styles["col-card"]}>
            <h2>{t("footer.download.title")}</h2>
            {(
              t("footer.download.values", {
                returnObjects: true,
              }) as LinkItem[]
            ).map((item: LinkItem, index: number) => (
              <p key={String(index)}>{item.name}</p>
            ))}
          </div>
          <div className={styles["col-card"]}>
            <h2>{t("footer.about.title")}</h2>
            {(
              t("footer.about.values", {
                returnObjects: true,
              }) as LinkItem[]
            ).map((item: LinkItem, index: number) => (
              <p key={String(index)}>{item.name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
