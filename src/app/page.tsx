import Link from "next/link";
import { Cursor } from './components/common/Cursor/Cursor';

export default function Home() {
  return (
    <>
      <section className="ui-home">
        <div className="left intro">
          <a href="/" className="logo">Zineeworld</a>
          <Link href="/resume" className="resume">
            <span className="category">The Bridge Between Design and Development</span>
            <span className="title">Senior Markup Developer</span>
            <span className="desc">Hyejin Oh</span>
            <span className="date">zineeworld@gmail.com</span>
          </Link>
        </div>

        <div className="right intro">
          2
        </div>
        {/*<ul className="pf-list">*/}
        {/*  <li><Link href="/portfolio/jcplanet">j</Link></li>*/}
        {/*  <li><Link href="/portfolio/mymusictaste">m</Link></li>*/}
        {/*  <li><Link href="/portfolio/coinone">c</Link></li>*/}
        {/*  <li><Link href="/portfolio/kakaoenterprise">k</Link></li>*/}
        {/*  <li><Link href="/portfolio/finnq">f</Link></li>*/}
        {/*  <li><Link href="/portfolio/next">next?</Link></li>*/}
        {/*</ul>*/}
      </section>

      <section className="ui-home">
        <div className="left">1</div>
        <div className="right">2</div>
      </section>

      <section className="ui-home">
        <div className="left">1</div>
        <div className="right">2</div>
      </section>

      <section className="ui-home">
        <div className="left">1</div>
        <div className="right">2</div>
      </section>

      <footer className="ui-footer">
        &copy; zineeworld 2014-2025
      </footer>
    </>
  );
}
