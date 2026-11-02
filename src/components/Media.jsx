/**
 * 이미지 — src 가 비어 있으면 TODO 플레이스홀더 표시
 */
export default function Media({ src, alt = '', placeholder, className = '' }) {
  if (src) {
    return <img className={className} src={src} alt={alt} loading="lazy" />;
  }
  return (
    <div className={`placeholder ${className}`} style={{ width: '100%', height: '100%' }} role="img" aria-label={alt || placeholder}>
      {placeholder}
    </div>
  );
}

/** 기술 아이콘 타일 — icon 이 없으면 short 텍스트 */
export function IconTile({ icon, short, size, alt = '' }) {
  const sizeClass = size ? ` icon-tile--${size}` : '';
  return (
    <span className={`icon-tile${sizeClass}`}>
      {icon ? <img src={icon} alt={alt} /> : short}
    </span>
  );
}
