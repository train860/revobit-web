import cn from "classnames";
import Button from "components/Button";
import Image from "next/image";
import React from "react";
import Modal from "react-modal";
import styles from "styles/Verse.module.scss";

import VersekitAttr from "./VersekitAttr";
export default function SettingSection() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  return (
    <div className={styles.setting}>
      <div className={cn(styles.mask, styles.mask1)}>
        <div className="relative h-full w-full">
          <Image src="/images/verse/mask1.png" fill alt="" />
        </div>
      </div>
      <div className={cn(styles.mask, styles.mask2)}>
        <div className="relative h-full w-full">
          <Image src="/images/verse/mask2.png" fill alt="" />
        </div>
      </div>
      <div className={cn(styles["setting-wrap"], "container")}>
        <div className={styles.main}>
          <h2 className={styles.title}>技术参数与工作站配置要求</h2>
          <Button size="small" onClick={() => setIsOpen(true)}>
            查看详情
          </Button>
        </div>
        <div className={styles["image-wrap"]}>
          <Image
            src="/images/verse/设计巧妙，极致架构.png"
            fill
            alt=""
            className="image"
          />
        </div>
      </div>
      <Modal
        className={cn("modal", styles["attr-modal"])}
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        shouldCloseOnOverlayClick={true}
      >
        <VersekitAttr />
      </Modal>
    </div>
  );
}
