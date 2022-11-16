import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import HomeEN from "./home/en";
import HomeZH from "./home/zh";

const Homepage = () => {
  const router = useRouter();
  const { locale } = router;

  return locale === "zh" ? <HomeZH /> : <HomeEN />;
};
export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "zh", ["common"])),
  },
});

export default Homepage;
