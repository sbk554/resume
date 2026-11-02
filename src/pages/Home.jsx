import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import Education from '../sections/Education';
import Footer from '../components/Footer';

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  // 상세 페이지 → 메인 섹션 이동 처리
  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return;
    requestAnimationFrame(() => {
      if (target === 'top') window.scrollTo({ top: 0 });
      else document.getElementById(target)?.scrollIntoView();
    });
    navigate('.', { replace: true, state: null }); // 새로고침 시 재스크롤 방지
  }, [location.state, navigate]);

  return (
    <>
      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Footer />
    </>
  );
}
