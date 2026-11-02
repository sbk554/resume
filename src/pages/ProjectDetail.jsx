import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import Media from '../components/Media';
import Footer from '../components/Footer';
import { PlusIcon } from '../components/Icons';

function Section({ eyebrow, title, children }) {
  return (
    <section className="detail-section">
      <span className="section__eyebrow">{eyebrow}</span>
      <h2 className="heading-medium">{title}</h2>
      {children}
    </section>
  );
}

function TroubleItem({ item, index, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = `trouble-panel-${index}`;
  return (
    <li className={`trouble__item${open ? ' is-open' : ''}`}>
      <button type="button" className="trouble__btn title-medium" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen((v) => !v)}>
        <span>
          #{index + 1} {item.title}
        </span>
        <span className="trouble__icon">
          <PlusIcon />
        </span>
      </button>
      <dl id={panelId} className="trouble__panel" hidden={!open}>
        <dt className="label-medium">문제</dt>
        <dd className="body-medium">{item.problem}</dd>
        <dt className="label-medium">원인</dt>
        <dd className="body-medium">{item.cause}</dd>
        <dt className="label-medium">해결</dt>
        <dd className="body-medium">{item.solution}</dd>
        <dt className="label-medium">결과</dt>
        <dd className="body-medium">{item.result}</dd>
      </dl>
    </li>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const index = projects.findIndex((p) => p.id === id);
  const project = projects[index];

  useEffect(() => {
    window.scrollTo({ top: 0 });
    if (project) document.title = `${project.title} | 포트폴리오`;
  }, [project]);

  if (!project) return <Navigate to="/" replace />;

  const d = project.detail;
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const links = d?.links?.filter((l) => l.url) ?? [];
  const linkClass = ['btn btn--primary', 'btn btn--outline', 'btn btn--soft'];

  return (
    <>
      <main className="main detail">
        {/* 타이틀 */}
        <section className="detail__hero">
          <div className="container detail__hero-inner">
            <Link to="/" state={{ scrollTo: 'projects' }} className="btn btn--soft btn--small detail__back">
              ← 포트폴리오
            </Link>
            <div className="detail__badges">
              {project.featured && <span className="badge badge--accent">대표</span>}
              <span className="badge">{project.org}</span>
            </div>
            <h1 className="heading-xlarge">{project.title}</h1>
            <p className="body-large detail__desc">{d?.description ?? project.summary}</p>

            <dl className="detail__info">
              <div>
                <dt className="caption">기간</dt>
                <dd className="label-large">{project.period}</dd>
              </div>
              <div>
                <dt className="caption">역할</dt>
                <dd className="label-large">{d?.role ?? 'TODO'}</dd>
              </div>
              <div>
                <dt className="caption">인원</dt>
                <dd className="label-large">{d?.members ?? project.team}</dd>
              </div>
              <div>
                <dt className="caption">기여도</dt>
                <dd className="label-large">{d?.contribution ?? 'TODO'}</dd>
              </div>
              <div>
                <dt className="caption">URL</dt>
                <dd className="label-large">
                    {project.id === 'project-e' ? (
                      "2023년까지 운영 후 현재는 서비스가 종료되었습니다."
                    ) : (
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        이동하기
                      </a>
                    )}
                </dd>
              </div>
            </dl>

            {links.length > 0 && (
              <div className="detail__links">
                {links.map((l, i) => (
                  <a key={l.label} className={linkClass[i] ?? 'btn btn--soft'} href={l.url} target="_blank" rel="noreferrer">
                    {l.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 대표 이미지 */}
        <div className="container">
          <div className="detail__cover">
            <Media src={d?.cover || project.thumbnail} alt={`${project.title} 대표 화면`} placeholder="TODO: 서비스 대표 화면 / 데모 GIF" />
          </div>
        </div>

        {d ? (
          <div className="container detail__body">
            <Section eyebrow="Overview" title="개요.">
              {d.overview.map((text, i) => (
                <p key={i} className={`body-medium${i > 0 ? ' text-muted' : ''}`}>
                  {text}
                </p>
              ))}
            </Section>

            <Section eyebrow="Tech Stack" title="사용 기술.">
              <div className="tech-rows">
                {d.techGroups.map((g) => (
                  <div key={g.label} className="tech-row">
                    <span className="label-medium text-muted">{g.label}</span>
                    <ul className="chip-list">
                      {g.items.map((t) => (
                        <li key={t} className="chip">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            <Section eyebrow="Architecture" title="아키텍처.">
              {d.architectureImage ? (
                <img className="arch__img" src={d.architectureImage} alt={`${project.title} 아키텍처 다이어그램`} />
              ) : (
                <div className="arch" role="img" aria-label={`아키텍처: ${d.architecture.flat().join(', ')}`}>
                  {d.architecture.map((node, i) => (
                    <div key={i} style={{ display: 'contents' }}>
                      {i > 0 && <span className="arch__arrow" aria-hidden="true">→</span>}
                      {Array.isArray(node) ? (
                        <div className="arch__stack">
                          {node.map((n) => (
                            <span key={n} className="chip">
                              {n}
                            </span>
                          ))}
                        </div>
                      ) : (
                        // 마지막(저장소 묶음) 바로 앞 노드 = 핵심 서버 → 진하게 강조
                        <span className={`chip${i === d.architecture.length - 2 ? ' chip--dark' : ''}`}>{node}</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </Section>

            <Section eyebrow="My Role" title="담당 역할.">
              <ul className="body-medium detail-section__list">
                {d.roles.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </Section>

            <Section eyebrow="Troubleshooting" title="문제 해결.">
              <ul className="trouble">
                {d.troubles.map((t, i) => (
                  <TroubleItem key={i} item={t} index={i} defaultOpen={i === 0} />
                ))}
              </ul>
            </Section>

            <Section eyebrow="Result" title="성과.">
              <ul className="result-grid">
                {d.results.map((r) => (
                  <li key={r.label} className="card">
                    <p className="heading-medium">{r.value}</p>
                    <p className="body-small result__label">{r.label}</p>
                  </li>
                ))}
              </ul>
            </Section>

            <Section eyebrow="Retrospective" title="회고.">
              <p className="body-medium">{d.retrospective}</p>
            </Section>

            <PrevNext prev={prev} next={next} />
          </div>
        ) : (
          <div className="container detail__body">
            {/* TODO: data/projects.js 에서 이 프로젝트의 detail 을 작성하면 상세 내용이 표시됩니다 */}
            <p className="body-medium empty">TODO: 상세 내용을 작성해 주세요. (data/projects.js → detail)</p>
            <PrevNext prev={prev} next={next} />
          </div>
        )}
      </main>
      <Footer compact />
    </>
  );
}

function PrevNext({ prev, next }) {
  if (projects.length < 2) return null;
  return (
    <nav className="detail-nav" aria-label="프로젝트 이동">
      <Link to={`/project/${prev.id}`} className="card card--sm detail-nav__link">
        <span className="caption text-muted">← 이전 프로젝트</span>
        <span className="label-large">{prev.title}</span>
      </Link>
      <Link to={`/project/${next.id}`} className="card card--sm detail-nav__link detail-nav__link--next">
        <span className="caption text-muted">다음 프로젝트 →</span>
        <span className="label-large">{next.title}</span>
      </Link>
    </nav>
  );
}
