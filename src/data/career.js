// ==========================================================================
// 경력 · 교육 · 자격증 데이터
// 날짜 형식: 'YYYY.MM' / 재직 중이면 end: null
// 기간(○년 ○개월)과 총 경력은 자동 계산됩니다.
// ==========================================================================

// TODO: 경력 (최신순)
export const experiences = [
  {
    company: '영진건설기술교육원 (미래내일 일경험)',
    team: '개발팀',
    role: '백엔드/서버 개발자',
    start: '2024.11.25', // TODO
    end: '2024.12.30', // 재직 중
    tasks: [
      'TODO: 주요 업무 1 — 무엇을 / 어떻게 / 결과',
      'TODO: 주요 업무 2 — 성과 수치 포함',
      'TODO: 주요 업무 3',
    ],
    tech: ['Java', 'Java Spring', 'MS-SQL', 'GIT'],
  },
  {
    company: '(주)플래시21',
    team: '개발팀',
    role: '백엔드/서버 개발자',
    start: '2022.09.19', // TODO
    end: '2024.11.04', // TODO
    tasks: ['TODO: 주요 업무 1', 'TODO: 주요 업무 2'],
    tech: ['Node.js', 'Java', 'PHP', 'Java Spring', 'JavaScript', 'GIT', 'SVN', 'ORACLE', 'MYSQL', 'Linux'],
  },
];

// TODO: 교육 이력 (최신순)
export const educations = [
  { title: '영진직업전문학교(스마트웹앱)', desc: '사설교육 | React 풀스텍 교육', start: '2024.12.31', end: '2025.07.31' },
  { title: 'Ai스쿨', desc: '사설교육 | 프론트엔드 교육', start: '2022.03', end: '2022.08' },
  { title: '경운대학교', desc: '4년제 대학교 | 항공정보통신공학과', start: '2013.03', end: '2020.02' },
];
