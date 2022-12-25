import { Modal } from "antd";
import Image from "next/image";

import styles from "./Privacy.module.scss";
interface Props {
  open: boolean;
  onCancel: () => void;
}

const ModalTitle = () => {
  return (
    <div className={styles.title}>
      <span>Privacy Policy</span>
      <div className={styles.title__icon}>
        <Image src="/images/icon/icon-safe.png" fill alt="" />
      </div>
    </div>
  );
};

export default function Privacy(props: Props) {
  const handleCancel = () => {
    props.onCancel();
  };
  return (
    <Modal
      width={710}
      className={"privacy__modal"}
      title={<ModalTitle />}
      open={props.open}
      onCancel={handleCancel}
      footer={null}
    >
      <div className={styles.privacy__modal__content}>
        <p>
          Revobit is committed to protecting the privacy of our users. This
          privacy policy explains how we collect, use, and protect personal data
          on our website.
        </p>
        <h2>Collection and use of personal data</h2>
        <p>
          We collect personal data when you create an account, sign up for
          newsletters, or submit a form on our website. The personal data we
          collect may include your name, email address, and any other
          information you choose to provide.
        </p>
        <p>
          We use personal data to provide you with the services you request, to
          communicate with you, and to improve the functionality and content of
          our website.
        </p>
        <h2>Protection of personal data</h2>
        <p>
          We take reasonable measures to protect personal data from unauthorized
          access, use, or disclosure. We store personal data on secure servers
          and use encryption to protect sensitive data.
        </p>
        <h2>Your rights</h2>
        <p>
          Under the General Data Protection Regulation (GDPR), you have the
          right to access, rectify, erase, or object to the processing of your
          personal data. You also have the right to withdraw your consent at any
          time. To exercise these rights, please contact us using the
          information provided below.
        </p>
        <h2>Changes to this privacy policy</h2>
        <p>
          We may update this privacy policy from time to time. We will post any
          changes on this page, so please check back periodically.
        </p>
        <h2>Contact</h2>
        <p>
          If you have any questions or concerns about our privacy policy or the
          processing of your personal data, please contact us at
          customer@revobit.ai.
        </p>
      </div>
    </Modal>
  );
}
