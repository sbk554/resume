import { Link } from 'react-router-dom';
import Media from './Media';

export default function ProjectCard({ project }) {
  const { id, org, featured, title, summary, period, team, thumbnail, tech } = project;

  return (
    <Link to={`/project/${id}`} className={`project-card card${featured ? ' card--soft' : ''}`}>
      <div className="project-card__thumb">
        <Media src={thumbnail} alt={`${title} 대표 화면`} placeholder="TODO: 대표 화면 · 아키텍처 이미지 16:10" />
        <span className="badge badge--overlay project-card__type">{org}</span>
      </div>

      <div className="project-card__body">
        <div className="project-card__meta body-small">
          {featured && <span className="badge badge--accent">대표</span>}
          <span>
            {period} · {team}
          </span>
        </div>
        <h3 className="heading-small">{title}</h3>
        <p className="body-medium project-card__summary">{summary}</p>
      </div>

      <div className="project-card__foot">
        <ul className="chip-list" aria-label="사용 기술">
          {tech.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>
        <span className="btn btn--soft btn--small" aria-hidden="true">
          자세히 보기 →
        </span>
      </div>
    </Link>
  );
}
