import { educations } from '../data/career';
import { formatPeriod } from '../utils/date';
import SectionHead from '../components/SectionHead';
import Reveal from '../components/Reveal';

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <SectionHead eyebrow="Education" title={<span id="education-title">교육.</span>} />

        <ol className="timeline">
          {educations.map((edu) => (
            <Reveal as="li" key={edu.title} className="timeline__item">
              <p className="body-small timeline__period">{formatPeriod(edu.start, edu.end)}</p>
              <div className="timeline__body">
                <h3 className="heading-small">{edu.title}</h3>
                <p className="body-medium text-muted">{edu.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
