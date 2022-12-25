import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import { useState } from "react";
import styles from "styles/Studio.module.scss";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export type TextItem = {
  title: string;
  subTitle: string;
  description: string;
};

interface Props {
  items: TextItem[];
}

export default function TextBanner(props: Props) {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '"> </span>';
    },
  };
  const navigation = {
    nextEl: ".swiper__button__next",
    prevEl: ".swiper__button__prev",
  };
  return (
    <div className={styles.text__banner}>
      <div className={styles.text__banner__bg}>
        <div className={styles.bg__wrap}>
          <Image src="/images/studio/text-bg-1.png" alt="" fill />
        </div>
      </div>
      <div className={styles.text__banner__content}>
        <Swiper
          className={styles.text__slider}
          pagination={pagination}
          navigation={true}
          loop={true}
          modules={[Pagination, Navigation]}
        >
          {props.items.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className={styles["slide__item"]}>
                  <h2>{item.title}</h2>
                  <h3>{item.subTitle}</h3>
                  <p>{item.description}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
