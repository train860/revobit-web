import cn from "classnames";
import Button from "components/Button";

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
        <FormItem label="名字：" mode={"horizontal"} type={"text"} />
        <FormItem label="公司名称：" mode={"horizontal"} type={"text"} />
        <FormItem label="电话或邮箱：" mode={"horizontal"} type={"text"} />
      </div>

      <FormItem label="留言：" mode={"vertical"} type={"textarea"} />
      <div className="flex justify-center">
        <Button className="opacity-50">提交</Button>
      </div>
    </div>
  );
}
