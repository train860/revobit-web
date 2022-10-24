import cn from "classnames";
import Button from "components/Button";
import BuildingIcon from "components/Icons/BuildingIcon";
import MessageIcon from "components/Icons/MessageIcon";
import PhoneIcon from "components/Icons/PhoneIcon";
import UserIcon from "components/Icons/UserIcon";

import styles from "./ContactForm.module.scss";
import FormItem from "./FormItem";
export interface Props {
  className?: string;
  children?: React.ReactNode;
}
export default function ContactForm({ className }: Props) {
  const _className = cn(styles["contact-form"], className);
  return (
    <div className={_className}>
      <div className="grid grid-cols-3 gap-4">
        <FormItem
          icon={<UserIcon />}
          label="名字："
          mode={"horizontal"}
          type={"text"}
        />
        <FormItem
          icon={<BuildingIcon />}
          label="公司名称："
          mode={"horizontal"}
          type={"text"}
        />
        <FormItem
          icon={<PhoneIcon />}
          label="电话或邮箱："
          mode={"horizontal"}
          type={"text"}
        />
      </div>

      <FormItem
        icon={<MessageIcon />}
        label="留言："
        mode={"vertical"}
        type={"textarea"}
      />
      <div className="flex justify-center">
        <Button className="opacity-50">提交</Button>
      </div>
    </div>
  );
}
