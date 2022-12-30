import { Collapse, Modal, Switch } from "antd";
import Image from "next/image";
const { Panel } = Collapse;
import styles from "./CookiesModal.module.scss";

const ModalTitle = () => {
  return (
    <div className={styles.title}>
      <span>We use cookies</span>
      <div className={styles.title__icon}>
        <Image src="/images/icon/icon-cloud.png" fill alt="" />
      </div>
    </div>
  );
};
const PanelHeader = (props: { title: string; lock?: boolean }) => {
  return (
    <div className={styles.panel__header}>
      <span>{props.title}</span>
      <div className={styles.switch__wrap}>
        {props.lock && (
          <div className={styles.lock__icon}>
            <Image src="/images/icon/icon-lock.png" fill alt="" />
          </div>
        )}

        <Switch
          className={"my__switch"}
          checked={props.lock}
          disabled={props.lock}
          onClick={(b, e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        />
      </div>
    </div>
  );
};

interface Props {
  open: boolean;
  onCancel: () => void;
  onBtnClick?: (index: number) => void;
}
export default function CookiesModal(props: Props) {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  const handleCancel = () => {
    props.onCancel();
  };
  const handleIconChange = (isActive: boolean | undefined) => {
    if (isActive) {
      return (
        <div className={styles.icon__wrap}>
          <Image src="/images/icon/icon-sub.png" fill alt="" />
        </div>
      );
    }
    return (
      <div className={styles.icon__wrap}>
        <Image src="/images/icon/icon-plus.png" fill alt="" />
      </div>
    );
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
      <div className={styles.cookies__modal}>
        <div className={styles.modal__content}>
          <p>
            We use cookies and other tracking technologies to improve your
            browsing experience on our website, to show you personalized content
            and targeted ads, to analyze our website traffic, and to understand
            where our visitors are coming from.
          </p>
          <Collapse
            accordion
            bordered={false}
            onChange={onChange}
            expandIcon={({ isActive }) => handleIconChange(isActive)}
            className={"my__collapse"}
          >
            <Panel
              header={<PanelHeader title="Your privacy" />}
              key="1"
              className={"my__collapse__panel"}
            >
              <p className={styles.content}>
                Cookies are very small text files that are stored on your
                computer when you visit a website. We use cookies for a variety
                of purposes and to enhance your online experience on our website
                (for example, to remember your account login details). You can
                change your preferences and decline certain types of cookies to
                be stored on your computer while browsing our website. You can
                also remove any cookies already stored on your computer, but
                keep in mind that deleting cookies may prevent you from using
                parts of our website.
              </p>
            </Panel>
            <Panel
              header={<PanelHeader lock title="Strictly necessary cookies" />}
              key="2"
              className={"my__collapse__panel"}
            >
              <p className={styles.content}>
                These cookies are essential to provide you with services
                available through our website and to enable you to use certain
                features of our website. Without these cookies, we cannot
                provide you certain services on our website.
              </p>
            </Panel>
            <Panel
              header={<PanelHeader title="Functionality cookies" />}
              key="3"
              className={"my__collapse__panel"}
            >
              <p className={styles.content}>
                These cookies are used to provide you with a more personalized
                experience on our website and to remember choices you make when
                you use our website. For example, we may use functionality
                cookies to remember your language preferences or remember your
                login details.
              </p>
            </Panel>
            <Panel
              header={<PanelHeader title="More information" />}
              key="4"
              className={"my__collapse__panel"}
            >
              <p className={styles.content}>
                For any queries in relation to our policy on cookies and your
                choices, please contact us.
              </p>
            </Panel>
          </Collapse>
          <p>
            If you reject all, some features might not function properly. Reject
            All
          </p>
        </div>
        <div className={styles.footer}>
          <button
            className={styles.btn__outline}
            onClick={() => props.onBtnClick?.(0)}
          >
            CONFIRM MY PREFERENCE
          </button>
          <button className={styles.btn} onClick={() => props.onBtnClick?.(1)}>
            ACCEPT ALL
          </button>
        </div>
      </div>
    </Modal>
  );
}
