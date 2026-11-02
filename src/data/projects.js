// ==========================================================================
// 프로젝트 데이터
// · projects : 주요 업무 — 카드 + 상세 페이지(/project/:id)
// · tasks    : 기타 업무 — 자잘한 작업을 한 줄 리스트로 (상세 페이지 없음)
// featured: 대표 프로젝트 1개만 true 권장 / org: 썸네일 위 배지 (회사·서비스명)
// 이미지 경로는 public/images/... 에 두고 './images/xxx.png' 처럼 지정
// ==========================================================================
import { logos } from '../assets/logos';

export const projectFilters = [
  { id: 'all', label: '전체' },
  { id: 'major', label: '주요 업무' },
  { id: 'minor', label: '기타 업무' },
];

export const projects = [
  {
    id: 'project-a', // URL 에 사용 (영문 소문자, 하이픈)
    org: '영진건설기술교육원',
    url: 'https://yj3.or.kr/courRegist.do?page=1',
    featured: true,
    title: '영진건설기술교육원',
    summary: '교육 수강신청 시스템 백엔드 전반 개발',
    period: '2024.11.25 ~ 현재(유지보수중)',
    team: '2명(프론트 1명 ,백엔드 1명)',
    thumbnail: logos.yeongjin, // TODO: 카드 썸네일 (16:10)
    tech: ['Java', 'Java Spring', 'MS-SQL'],
    detail: {
      description: 'TODO: 어떤 서비스의 어떤 문제를 풀었는지 한 줄',
      cover: '', // TODO: 상세 대표 이미지 / GIF
      role: '백엔드 리드',
      // members: 'BE TODO · FE TODO',
      members: '2명(프론트 1명 ,백엔드 1명)',
      contribution: '100%',
      links: [
        { label: '시연 영상', url: '' }, // TODO: 없으면 빈 문자열 → 숨김
        { label: 'API 문서', url: '' },
      ],
      overview: [
        'TODO: 배경 — 기존 시스템의 문제, 비즈니스 요구사항 (3~4문장)',
        'TODO: 목표 — 정량 목표가 있다면 함께',
      ],
      techGroups: [
        { label: 'Backend', items: ['Java 8', 'Java Spring', 'JSP'] },
        { label: 'Data', items: ['MS-SQL'] },
        { label: 'Infra', items: ['KT Cloud', 'Window'] },
      ],
      // TODO: 아키텍처 이미지가 있으면 architectureImage 에 경로 → 아래 flow 대신 이미지 출력
      architectureImage: '',
      architecture: ['Client', 'Nginx', 'API Server ×2', ['MS-SQL']],
      roles: [
        '본인인증 모듈 연동 및 요청 데이터 처리 로직 구현',
        'PG사 연동을 통한 결제 기능 개발 및 검증',
        '주차 등록 기능 및 신청 사용자 관리 기능 구현',
        '수강 신청 이력 저장/조회 기능 포함한 DB 설계 및 SQL 최적화 수행',
      ],
      troubles: [
        {
          title: 'TODO: 이슈 제목 (예: 주문 조회 N+1 쿼리)',
          problem: 'TODO: 어떤 현상이 있었는지',
          cause: 'TODO: 원인 분석 과정',
          solution: 'TODO: 적용한 방법과 선택 이유',
          result: 'TODO: before → after 수치',
        },
        { title: 'TODO: 이슈 제목 2', problem: 'TODO', cause: 'TODO', solution: 'TODO', result: 'TODO' },
      ],
      results: [
        { value: 'TODO%', label: 'TODO: 평균 응답속도 개선' },
        { value: 'TODO TPS', label: 'TODO: 부하 테스트 처리량' },
        { value: 'TODO건', label: 'TODO: 장애 건수 / 비용 절감' },
      ],
      retrospective: 'TODO: 배운 점과 다음에 개선할 점 (2~3문장)',
    },
  },
  {
    id: 'project-b',
    org: '(주)플래시21',
    featured: false,
    title: 'Mmate 플래시21 솔루션',
    url: 'https://mmate.flash21.com',
    summary: '기존 솔루션 유지보수 및 고도화 작업 지속 수행',
    period: '2022.11 ~ 2024.10',
    team: '6명(프론트 1명 ,백엔드 5명)',
    thumbnail: logos.mmate,
    tech: ['JAVA', 'Java Spring', 'ORACLE'],
    detail: {
      description: 'TODO: 어떤 서비스의 어떤 문제를 풀었는지 한 줄',
      cover: '', // TODO: 상세 대표 이미지 / GIF
      role: '백엔드 리드',
      // members: 'BE TODO · FE TODO',
      members: '6명(프론트 1명 ,백엔드 5명)',
      contribution: '80%',
      links: [
        { label: '시연 영상', url: '' }, // TODO: 없으면 빈 문자열 → 숨김
        { label: 'API 문서', url: '' },
      ],
      overview: [
        'TODO: 배경 — 기존 시스템의 문제, 비즈니스 요구사항 (3~4문장)',
        'TODO: 목표 — 정량 목표가 있다면 함께',
      ],
      techGroups: [
        { label: 'Backend', items: ['Java 8', 'Java Spring', 'JSP'] },
        { label: 'Data', items: ['ORACLE'] },
        { label: 'Infra', items: ['Linux', 'SVN'] },
      ],
      // TODO: 아키텍처 이미지가 있으면 architectureImage 에 경로 → 아래 flow 대신 이미지 출력
      architectureImage: '',
      architecture: ['Client', 'Nginx', 'API Server ×2', ['ORACLE']],
      roles: [
        '게시판 내 투표 기능 추가 및 관련 데이터 모델 설계',
        '대회 접수 및 신청 관리 기능 개발 (신청 상태, 접수 내역 확인 등 포함)',
        '운영 중 발생한 버그 수정 및 신규 요청사항 처리 다수 대응',
      ],
      troubles: [
        {
          title: 'TODO: 이슈 제목 (예: 주문 조회 N+1 쿼리)',
          problem: 'TODO: 어떤 현상이 있었는지',
          cause: 'TODO: 원인 분석 과정',
          solution: 'TODO: 적용한 방법과 선택 이유',
          result: 'TODO: before → after 수치',
        },
        { title: 'TODO: 이슈 제목 2', problem: 'TODO', cause: 'TODO', solution: 'TODO', result: 'TODO' },
      ],
      results: [
        { value: 'TODO%', label: 'TODO: 평균 응답속도 개선' },
        { value: 'TODO TPS', label: 'TODO: 부하 테스트 처리량' },
        { value: 'TODO건', label: 'TODO: 장애 건수 / 비용 절감' },
      ],
      retrospective: 'TODO: 배운 점과 다음에 개선할 점 (2~3문장)',
    },
  },
  {
    id: 'project-c',
    org: '(주)플래시21',
    featured: false,
    title: '경기도국민안전체험관',
    url: 'https://ggsec.gg.go.kr/index',
    summary: '사용자 예약 편의를 위한 체험 예약 기능 개발',
    period: '2023.01 ~ 2023.03',
    team: '7명(프론트 3명 ,백엔드 4명)',
    thumbnail: logos.safety,
    tech: ['Java', 'Java Spring', 'MYSQL', '전자정부프레임워크'],
    detail: {
      description: 'TODO: 어떤 서비스의 어떤 문제를 풀었는지 한 줄',
      cover: '', // TODO: 상세 대표 이미지 / GIF
      role: '백엔드 리드',
      // members: 'BE TODO · FE TODO',
      members: '6명(프론트 1명 ,백엔드 5명)',
      contribution: '20%',
      links: [
        { label: '시연 영상', url: '' }, // TODO: 없으면 빈 문자열 → 숨김
        { label: 'API 문서', url: '' },
      ],
      overview: [
        'TODO: 배경 — 기존 시스템의 문제, 비즈니스 요구사항 (3~4문장)',
        'TODO: 목표 — 정량 목표가 있다면 함께',
      ],
      techGroups: [
        { label: 'Backend', items: ['Java 8', 'Java Spring', 'JSP'] },
        { label: 'Data', items: ['MySQL'] },
        { label: 'Infra', items: ['Linux', 'SVN'] },
      ],
      // TODO: 아키텍처 이미지가 있으면 architectureImage 에 경로 → 아래 flow 대신 이미지 출력
      architectureImage: '',
      architecture: ['Client', 'Nginx', 'API Server ×2', ['ORACLE']],
      roles: [
        'SNS 연동형 인스타그램 피드 실시간 동기화 기능 구현 (API 기반 연동)',
        '사용자 예약 편의를 위한 체험 예약 기능 개발 (날짜별 인원 제한, 중복 방지 처리 등 포함)',
        '관리자 페이지 내 공휴일 설정 기능 개발, 예약 차단 기능과 연동',
        'DB 테이블 설계 및 각 모듈별 연계 처리 로직 구현',
      ],
      troubles: [
        {
          title: 'TODO: 이슈 제목 (예: 주문 조회 N+1 쿼리)',
          problem: 'TODO: 어떤 현상이 있었는지',
          cause: 'TODO: 원인 분석 과정',
          solution: 'TODO: 적용한 방법과 선택 이유',
          result: 'TODO: before → after 수치',
        },
        { title: 'TODO: 이슈 제목 2', problem: 'TODO', cause: 'TODO', solution: 'TODO', result: 'TODO' },
      ],
      results: [
        { value: 'TODO%', label: 'TODO: 평균 응답속도 개선' },
        { value: 'TODO TPS', label: 'TODO: 부하 테스트 처리량' },
        { value: 'TODO건', label: 'TODO: 장애 건수 / 비용 절감' },
      ],
      retrospective: 'TODO: 배운 점과 다음에 개선할 점 (2~3문장)',
    },
  },
  {
    id: 'project-d',
    org: '(주)플래시21',
    featured: false,
    title: '대구광역시건축사회 건축사 업무지원시스템',
    url: 'https://kirasys.kr/',
    summary: '건축사 업무 처리를 위한 내부 시스템 백엔드 개발 참여',
    period: '2023.07 ~ 2023.10',
    team: '5명(프론트 1명 ,백엔드 4명)',
    thumbnail: logos.building,
    tech: ['JAVA', 'Java Spring', 'MySQL'],
    detail: {
      description: 'TODO: 어떤 서비스의 어떤 문제를 풀었는지 한 줄',
      cover: '', // TODO: 상세 대표 이미지 / GIF
      role: '백엔드 리드',
      // members: 'BE TODO · FE TODO',
      members: '6명(프론트 1명 ,백엔드 5명)',
      contribution: '30%',
      links: [
        { label: '시연 영상', url: '' }, // TODO: 없으면 빈 문자열 → 숨김
        { label: 'API 문서', url: '' },
      ],
      overview: [
        'TODO: 배경 — 기존 시스템의 문제, 비즈니스 요구사항 (3~4문장)',
        'TODO: 목표 — 정량 목표가 있다면 함께',
      ],
      techGroups: [
        { label: 'Backend', items: ['Java 8', 'Java Spring', 'JSP'] },
        { label: 'Data', items: ['MySQL'] },
        { label: 'Infra', items: ['Linux', 'SVN'] },
      ],
      // TODO: 아키텍처 이미지가 있으면 architectureImage 에 경로 → 아래 flow 대신 이미지 출력
      architectureImage: '',
      architecture: ['Client', 'Nginx', 'API Server ×2', ['ORACLE']],
      roles: [
        '데이터베이스 설계 및 구축 담당 (MySQL 기반 ERD 구성 및 테이블 생성)',
        '게시판, 자재 정보 시스템, 표준계약서 관리 기능 등 주요 모듈 개발',
        'JSP 기반 페이지와 연동되는 RESTful API 및 쿼리 구현',
      ],
      troubles: [
        {
          title: 'TODO: 이슈 제목 (예: 주문 조회 N+1 쿼리)',
          problem: 'TODO: 어떤 현상이 있었는지',
          cause: 'TODO: 원인 분석 과정',
          solution: 'TODO: 적용한 방법과 선택 이유',
          result: 'TODO: before → after 수치',
        },
        { title: 'TODO: 이슈 제목 2', problem: 'TODO', cause: 'TODO', solution: 'TODO', result: 'TODO' },
      ],
      results: [
        { value: 'TODO%', label: 'TODO: 평균 응답속도 개선' },
        { value: 'TODO TPS', label: 'TODO: 부하 테스트 처리량' },
        { value: 'TODO건', label: 'TODO: 장애 건수 / 비용 절감' },
      ],
      retrospective: 'TODO: 배운 점과 다음에 개선할 점 (2~3문장)',
    },
  },
  {
    id: 'project-e',
    org: '(주)플래시21',
    featured: false,
    title: 'ICG 2023',
    url: '2023년까지 운영 후 현재는 서비스가 종료되었습니다.',
    summary: '',
    period: '2023.01 ~ 2023.12',
    team: '3명(프론트 1명 ,백엔드 2명)',
    thumbnail: '',
    tech: ['JAVA', 'Java Spring', 'MySQL', '전자정부프레임워크'],
    detail: {
      description: 'TODO: 어떤 서비스의 어떤 문제를 풀었는지 한 줄',
      cover: '', // TODO: 상세 대표 이미지 / GIF
      role: '백엔드/서버 개발',
      // members: 'BE TODO · FE TODO',
      members: '3명(프론트 1명 ,백엔드 2명)',
      contribution: '30%',
      links: [
        { label: '시연 영상', url: '' }, // TODO: 없으면 빈 문자열 → 숨김
        { label: 'API 문서', url: '' },
      ],
      overview: [
        'TODO: 배경 — 기존 시스템의 문제, 비즈니스 요구사항 (3~4문장)',
        'TODO: 목표 — 정량 목표가 있다면 함께',
      ],
      techGroups: [
        { label: 'Backend', items: ['Java 8', 'Java Spring', 'JSP'] },
        { label: 'Data', items: ['MariaDB'] },
        { label: 'Infra', items: ['Linux', 'SVN'] },
      ],
      // TODO: 아키텍처 이미지가 있으면 architectureImage 에 경로 → 아래 flow 대신 이미지 출력
      architectureImage: '',
      architecture: ['Client', 'Nginx', 'API Server ×2', ['ORACLE']],
      roles: [
        '웹 취약점 개선',
      ],
      troubles: [
        {
          title: 'TODO: 이슈 제목 (예: 주문 조회 N+1 쿼리)',
          problem: 'TODO: 어떤 현상이 있었는지',
          cause: 'TODO: 원인 분석 과정',
          solution: 'TODO: 적용한 방법과 선택 이유',
          result: 'TODO: before → after 수치',
        },
        { title: 'TODO: 이슈 제목 2', problem: 'TODO', cause: 'TODO', solution: 'TODO', result: 'TODO' },
      ],
      results: [
        { value: 'TODO%', label: 'TODO: 평균 응답속도 개선' },
        { value: 'TODO TPS', label: 'TODO: 부하 테스트 처리량' },
        { value: 'TODO건', label: 'TODO: 장애 건수 / 비용 절감' },
      ],
      retrospective: 'TODO: 배운 점과 다음에 개선할 점 (2~3문장)',
    },
  },
];

