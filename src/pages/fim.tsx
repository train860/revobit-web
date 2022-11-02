import e2e from "assets/images/e2e.png";
import Button from "components/Button";
import ContactForm from "components/ContactForm";
import TrendsIcon from "components/Icons/TrendsIcon";
import Layout from "components/Layout";
import SectionCard from "components/SectionCard";
import Slider from "components/Slider";
import Step from "components/Step";
import Tabbar from "components/Tabbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "hooks/useIsomorphicLayoutEffect";
import type { NextPage } from "next";
import Image from "next/future/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import Sticky from "react-stickynode";
import styles from "styles/Fim.module.scss";

import Category from "./sections/fim/Category";
import TabSection, { TabData } from "./sections/fim/TabSection";
gsap.registerPlugin(ScrollTrigger);
const tabDataList: TabData[] = [
  {
    title: "Trends",
    des: [
      "以全网电商大数据为基础，帮助企划人员分析流行趋势与快速创款的AI智能平台",
    ],
  },
  {
    title: "Studio",
    des: ["高逼真虚拟样品减少实物开发", "加快产品设计效率", "缩短产品上市周期"],
  },
  {
    title: "Manager",
    des: [
      "一站式产品在线协同管理平台，通过整合产品企划、款式设计、开发全链路信息，实现跨部门云端协同、共享项目进度，为企业中的不同角色提供实时进度管理与决策方案，标准化产品研发流程。",
    ],
  },
  {
    title: "Library",
    des: [
      "专为时尚企业提供的数字化资产管理工具，通过标准化数据帮助客户实现数字化资产的高效调用和规范管理，提高设计和开发效率。",
    ],
  },
];
//use sticky
const Fim: NextPage = () => {
  const [tabActiveIndex, setTabActiveIndex] = useState<number>(0);
  return (
    <Layout>
      <Head>
        <title>Create Next App Heelo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {" "}
        <Category />
        <div className="bg-rev-bg-black py-6">
          <div className="container">
            <h2 className="section-title">FIM助力企业实现降本增效</h2>
            <h3 className="section-subtitle w-4/5 mx-auto">
              FIM在整合企划-设计-开发-生产-销售全链路协同的基础上，在最为繁琐的开发环节引入3D虚拟样品替代传统实物样品，减少实物打样频次，低成本且高效地解决了传统时尚产业研发设计链条复杂、开发周期漫长、沟通成本高企等问题，大幅提升整体研发效率。
            </h3>
            <Slider
              list={[
                {
                  icon: "",
                  title: "111",
                  desc: "111",
                  images: [],
                },
                {
                  icon: "",
                  title: "111",
                  desc: "111",
                  images: [],
                },
              ]}
            />
          </div>
        </div>
        <div className="bg-rev-bg-contact py-6">
          <div className="container">
            <h2 className="section-title">FIM全链路数字化解决方案</h2>
            <Tabbar
              activeIndex={tabActiveIndex}
              items={[
                { icon: "trends.png", text: "Trends" },
                { icon: "", text: "Studio" },
                { icon: "", text: "Manager" },
                { icon: "", text: "Library" },
              ]}
              onItemChange={(index) => {
                setTabActiveIndex(index);
              }}
            />
            <TabSection data={tabDataList[tabActiveIndex]} />
          </div>
        </div>
      </main>
    </Layout>
  );
};
export default Fim;
