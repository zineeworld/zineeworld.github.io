import { LayoutBase } from "@components/common/Layout/LayoutBase";
import Link from "next/link";

export default function Home() {
  return (
    <div className="ui-home">
      <div className="box">
        <Link href="/resume">res</Link>
      </div>

      <ul className="pf-list">
        <li><Link href="/portfolio/jcplanet">j</Link></li>
        <li><Link href="/portfolio/mymusictaste">m</Link></li>
        <li><Link href="/portfolio/coinone">c</Link></li>
        <li><Link href="/portfolio/kakaoenterprise">k</Link></li>
        <li><Link href="/portfolio/finnq">f</Link></li>
        <li><Link href="/portfolio/next">n?</Link></li>
      </ul>
    </div>
  );
}
