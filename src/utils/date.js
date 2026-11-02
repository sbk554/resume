// 'YYYY.MM' 문자열 → 개월 수 계산 유틸

function toMonthIndex(value) {
  if (!value) {
    const now = new Date();
    return now.getFullYear() * 12 + now.getMonth();
  }
  const [y, m] = value.split('.').map(Number);
  if (!y || !m) return null; // TODO 등 잘못된 값
  return y * 12 + (m - 1);
}

// start~end 기간 개월 수 (시작월 포함)
export function monthsBetween(start, end) {
  const s = toMonthIndex(start);
  const e = toMonthIndex(end);
  if (s === null || e === null) return 0;
  return Math.max(e - s + 1, 0);
}

export function formatMonths(total) {
  if (!total) return '';
  const y = Math.floor(total / 12);
  const m = total % 12;
  if (y && m) return `${y}년 ${m}개월`;
  return y ? `${y}년` : `${m}개월`;
}

export function formatPeriod(start, end) {
  return `${start} ~ ${end || '현재'}`;
}
