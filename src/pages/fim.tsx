import e2e from "assets/images/e2e.png";
import Button from "components/Button";
import ContactForm from "components/ContactForm";
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
import StickyBox from "react-sticky-box";
import Sticky from "react-stickynode";
import styles from "styles/Fim.module.scss";

import Category from "./sections/fim/Category";
gsap.registerPlugin(ScrollTrigger);
//use sticky
const Fim: NextPage = () => {
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
      </main>
    </Layout>
  );
};
export default Fim;
