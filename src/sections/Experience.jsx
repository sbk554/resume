import { experiences } from '../data/career';
import { formatMonths, formatPeriod, monthsBetween } from '../utils/date';
import SectionHead from '../components/SectionHead';
import Reveal from '../components/Reveal';

export default function Experience() {
  const total = experiences.reduce((sum, ex) => sum + monthsBetween(ex.start, ex.end), 0);

  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHead
          eyebrow="Experience"
          title={<span id="experience-title">경력.</span>}
          sub={total ? `총 ${formatMonths(total)}` : null}
        />

        <ol className="timeline">
          {experiences.map((ex) => (
            <Reveal as="li" key={ex.company + ex.start} className="timeline__item">
              <div className="timeline__date">
                <p className="body-small timeline__period">{formatPeriod(ex.start, ex.end)}</p>
                <p className="caption timeline__duration">{formatMonths(monthsBetween(ex.start, ex.end))}</p>
              </div>

              <div className="timeline__body">
                <div className="timeline__head">
                  <h3 className="heading-small">{ex.company}</h3>
                  {!ex.end && <span className="badge badge--accent">재직중</span>}
                </div>
                <p className="body-medium timeline__role">
                  {ex.team} · {ex.role}
                </p>
                <ul className="body-medium timeline__list">
                  {ex.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
                {ex.tech?.length > 0 && (
                  <ul className="chip-list" aria-label="사용 기술">
                    {ex.tech.map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
