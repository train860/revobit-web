import Image from "next/image";
import styles from "styles/About.module.scss";
export default function Info() {
  return (
    <div className={styles.info}>
      <h2>关于时谛</h2>
      <div className={styles.content}>
        <div className={styles.text}>
          广东时谛智能科技有限公司成立于2017年10月，是一家集数字创意与智能互联的新型科技公司，通过AI、大数据、图形图像、物理真实渲染以及协同智造网络等核心技术能力改进和提升传统时尚行业的设计、制造、生产和展示方式，为企业提供可规模化落地的全链路数字化解决方案，推动全产业链数字化转型升级。其核心技术研发团队均来自全球500强科技及一线互联网企业、国内外知名高校等，拥有项目专利十几项，软件著作二十几项。自成立以来，已为安踏、李宁、匹克、FILA、海外奢侈品品牌Hugo
          Boss等来自美国、西班牙、法国、意大利等全球20多个国家及地区、超40家著名时尚企业成功实践数字化转型与商业创新。公司已获得红杉资本、线性资本、顺为资本、CMC资本、GGV纪源资本、钟鼎资本等投资机构数亿元投资。
        </div>
        <div className={styles.images}>
          <h3>投资方</h3>
          <Image src={""} width={100} height={200} alt="" />
          <Image src={""} width={100} height={200} alt="" />
          <h3>学术背景</h3>
          <Image src={""} width={100} height={200} alt="" />
        </div>
      </div>
    </div>
  );
}
