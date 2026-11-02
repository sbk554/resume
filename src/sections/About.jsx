import { about, profile } from '../data/profile';
import SectionHead from '../components/SectionHead';
import Media from '../components/Media';
import Reveal from '../components/Reveal';

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHead eyebrow="About" title={<span id="about-title">소개.</span>} />

        <Reveal className="about__grid">
          <div className="about__photo">
            <Media src={about.photo} alt={`${profile.name} 프로필 사진`} placeholder="TODO: 프로필 사진 (흑백)" />
          </div>

          <div className="about__body">
            <p className="heading-small">“{about.slogan}”</p>
            {about.paragraphs.map((text, i) => (
              <p key={i} className={`body-medium${i > 0 ? ' text-muted' : ''}`}>
                {text}
              </p>
            ))}

            <ul className="about__strengths">
              {about.strengths.map((s, i) => (
                <li key={s.title} className="card card--soft card--sm strength">
                  <span className="icon-tile icon-tile--small">{String(i + 1).padStart(2, '0')}</span>
                  <div className="strength__text">
                    <p className="title-medium">{s.title}</p>
                    <p className="body-small text-muted">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
