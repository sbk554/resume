import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { navItems } from '../data/nav';
import { profile } from '../data/profile';
import useScrollSpy from '../hooks/useScrollSpy';
import useSectionNav from '../hooks/useSectionNav';
import { CloseIcon, MenuIcon } from './Icons';

export default function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const ids = useMemo(() => navItems.map((item) => item.id), []);
  const scrollSpyId = useScrollSpy(ids, isHome);
  // 상세 페이지에서는 Projects 활성
  const activeId = isHome ? scrollSpyId : 'projects';
  const goTo = useSectionNav();
  const [isOpen, setIsOpen] = useState(false);

  // 모바일 메뉴 열림 시 body 스크롤 잠금 + ESC 닫기
  useEffect(() => {
    document.body.classList.toggle('is-locked', isOpen);
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false);
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  // 화면이 데스크톱으로 커지면 메뉴 닫기
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 769px)');
    const onChange = (e) => e.matches && setIsOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const handleNav = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    goTo(id);
  };

  return (
    <>
      <header className="header">
        <nav className="nav-pill" aria-label="주요 메뉴">
          <a className="nav-pill__logo" href="#top" onClick={(e) => handleNav(e, 'top')}>
            {profile.logo}
          </a>

          <div className="nav-pill__menu">
            <ul className="nav-pill__list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    className={`nav-pill__link${activeId === item.id ? ' is-active' : ''}`}
                    href={`#${item.id}`}
                    aria-current={activeId === item.id ? 'location' : undefined}
                    onClick={(e) => handleNav(e, item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a className="btn btn--primary btn--small" href="#contact" onClick={(e) => handleNav(e, 'contact')}>
              Contact
            </a>
          </div>

          <button
            type="button"
            className="btn-icon nav-pill__toggle"
            aria-label="메뉴 열기"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen(true)}
          >
            <MenuIcon />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu${isOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="전체 메뉴"
        aria-hidden={!isOpen}
      >
        <div className="nav-pill">
          <a className="nav-pill__logo" href="#top" onClick={(e) => handleNav(e, 'top')} tabIndex={isOpen ? 0 : -1}>
            {profile.logo}
          </a>
          <button
            type="button"
            className="btn-icon btn-icon--dark"
            aria-label="메뉴 닫기"
            onClick={() => setIsOpen(false)}
            tabIndex={isOpen ? 0 : -1}
          >
            <CloseIcon />
          </button>
        </div>

        <ul className="mobile-menu__list">
          {navItems.map((item) => (
            <li key={item.id} className="mobile-menu__item">
              <a
                className={`mobile-menu__link${activeId === item.id ? ' is-active' : ''}`}
                href={`#${item.id}`}
                onClick={(e) => handleNav(e, item.id)}
                tabIndex={isOpen ? 0 : -1}
              >
                <span className="heading-medium">{item.label}</span>
                <span className="label-medium text-muted">{item.ko}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-menu__foot">
          <a className="btn btn--primary btn--large" href="#contact" onClick={(e) => handleNav(e, 'contact')} tabIndex={isOpen ? 0 : -1}>
            Contact
          </a>
          <a className="btn btn--outline btn--large" href={profile.resumeUrl} target="_blank" rel="noreferrer" tabIndex={isOpen ? 0 : -1}>
            이력서 PDF
          </a>
        </div>
      </div>
    </>
  );
}
