import { profile } from '../data/profile';
import useSectionNav from '../hooks/useSectionNav';

/** 푸터 겸 연락처 섹션. compact: 상세 페이지용 간단형 */
export default function Footer({ compact = false }) {
  const goTo = useSectionNav();
  const year = new Date().getFullYear();

  if (compact) {
    return (
      <footer className="footer footer--compact">
        <div className="container footer__inner">
          {/* TODO: 마무리 문구 */}
          <h2 className="heading-medium">함께 일할 준비가 되어 있습니다.</h2>
          <a className="btn btn--inverse btn--large" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
      </footer>
    );
  }

  return (
    <footer id="contact" className="footer">
      <div className="container footer__inner">
        <div className="footer__head">
          <span className="label-medium footer__eyebrow">Contact</span>
          {/* TODO: 마무리 문구 */}
          <h2 className="heading-large">함께 일할 준비가 되어 있습니다.</h2>
        </div>

        <div className="footer__links">
          <a className="btn btn--inverse btn--large" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>

        <div className="footer__bottom caption">
          <span>
            © {year} {profile.name}. All rights reserved.
          </span>
          <a
            className="footer__link"
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              goTo('top');
            }}
          >
            맨 위로 ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
