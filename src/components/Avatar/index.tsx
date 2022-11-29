import Image from "next/future/image";

import styles from "./Avatar.module.scss";
interface Props {
  url: string;
}
export default function Avatar({ url }: Props) {
  return (
    <div className={styles["avatar"]}>
      <Image src={url} fill alt="" />
    </div>
  );
}
