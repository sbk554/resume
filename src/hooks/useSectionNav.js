import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * 섹션 이동 함수 반환
 * - 메인에서는 해당 섹션으로 부드럽게 스크롤
 * - 상세 페이지에서는 메인으로 이동 후 스크롤 (Home 에서 state.scrollTo 처리)
 */
export default function useSectionNav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return useCallback(
    (id) => {
      if (pathname !== '/') {
        navigate('/', { state: { scrollTo: id } });
        return;
      }
      if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    },
    [pathname, navigate]
  );
}
