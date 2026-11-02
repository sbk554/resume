import { useEffect, useState } from 'react';

/**
 * 화면에 보이는 섹션 id 를 반환 (내비 .is-active 표시용)
 * @param {string[]} ids 섹션 id 목록
 * @param {boolean} enabled 메인 페이지에서만 동작
 */
export default function useScrollSpy(ids, enabled = true) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!enabled) {
      setActiveId('');
      return undefined;
    }
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return undefined;

    // 화면 상단 40% 지점을 지나는 섹션을 활성으로 판단
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((el) => observer.observe(el));

    // 최상단(히어로)에서는 비활성
    const onScroll = () => {
      if (window.scrollY < window.innerHeight * 0.3) setActiveId('');
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [ids, enabled]);

  return activeId;
}
