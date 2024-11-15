import Link from "next/link";

export default function Home() {
  return (
    <div className="ui-content-home">
      <section className="ui-home intro">
        <div className="left">
          <div className="txt-area">
            <span className="category">The Bridge Between Design and Development</span>
            <h1 className="title">Markup Developer</h1>
            <p className="desc">Hyejin Oh</p>
            <p className="etc"><a href="mailto:zineeworld@gmail.com">zineeworld@gmail.com</a></p>
          </div>
          
          <Link href="/resume" className="txt-intro">
            안녕하세요, 저는 11년차 마크업 개발자 오혜진입니다.
            웹의 기반이 되는 마크업 작업에 열정을 가지고 있으며 효율적인 HTML/CSS를 구현합니다.
            최근 3년간은 핀크, 카카오엔터프라이즈에서 디자인시스템 개발을 도맡아 진행했습니다.
            Vue, React 등 프론트엔드 프레임워크에서 컴포넌트 단위의 마크업을 통해 프론트엔드 개발자와의 협업을 강화하는 데 집중합니다.
            개발자 및 디자이너와의 원활한 소통을 최우선으로 생각하며, 글로 정리하여 기록하는 것을 좋아합니다.
          </Link>
        </div>

        <div className="right">
          <ul className="toc">
            <li>
              <a href="/#experience">
                <span lang="en">experience</span>
                <span lang="ko">경력사항</span>
              </a>
            </li>
            <li>
              <a href="/#activities">
                <span lang="en">Activities</span>
                <span lang="ko">외부활동</span>
              </a>
            </li>
            <li>
              <a href="/#etc">
                <span lang="en">Education & Certifications</span>
                <span lang="ko">학력 및 자격증</span>
              </a>
            </li>
            <li>
              <a href="/#etc">
                <span lang="en">Skills and Tools</span>
                <span lang="ko">사용가능한 기술과 툴</span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="ui-home experience" id="experience">
        <div className="left">
          <div className="txt-area">
            <h1 className="title">experience</h1>
            <p className="desc">경력사항</p>
          </div>
        </div>

        <div className="right">
          <div className="careers-area">
            <ul className="careers-list">
              <li className="is-active">
                <Link href="/experience/finnq">
                  <h2 className="company">핀크</h2>
                  <p className="company-desc">하나금융그룹이 만든 핀테크 전문 기업</p>
                  <p className="period">2023.08 ~ Present <span>서비스개발1팀</span></p>
                  <div className="detail">

                  </div>
                </Link>
              </li>
              <li>
                <Link href="/experience/kakaoenterprise">
                  <h2 className="company">카카오엔터프라이즈</h2>
                  <p className="company-desc">AI 기반 플랫폼/솔루션 개발 전문 기업</p>
                  <p className="period">2020.02 ~ 2023.08 <span>디자인모듈파트 파트장</span></p>
                </Link>
              </li>
              <li>
                <Link href="/experience/coinone">
                  <h2 className="company">코인원</h2>
                  <p className="company-desc">암호화폐 거래소</p>
                  <p className="period">2018.02 ~ 2020.02 <span>유저플로우 셀장</span></p>
                </Link>
              </li>
              <li>
                <Link href="/experience/mymusictaste">
                  <h2 className="company">마이뮤직테이스트</h2>
                  <p className="company-desc">데이터 기반 수요 예측 공연 기획/제작</p>
                  <p className="period">2015.06 ~ 2018.01 <span>UI/UX 팀</span></p>
                </Link>
              </li>
              <li>
                <Link href="/experience/jcplanet">
                  <h2 className="company">JC 플래닛</h2>
                  <p className="company-desc">해외 게임 퍼블리싱</p>
                  <p className="period">2014.02 ~ 2015.06 <span>개발팀</span></p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="ui-home activities" id="activities">
        <div className="left">
          <div className="txt-area">
            <h1 className="title">Activities</h1>
            <p className="desc">외부활동</p>
          </div>
        </div>

        <div className="right">
          <ul className="common-list">
            <li>
              <span className="num">2023.05</span>
              <span>제로베이스 FE스쿨 - 1일 특강 &lt;스타트업에서 대기업까지&gt;</span>
            </li>
            <li>
              <span className="num">2021.09</span>
              <a href="/activities/202109"><span>제로베이스 FE스쿨 - HTML/CSS 파트 온라인 강의</span></a>
            </li>
            <li>
              <span className="num">2021.03</span>
              <span>패스트캠퍼스 - 마크업파트 온라인 강의</span>
            </li>
            <li>
              <span className="num">2020.06</span>
              <a href="/activities/202006"><span>이화여자대학교 컴퓨터공학부 여성리더십 특강 (후기)</span></a>
            </li>
            <li>
              <span className="num">2019.10</span>
              <a href="/activities/201910"><span>W3C Conference 2019 (후기)</span></a>
            </li>
            <li>
              <span className="num">2019.04</span>
              <a href="/activities/201904"><span>Women TechMakers 2019 (후기)</span></a>
            </li>
            <li>
              <span className="num">2019.03</span>
              <a href="/activities/201903"><span>프로그라피 4기 프론트엔드 멘토 (후기)</span></a>
            </li>
            <li>
              <span className="num">2018.04</span>
              <span>
                <a href="/activities/201804">스타트업 얼라이언스 &lt;좋아서 일하는 사람들&gt; (후기)</a>&nbsp;
                <a href="https://brunch.co.kr/@startupalliance/11" target="_blank">(기사)</a>
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="ui-home etc" id="etc">
        <div className="left">
          <div className="txt-area">
            <h1 className="title tight">Ability</h1>
            <p className="desc">학력 및 자격증<br/>사용 가능한 기술과 툴</p>
          </div>
        </div>

        <div className="right">
          <h2 className="sub-title">Education &amp; Certifications</h2>
          <ul className="common-list">
            <li><span className="num">2013.12</span>직업능력개발훈련교사(멀티미디어3급) / 노동부</li>
            <li><span className="num">2013.10</span>웹표준/웹접근성 역량강화 프로그램 전문가 과정 수료</li>
            <li><span className="num">2013.08</span>정보처리기사 / 한국산업인력공단</li>
            <li><span className="num">2013.08</span>한국기술교육대학교 컴퓨터공학과 학사</li>
          </ul>

          <h2 className="sub-title">Skills &amp; Tools</h2>
          <div className="skill-set">
            <img src="/images/skills/ico_html.png" alt=""/>
            <img src="/images/skills/ico_css.png" alt=""/>
            <img src="/images/skills/ico_sass.png" alt=""/>
            <img src="/images/skills/ico_js.png" alt=""/>
            <img src="/images/skills/ico_ts.png" alt=""/>
            <img src="/images/skills/ico_react.png" alt=""/>
            <img src="/images/skills/ico_next.png" alt=""/>
            <img src="/images/skills/ico_vue.png" alt=""/>
            <img src="/images/skills/ico_storybook.png" alt=""/>
            <img src="/images/skills/ico_vite.png" alt=""/>
          </div>

          <ul className="common-list skills mt20">
            <li>
              <span className="label">개발</span>
              <ul className="dev">
                <li>HTML</li>
                <li>CSS</li>
                <li>Sass</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Vue</li>
                <li>Storybook</li>
              </ul>
            </li>
            <li>
              <span className="label">버전관리</span>
              <ul>
                <li>GitHub</li>
                <li>Gitlab</li>
                <li>SourceTree</li>
              </ul>
            </li>
            <li>
              <span className="label">IDE</span>
              <ul>
                <li>IntelliJ</li>
                <li>VSCode</li>
              </ul>
            </li>
            <li>
              <span className="label">디자인</span>
              <ul>
                <li>Figma</li>
              </ul>
            </li>
            <li>
              <span className="label">협업</span>
              <ul>
                <li>JIRA</li>
                <li>Confluence</li>
                <li>Notion</li>
                <li>Google Workspace</li>
                <li>Slack</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <section className="ui-home contact" style={{display: 'none'}}>
        <div className="left">
          <div className="txt-area">
            <h1 className="title tight">Contact</h1>
            <p className="desc">연락주세요</p>
          </div>
        </div>
        <div className="right">
          zineeworld@gmail.com
        </div>
      </section>
      
      <footer className="ui-footer">
        &copy; zineeworld 2014-2025<br/>
        이 사이트는 Next.js + Markdown + Vercel 로 제작되었습니다.<br/>
      </footer>
    </div>
  );
}
