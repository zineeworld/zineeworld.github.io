import { LayoutBase } from "@components/common/Layout/LayoutBase";
import Link from "next/link";

export default function Home() {
  return (
    <div className="ui-home">
      <div className="box">
        <a href="/" className="logo">Zineeworld</a>
        <Link href="/resume" className="resume">
          <span className="category">ABOUT</span>
          <span className="title">타이틀 문장</span>
          <span className="desc">11년차 마크업 개발자</span>
          <span className="date">2024. 09.</span>
        </Link>
      </div>

      <ul className="pf-list">
        <li><Link href="/portfolio/jcplanet">j</Link></li>
        <li><Link href="/portfolio/mymusictaste">m</Link></li>
        <li><Link href="/portfolio/coinone">c</Link></li>
        <li><Link href="/portfolio/kakaoenterprise">k</Link></li>
        <li><Link href="/portfolio/finnq">f</Link></li>
        <li><Link href="/portfolio/next">next?</Link></li>
      </ul>
    </div>
  );
}
