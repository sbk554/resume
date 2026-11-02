import { useState } from 'react';
import { projectFilters, projects, tasks } from '../data/projects';
import SectionHead from '../components/SectionHead';
import Segmented from '../components/Segmented';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';

const PROJECT_PAGE = 6; // 주요 업무 처음 노출 개수
const TASK_PAGE = 6; // 기타 업무 처음 노출 개수

// 대표 프로젝트를 항상 맨 앞으로
const sorted = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));

function MoreButton({ rest, onClick }) {
  if (rest <= 0) return null;
  return (
    <div className="projects__more">
      <button type="button" className="btn btn--outline" onClick={onClick}>
        더보기 ({rest})
      </button>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [projectLimit, setProjectLimit] = useState(PROJECT_PAGE);
  const [taskLimit, setTaskLimit] = useState(TASK_PAGE);

  const showMajor = filter !== 'minor';
  const showMinor = filter !== 'major';

  const handleFilter = (id) => {
    setFilter(id);
    setProjectLimit(PROJECT_PAGE);
    setTaskLimit(TASK_PAGE);
  };

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHead
          eyebrow="Projects"
          title={<span id="projects-title">포트폴리오.</span>}
          aside={<Segmented items={projectFilters} value={filter} onChange={handleFilter} label="업무 분류" />}
        />

        {/* 주요 업무 — 카드 */}
        {showMajor && (
          <div className="projects__group">
            {filter === 'all' && (
              <h3 className="title-medium projects__group-title">
                주요 업무 <span className="text-muted">{sorted.length}</span>
              </h3>
            )}
            <ul className="projects__grid">
              {sorted.slice(0, projectLimit).map((project, i) => (
                <Reveal as="li" key={project.id} className="projects__item" style={{ transitionDelay: `${(i % 2) * 80}ms` }}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </ul>
            <MoreButton rest={sorted.length - projectLimit} onClick={() => setProjectLimit((n) => n + PROJECT_PAGE)} />
          </div>
        )}

        {/* 기타 업무 — 리스트 */}
        {showMinor && tasks.length > 0 && (
          <div className="projects__group">
            {filter === 'all' && (
              <h3 className="title-medium projects__group-title">
                기타 업무 <span className="text-muted">{tasks.length}</span>
              </h3>
            )}
            <ul className="task-list">
              {tasks.slice(0, taskLimit).map((task) => {
                const body = (
                  <>
                    <span className="body-small task-list__period">{task.period}</span>
                    <div className="task-list__info">
                      <p className="label-large">
                        {task.title}
                        {task.url && <span aria-hidden="true"> ↗</span>}
                      </p>
                      {task.desc && <p className="body-small text-muted">{task.desc}</p>}
                    </div>
                    {task.tech?.length > 0 && (
                      <ul className="chip-list task-list__tech" aria-label="사용 기술">
                        {task.tech.map((t) => (
                          <li key={t} className="chip">
                            {t}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                );
                return (
                  <Reveal as="li" key={task.title + task.period} className="task-list__item">
                    {task.url ? (
                      <a className="task-list__row task-list__row--link" href={task.url} target="_blank" rel="noreferrer">
                        {body}
                      </a>
                    ) : (
                      <div className="task-list__row">{body}</div>
                    )}
                  </Reveal>
                );
              })}
            </ul>
            <MoreButton rest={tasks.length - taskLimit} onClick={() => setTaskLimit((n) => n + TASK_PAGE)} />
          </div>
        )}
      </div>
    </section>
  );
}
