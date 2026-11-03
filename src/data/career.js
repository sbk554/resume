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
      'Spring MVC 기반 백엔드 개발 : Controller, Service, DAO 구조를 활용한 서버 로직 구성 및 HTTP 요청 처리 기능 개발',
      'MSSQL 데이터베이스 연동 및 데이터 처리 : MSSQL(YJATTCLASS) 데이터베이스 연동을 통한 데이터 조회·저장 및 SQL 기반 데이터 처리',
      'Java 웹 애플리케이션 서버 환경 구성 및 배포 : Java 8, Apache Tomcat 9 기반 실행 환경 구성 및 KT Cloud 배포 환경 관리',
    ],
    tech: ['Java', 'Java Spring', 'MS-SQL', 'GIT'],
  },
  {
    company: '(주)플래시21',
    team: '개발팀',
    role: '백엔드/서버 개발자',
    start: '2022.09.19', // TODO
    end: '2024.11.04', // TODO
    tasks: ['Java/Spring 기반 기업 및 공공기관 웹 서비스 백엔드 개발과 기존 솔루션 유지보수 및 고도화', 
            'Oracle, MariaDB 기반 데이터베이스 설계 및 구축, ERD 작성과 SQL 쿼리 개발',
            '예약, 게시판, 대회 접수, 투표 및 업무 관리 등 서비스 핵심 기능 개발',
            '운영 중 발생하는 오류 분석 및 버그 수정, 사용자 요구사항 반영을 통한 서비스 안정성 개선',],
    tech: ['Node.js', 'Java', 'PHP', 'Java Spring', 'JavaScript', 'GIT', 'SVN', 'ORACLE', 'MYSQL', 'Linux'],
  },
];

// TODO: 교육 이력 (최신순)
export const educations = [
  { title: '영진직업전문학교(스마트웹앱)', desc: '사설교육 | React 풀스텍 교육', start: '2024.12.31', end: '2025.07.31' },
  { title: 'Ai스쿨', desc: '사설교육 | 프론트엔드 교육', start: '2022.03', end: '2022.08' },
  { title: '무선설비기사', desc: '한국방송통신전파진흥원', start: '2020.12.16', end: '' },
  { title: '경운대학교', desc: '4년제 대학교 | 항공정보통신공학과', start: '2013.03', end: '2020.02' },
];
