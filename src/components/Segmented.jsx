/**
 * 세그먼트 탭 필터
 * @param {{id:string,label:string}[]} items
 */
export default function Segmented({ items, value, onChange, label }) {
  return (
    <div className="segmented" role="tablist" aria-label={label}>
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          role="tab"
          aria-selected={value === item.id}
          className={`segmented__item${value === item.id ? ' is-active' : ''}`}
          onClick={() => onChange(item.id)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
