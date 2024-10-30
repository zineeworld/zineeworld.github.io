import Link from "next/link";
import {Cursor} from './components/common/Cursor/Cursor';

export default function Home() {
  return (
    <>
      <section className="ui-home intro">
        <div className="left">
          <div className="txt-area">
            <span className="category">The Bridge Between Design and Development</span>
            <h1 className="title">Markup Developer</h1>
            <p className="desc">Hyejin Oh</p>
            <p className="etc"><a href="mailto:zineeworld@gmail.com">zineeworld@gmail.com</a></p>
          </div>
        </div>

        <div className="right">
          <Link href="/resume" className="introduce">
            <p className="common-list">
              안녕하세요, 저는 시니어 마크업 개발자 오혜진입니다.
              웹의 기반이 되는 마크업 작업에 열정을 가지고 있으며, 효율적인 HTML/CSS 구조를 구현하기 위해 노력하고 있습니다.
              최근에는 프론트엔드 프레임워크에서 컴포넌트 단위의 마크업을 통해 프론트엔드 개발자와의 협업을 강화하는 데 집중하고 있습니다.
              최상의 결과를 위해 개발자 및 디자이너와의 원활한 소통을 최우선으로 생각하며,
              제가 쌓아온 인사이트를 커뮤니티에 공유하기 위해 블로그를 운영하고 있습니다.
            </p>
          </Link>
        </div>
      </section>

      <section className="ui-home exprience">
        <div className="left">
          <div className="txt-area">
            <h1 className="title">Exprience</h1>
            <p className="desc">경력사항</p>
          </div>

          <div className="careers-area">
            <ul className="careers-list">
              <li className="-active">
                <h2 className="company">Finnq</h2>
                <p className="period">23' 08 ~ Present <span>서비스개발1팀</span></p>
              </li>
              <li>
                <h2 className="company">Kakao Enterprise</h2>
                <p className="period">20' 02 ~ 23' 08 <span>디자인모듈파트 파트장</span></p>
              </li>
              <li>
                <h2 className="company">Coinone</h2>
                <p className="period">18' 02 ~ 20' 02 <span>유저플로우 셀장</span></p>
              </li>
              <li>
                <h2 className="company">MyMusicTaste</h2>
                <p className="period">15' 06 ~ 18' 01 <span>UI/UX 팀</span></p>
              </li>
              <li>
                <h2 className="company">JC Planet</h2>
                <p className="period">14' 02 ~ 15' 06 <span>개발팀</span></p>
              </li>
            </ul>
          </div>
        </div>

        <div className="right">
          <div className="scroll-inner">
            <div className="scroll-item finnq">
              finnq
            </div>

            <div className="scroll-item">
              finnq2
            </div>

            <div className="scroll-item ">
              finnq3
            </div>

            <div className="scroll-item ">
              finnq4
            </div>

            <div className="scroll-item ">
              finnq5
            </div>
          </div>
        </div>
      </section>

      <section className="ui-home activities">
        <div className="left">
          <div className="txt-area">
            <h1 className="title">External Activities</h1>
            <p className="desc">외부활동</p>
          </div>
        </div>
        <div className="right">
          <ul className="mt-auto common-list">
            <li><span>2023.05</span>제로베이스 프론트엔드스쿨 - 1일 특강 "스타트업에서 대기업까지"</li>
            <li><span>2021.09</span>제로베이스 프론트엔드스쿨 - HTML/CSS 파트 온라인 강의</li>
            <li><span>2021.03</span>패스트캠퍼스 - 마크업파트 온라인 강의</li>
            <li><span>2020.06</span>이화여자대학교 컴퓨터공학부 여성리더십 특강 (후기)</li>
            <li><span>2019.10</span>W3C Conference 2019 (후기)</li>
            <li><span>2019.04</span>Women TechMakers 2019 (후기)</li>
            <li><span>2019.03</span>프로그라피 4기 프론트엔드 멘토 (후기)</li>
            <li><span>2018.04</span>스타트업 얼라이언스 "좋아서 일하는 사람들" (후기) (기사)</li>
          </ul>
        </div>
      </section>

      <section className="ui-home education">
        <div className="left">
          <div className="txt-area">
            <h1 className="title">Education &amp; Certifications</h1>
            <p className="desc">학력 및 자격증</p>
          </div>
        </div>
        <div className="right">
          <ul className="mt-auto common-list">
            <li><span>2013.12</span>직업능력개발훈련교사(멀티미디어3급) / 노동부</li>
            <li><span>2013.10</span>웹표준/웹접근성 역량강화 프로그램 전문가 과정 수료</li>
            <li><span>2013.08</span>정보처리기사 / 한국산업인력공단</li>
            <li><span>2013.08</span>한국기술교육대학교 컴퓨터공학과 학사</li>
          </ul>
        </div>
      </section>

      <section className="ui-home skills">
        <div className="left">
          <div className="txt-area">
            <h1 className="title">Skills &amp; Tools</h1>
            <p className="desc">사용가능한 기술과 툴</p>
          </div>
        </div>
        <div className="right">
          <ul className="mt-auto common-list">
            <li><span className="label">개발</span>HTML5, CSS3(Scss), Javascript, Typescript, React, Vue, Svelte</li>
            <li><span className="label">버전관리</span>GitHub, Gitlab, SourceTree</li>
            <li><span className="label">IDE</span>IntelliJ, VSCode</li>
            <li><span className="label">디자인</span>Figma</li>
            <li><span className="label">협업</span>JIRA, Confluence, Notion, Google Workspace</li>
          </ul>
        </div>
      </section>

      <section className="ui-home contact">
        <div className="left">
          <div className="txt-area">
            <h1 className="title">Contact</h1>
            <p className="desc">언제든지 연락주세요</p>
          </div>
        </div>
        <div className="right">
          <div className="mt-auto">
            <p className="desc">zineeworld@gmail.com</p>
            <p className="desc">010-2933-9405</p>
          </div>
        </div>
      </section>

      <footer className="ui-footer">
        &copy; zineeworld 2014-2025
      </footer>
    </>
  );
}
