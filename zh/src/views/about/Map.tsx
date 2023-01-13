import cn from "classnames";
import * as echarts from "echarts";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import styles from "styles/About.module.scss";

const contactData: Record<string, Record<string, string>> = {
  广州: {
    email: "4DZP@4DSTC.COM",
    phone: "189-8896-5774（微信同号）",
    address: "广东省广州市海珠区新港东路70号万胜汇创客PARK15号楼",
  },
  东莞: {
    email: "4DZP@4DSTC.COM",
    phone: "189-8896-5774（微信同号）",
    address: "东莞市厚街镇富康路1号巨富大厦",
  },
  温州: {
    email: "4DZP@4DSTC.COM",
    phone: "189-8896-5774（微信同号）",
    address: "浙江省温州市鹿城区丰门街道丁桥路经济总部基地B07栋",
  },
  上海: {
    email: "4DZP@4DSTC.COM",
    phone: "189-8896-5774（微信同号）",
    address: "上海市浦东新区浦电路438号双鸽大厦309室",
  },
};
export default function Map() {
  const [data, setData] = useState<Record<string, string>>({});
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    fetch("/data/china.json")
      .then((res) => res.json())
      .then((data) => {
        initMap(data);
      });
  }, []);
  const initMap = useCallback((json: string) => {
    echarts.registerMap("china", json);
    const options = {
      series: [
        {
          name: "china",
          type: "map",
          map: "china",
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          select: {
            label: {
              show: false,
            },
            itemStyle: {
              areaColor: "#2d2d59",
              borderWidth: 3, //设置外层边框
              borderColor: "#9ffcff",
              shadowColor: "rgba(0,54,255, 1)",
              shadowBlur: 150,
            },
          },
          itemStyle: {
            borderWidth: 3,
            normal: {
              areaColor: "#e5e5e5",
              borderColor: "rgba(0,0,0,0.3)",
            },
            emphasis: {
              areaColor: "#2d2d59",
            },
          },
          data: [
            //跟markPoint中的data顺序要一致
            { name: "广东省" },
            { name: "广东省" },
            { name: "浙江省" },
            { name: "上海市" },
          ],
          markPoint: {
            symbolSize: 60,
            itemStyle: {
              normal: {
                borderColor: "#7e3989",
                color: "#7e3989",
                borderWidth: 1, // 标注边线线宽，单位px，默认为1
                label: {
                  show: true,
                },
              },
              emphasis: {},
            },
            data: [
              {
                coord: [113.1553, 23.0632],
                value: "广州",
                label: {
                  fontSize: 10,
                  color: "#fff",
                },
              },
              {
                coord: [113.31, 22.39],
                value: "东莞",
                label: {
                  fontSize: 10,
                  color: "#fff",
                },
              },

              {
                coord: [119.37, 27.03],
                value: "温州",
                label: {
                  fontSize: 10,
                  color: "#fff",
                },
              },
              {
                coord: [121.472644, 31.231706],
                value: "上海",
                label: {
                  fontSize: 10,
                  color: "#fff",
                },
              },

            ],
          },
        },
      ],
    };
    const el = document.getElementById("my-map");
    const myChart = echarts.init(el!);
    myChart.setOption(options);
    myChart.on("click", function (params) {
      if (params.componentType != "markPoint") {
        setVisible(false);
        return;
      }

      const d = params.data.valueOf() as { value: string };
      setData(contactData[d.value]);
      !visible && setVisible(true);
    });
  }, []);
  return (
    <div className={styles.map}>
      <div className={styles["map-cover"]}></div>
      <div className={cn("container", styles.content)}>
        <h2>人才招募</h2>
        <div id="my-map" className={styles["map-container"]}></div>
        <div className={cn(styles.popup, { [styles.visible]: visible })}>
          <div className={styles.item}>
            <div className={styles.icon}>
              <div className={styles.bg}></div>
              <Image src="/images/about/email.png" fill alt="" />
            </div>
            <div className={styles.text}>
              <h3>招聘邮箱</h3>
              <p>{data["email"]}</p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <div className={styles.bg}></div>
              <Image src="/images/about/phone.png" fill alt="" />
            </div>
            <div className={styles.text}>
              <h3>联系方式</h3>
              <p>{data["phone"]}</p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <div className={styles.bg}></div>
              <Image src="/images/about/address.png" fill alt="" />
            </div>
            <div className={styles.text}>
              <h3>通讯地址</h3>
              <p>{data["address"]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
