import useReveal from '../hooks/useReveal';

/** 스크롤 진입 시 페이드업 래퍼 */
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
