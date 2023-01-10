import styles from "styles/About.module.scss";
export default function Map() {
  return (
    <div className={styles.map}>
      <div id="my-map"></div>
      <div className={styles.popup}>
        <div className={styles.item}>
          <div className={styles.icon}></div>
          <div className={styles.text}>
            <h3>招聘邮箱</h3>
            <p>111</p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}></div>
          <div className={styles.text}>
            <h3>联系方式</h3>
            <p>111</p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}></div>
          <div className={styles.text}>
            <h3>通讯地址</h3>
            <p>111</p>
          </div>
        </div>
      </div>
    </div>
  );
}
