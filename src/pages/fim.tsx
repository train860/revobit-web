import e2e from "assets/images/e2e.png";
import Button from "components/Button";
import ContactForm from "components/ContactForm";
import Layout from "components/Layout";
import SectionCard from "components/SectionCard";
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
gsap.registerPlugin(ScrollTrigger);
//use sticky
const Fim: NextPage = () => {
  useIsomorphicLayoutEffect(() => {}, []);
  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        scrub: 1.23,
        onUpdate: (self) => {
          console.log("progress", self.progress);
        },
        end: () => "+=" + document.querySelector(".container").offsetWidth,
      },
    });
  }, []);
  return (
    <div>
      <div className="container">
        <section className="panel">
          <h1>SCROLL DOWN000</h1>
        </section>
        <section className="panel">
          <h2>ONE--000</h2>
        </section>
        <section className="panel">
          <h2>TWO</h2>
        </section>
        <section className="panel">
          <h2>THREE</h2>
        </section>
        <div style={{ height: 8000 }}>99999</div>
      </div>
      <Sticky enabled={true} top={50} bottomBoundary={"#content"}>
        <div>1111</div>
      </Sticky>
      <div id="content" style={{ height: 1800 }}>
        7777
      </div>
      <div style={{ height: 4000 }}>6666</div>
    </div>
  );
};
export default Fim;
