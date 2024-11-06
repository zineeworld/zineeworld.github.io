import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/resume">r</Link></li>
          <li><Link href="/portfolio/jcplanet">j</Link></li>
          <li><Link href="/portfolio/mymusictaste">m</Link></li>
          <li><Link href="/portfolio/coinone">c</Link></li>
          <li><Link href="/portfolio/kakaoenterprise">k</Link></li>
          <li><Link href="/portfolio/finnq">f</Link></li>
        </ul>
      </nav>
    </header>
  );
}
