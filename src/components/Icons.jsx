// 인라인 SVG 아이콘 (currentColor 사용)
const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 20 20',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export const MenuIcon = () => (
  <svg {...base}><path d="M3 6h14M3 10h14M3 14h14" /></svg>
);

export const CloseIcon = () => (
  <svg {...base}><path d="M5 5l10 10M15 5L5 15" /></svg>
);

export const PlusIcon = () => (
  <svg {...base}><path d="M10 4v12M4 10h12" /></svg>
);
