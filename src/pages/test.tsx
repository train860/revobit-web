import Link from "next/link";
import { useRouter } from "next/router";
export default function Test() {
  const router = useRouter();
  const { locale, pathname } = router;
  console.log(locale, pathname);
  return (
    <Link href={"/test"} locale="en">
      <a>test</a>
    </Link>
  );
}
