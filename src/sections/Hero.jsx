import { heroTech, profile, stats } from '../data/profile';
import { IconTile } from '../components/Media';
import useSectionNav from '../hooks/useSectionNav';

export default function Hero() {
  const goTo = useSectionNav();

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__text">
          <span className="badge badge--outline hero__badge">{profile.role}</span>
          <h1 id="hero-title" className="display-large">
            {profile.headline}
          </h1>
          <p className="body-large hero__desc">{profile.intro}</p>
          <div className="hero__actions">
            <a
              className="btn btn--primary btn--large"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                goTo('projects');
              }}
            >
              프로젝트 보기
            </a>
            {/* <a className="btn btn--outline btn--large" href="#print" onClick={(e) => {e.preventDefault(); window.print();}} rel="noreferrer">
              이력서 PDF
            </a> */}
          </div>
        </div>

        {/* 기술 로고 스쿼클 클라우드 — 화면의 유일한 컬러 영역 */}
        <ul className="hero__cloud" aria-label="주요 기술">
          {heroTech.map((tech) => (
            <li key={tech.name}>
              <IconTile icon={tech.icon} short={tech.name} size={tech.size} alt={tech.name} />
            </li>
          ))}
        </ul>
      </div>

      <div className="container">
        <ul className="hero__stats">
          {stats.map((s) => (
            <li key={s.label}>
              <p className="heading-xlarge">{s.value}</p>
              <p className="body-small stat__label">{s.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
