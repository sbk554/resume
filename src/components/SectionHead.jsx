/**
 * 섹션 헤더 — eyebrow + 제목(heading-large) [+ 보조문구] [+ 오른쪽 요소(필터 등)]
 */
export default function SectionHead({ eyebrow, title, sub, aside }) {
  const titles = (
    <div className="section__titles">
      <span className="section__eyebrow">{eyebrow}</span>
      <h2 className="heading-large">{title}</h2>
      {sub && <p className="body-medium section__sub">{sub}</p>}
    </div>
  );

  if (!aside) return <div className="section__head">{titles}</div>;

  return (
    <div className="section__head section__head--row">
      {titles}
      {aside}
    </div>
  );
}