// ==========================================================================
// 기타 업무 — 운영·유지보수, 소규모 기능, 배치, 어드민 등 자잘한 작업
// TODO: 필요한 만큼 추가 (최신순). tech·url 은 생략 가능
// ==========================================================================
export const tasks = [
  { title: 'DNEX SW융합테크비즈센터', desc: '대관신청 수정, 관리자페이지 오류 수정 및 유지보수', period: '2023.05 ~ 2024.11', tech: ['JAVA', 'Java Spring', 'MySQL'] },
  { title: 'TODO: 업무명 (예: 배치 스케줄러 실패 알림 연동)', desc: 'TODO: 한 줄 설명', period: 'TODO YYYY.MM', tech: ['Spring Batch', 'Slack API'] },
  { title: 'TODO: 업무명 (예: 슬로우 쿼리 인덱스 튜닝)', desc: 'TODO: 한 줄 설명', period: 'TODO YYYY.MM', tech: ['MySQL'] },
  { title: 'TODO: 업무명 (예: 레거시 API 응답 포맷 통일)', desc: 'TODO: 한 줄 설명', period: 'TODO YYYY.MM' },
  { title: 'TODO: 업무명', desc: 'TODO: 한 줄 설명', period: 'TODO YYYY.MM', url: '' },
];
