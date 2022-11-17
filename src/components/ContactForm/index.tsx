import "react-toastify/dist/ReactToastify.min.css";

import cn from "classnames";
import Button from "components/Button";
import BuildingIcon from "components/Icons/BuildingIcon";
import EmailIcon from "components/Icons/EmailIcon";
import MessageIcon from "components/Icons/MessageIcon";
import PhoneIcon from "components/Icons/PhoneIcon";
import UserIcon from "components/Icons/UserIcon";
import { useApi } from "hooks/useApi";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

import styles from "./ContactForm.module.scss";
import FormItem from "./FormItem";
export interface Props {
  page?: string;
  className?: string;
  children?: React.ReactNode;
}
export default function ContactForm({ page, className }: Props) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;
  const api = useApi();
  const [values, setValues] = useState<Record<string, string>>({});
  const _className = cn(styles["contact-form"], className);
  const handleChange = (key: string, value: string) => {
    values[key] = value;
    setValues({ ...values });
  };
  const handleSubmit = () => {
    //todo check empty
    const id = toast.loading("数据提交中...");

    api.records
      .create("message", { ...values, from: page })
      .then((res) => {
        setValues({});
        toast.update(id, {
          render: "操作成功",
          type: toast.TYPE.SUCCESS,
          isLoading: false,
          autoClose: 2000,
          delay: 1000,
        });
      })
      .catch((err) => {
        toast.update(id, {
          render: "操作失败",
          type: toast.TYPE.ERROR,
          isLoading: false,
          autoClose: 2000,
          delay: 1000,
        });
      });
  };
  return (
    <div className={_className}>
      <div className="grid grid-cols-3 gap-4">
        <FormItem
          icon={<UserIcon />}
          label={t("contact.name")}
          mode={"horizontal"}
          type={"text"}
          value={values["name"] || ""}
          onChange={(value) => handleChange("name", value)}
        />
        <FormItem
          icon={<BuildingIcon />}
          label={t("contact.company")}
          mode={"horizontal"}
          type={"text"}
          value={values["company"] || ""}
          onChange={(value) => handleChange("company", value)}
        />
        <FormItem
          icon={locale === "en" ? <EmailIcon /> : <PhoneIcon />}
          label={t("contact.email")}
          mode={"horizontal"}
          type={"text"}
          value={values["contact"] || ""}
          onChange={(value) => handleChange("contact", value)}
        />
      </div>

      <FormItem
        icon={<MessageIcon />}
        label={t("contact.message")}
        mode={"vertical"}
        type={"textarea"}
        value={values["content"] || ""}
        onChange={(value) => handleChange("content", value)}
      />
      <div className="flex justify-center">
        <Button className="opacity-50 mt-15/2" onClick={handleSubmit}>
          {t("contact.submit")}
        </Button>
      </div>
    </div>
  );
}
