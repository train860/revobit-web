import "swiper/css";
import "swiper/css/navigation";

import cn from "classnames";
import Image from "next/image";
import { useRef, useState } from "react";
import styles from "styles/About.module.scss";
import { Navigation, Pagination, Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from "swiper/react";
import { NavigationOptions } from "swiper/types";

import Card from "./Card";
export type SlideItem = {
    title: string;
    time: string;
    link?: string;
    image: string;
};

interface Props {
    items: SlideItem[];
}
export default function News(props: Props) {
    const [swiper, setSwiper] = useState<SwiperClass>();
    return (
        <div className={styles.news}>
            <div className="container">
                <h1>资讯动态</h1>

                <Swiper
                    className={styles.list}
                    slidesPerView={4}
                    spaceBetween={20}
                    slidesPerGroup={4}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    onSwiper={setSwiper}
                >
                    {props.items.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Card key={String(index)} {...item} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                <div className={styles.control}>
                    <div className={styles.prev} onClick={() => swiper?.slidePrev()}>
                        <Image src={"/icons/btn-prev.png"} alt="" fill />
                    </div>
                    <div className={styles.next} onClick={() => swiper?.slideNext()}>
                        <Image src={"/icons/btn-next.png"} alt="" fill />
                    </div>
                </div>

            </div>
        </div>

    );
}
