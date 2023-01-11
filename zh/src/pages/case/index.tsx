import Layout from "components/Layout";
import TitleBanner from "components/TitleBanner";
import { NextPage } from "next";
import Head from "next/head";
import styles from "styles/Case.module.scss";
import Card from "views/case/Card";
import cn from 'classnames'
const list = [
  {
    title: "时谛智能X安踏荣获中纺联“2022年度十大类纺织创新产品”",
    logo: "2022-12-09",
    image: "/images/case/1.png",
  },
]

const Case: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>时谛智能</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.case}>
        <TitleBanner title="品牌案例" backgroundImage="/images/case/banner.png" />
        <div className={styles.list}>
          <div className={cn("container", styles.wrap)}>
            {
              list.map((item, index) => {
                return <Card key={index} title={item.title} logo={item.logo} image={item.image} />
              })
            }
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Case;
