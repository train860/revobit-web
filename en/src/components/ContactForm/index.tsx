import "react-toastify/dist/ReactToastify.min.css";

import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import cn from "classnames";
import Button from "components/Button";
import BuildingIcon from "components/Icons/BuildingIcon";
import EmailIcon from "components/Icons/EmailIcon";
import GroupIcon from "components/Icons/GroupIcon";
import MessageIcon from "components/Icons/MessageIcon";
import PhoneIcon from "components/Icons/PhoneIcon";
import UserIcon from "components/Icons/UserIcon";
import Privacy from "components/Privacy";
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

const contact = {
  name: "Name：",
  company: "Company Name：",
  email: "E-mail：",
  companySize: "Company Size：",
  message: "How can we help?",
  submit: "Submit",
  submitting: "Submitting...",
  succeed: "Form submitted successfully!",
  failed: "Submission failed, please provide all required information.",
};
export default function ContactForm({ page, className }: Props) {
  const api = useApi();
  const [checked, setChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState<Record<string, string>>({});
  const _className = cn(styles["contact-form"], className);
  const handleChange = (key: string, value: string) => {
    values[key] = value;
    setValues({ ...values });
  };
  const handleSubmit = () => {
    if (!checked) {
      toast.warn(
        "Submission failed because your consent is required to submit this form"
      );
      return;
    }

    //todo check empty
    const id = toast.loading(contact.submitting);

    api.records
      .create("message", { ...values, from: page })
      .then((res) => {
        setValues({});
        toast.update(id, {
          render: contact.succeed,
          type: toast.TYPE.SUCCESS,
          isLoading: false,
          autoClose: 2000,
          delay: 1000,
        });
      })
      .catch((err) => {
        toast.update(id, {
          render: contact.failed,
          type: toast.TYPE.ERROR,
          isLoading: false,
          autoClose: 2000,
          delay: 1000,
        });
      });
  };
  return (
    <div className={cn(_className)}>
      <div className="grid grid-cols-4 gap-4">
        <FormItem
          icon={<UserIcon />}
          label={contact.name}
          mode={"horizontal"}
          type={"text"}
          value={values["name"] || ""}
          onChange={(value) => handleChange("name", value)}
        />
        <FormItem
          icon={<BuildingIcon />}
          label={contact.company}
          mode={"horizontal"}
          type={"text"}
          value={values["company"] || ""}
          onChange={(value) => handleChange("company", value)}
        />
        <FormItem
          icon={<EmailIcon />}
          label={contact.email}
          mode={"horizontal"}
          type={"text"}
          value={values["contact"] || ""}
          onChange={(value) => handleChange("contact", value)}
        />
        <FormItem
          className="z-10"
          icon={<GroupIcon style={{ color: "white" }} />}
          label={contact.companySize}
          mode={"horizontal"}
          type={"select"}
          value={values["company_size"] || ""}
          onChange={(value) => handleChange("company_size", value)}
        />
      </div>

      <FormItem
        icon={<MessageIcon />}
        label={contact.message}
        mode={"vertical"}
        type={"textarea"}
        value={values["content"] || ""}
        onChange={(value) => handleChange("content", value)}
      />
      <div className={styles.confirm}>
        <Checkbox
          checked={checked}
          onChange={(e: CheckboxChangeEvent) => setChecked(e.target.checked)}
        >
          <span>
            I consent to the use of my personal information in accordance with
            the{" "}
            <a href="javascript:;" onClick={() => setIsOpen(true)}>
              Privacy Policy
            </a>
            .
          </span>
        </Checkbox>
      </div>
      <div className="flex justify-center">
        <Button className="opacity-50 mt-15/2" onClick={handleSubmit}>
          {contact.submit}
        </Button>
      </div>
      <Privacy open={isOpen} onCancel={() => setIsOpen(false)} />
    </div>
  );
}
