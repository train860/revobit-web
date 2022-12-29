import "swiper/css";
import "swiper/css/pagination";

import cn from "classnames";
import Image from "next/image";
import styles from "styles/Studio.module.scss";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export type SlideItem = {
  title: string;
  subTitle?: string;
  image: string;
};

interface Props {
  items: SlideItem[];
}
export default function Slider(props: Props) {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <Swiper
      className={styles.slider}
      pagination={pagination}
      modules={[Pagination]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {props.items.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className={styles["slide-item"]}>
              <div className={styles["slide-item__title"]}>{item.title}</div>
              {item.subTitle && (
                <div
                  className={styles["slide-item__sub-title"]}
                  dangerouslySetInnerHTML={{ __html: item.subTitle }}
                ></div>
              )}
              <div
                className={cn(styles["slide-item__image"], {
                  [styles["small"]]: item.subTitle,
                })}
              >
                <Image src={item.image} alt="" fill className={styles.image} />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
