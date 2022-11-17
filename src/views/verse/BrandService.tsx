import cn from "classnames";
import BackgroundCard from "components/BackgroudCard";
import styles from "styles/Verse.module.scss";
export default function BrandService() {
  return (
    <div className={cn(styles["brand-service"], "container")}>
      <div className={styles.bg}></div>
      <h2 className={styles.title}>为您提供如下品牌服务</h2>
      <div className={styles["brand-service-list"]}>
        <div className="flex-2 flex flex-col gap-5 item">
          <BackgroundCard
            className="flex-2"
            image={"/images/verse/个性化商家主页.png"}
            background={"#3E734D"}
            title={"个性化商家主页"}
            text={["商家模板库", "轻盈版商家材料店铺", "视觉形象吸睛"]}
          />
          <BackgroundCard
            vertical
            className="flex-3"
            image={"/images/verse/SEO品牌官网建设.png"}
            background={"#3565A9"}
            title={"SEO品牌官网建设"}
            text={["商家模板库", "轻盈版商家材料店铺"]}
          />
        </div>
        <div className="flex-3 flex flex-col gap-5 item">
          <BackgroundCard
            size="large"
            className="flex-3"
            image={"/images/verse/线下展厅数字化升级.png"}
            background={"#3932B5"}
            title={"个性化商家主页"}
            text={["商家模板库", "轻盈版商家材料店铺", "视觉形象吸睛"]}
          />
          <BackgroundCard
            className="flex-2"
            image={"/images/verse/3D材料展示API.png"}
            background={"#3E734D"}
            title={"个性化商家主页"}
            text={["商家模板库", "轻盈版商家材料店铺", "视觉形象吸睛"]}
          />
        </div>
        <div className="flex-2 item">
          <BackgroundCard
            vertical
            size="tall"
            className="h-full"
            image={"/images/verse/电子材料册.png"}
            background={"#693ed2"}
            title={"电子材料册"}
            text={[
              "图片/材料/视频/3D，多元化展示材料",
              "节省线下材料册成本为环保出力",
              "支持同时分享给单/多个用户，覆盖面更广，获客更简单",
              "数据统计协助分析材料营销情况（访问人数、访问时长、样品申请率、分享率、收藏率）",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
