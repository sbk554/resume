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
    team: '2명(퍼블 1명, 풀스텍 1명)',
    thumbnail: logos.yeongjin, // TODO: 카드 썸네일 (16:10)
    tech: ['Java', 'Java Spring', 'MS-SQL'],
    detail: {
      description: '교육 과정 수강신청부터 본인인증, 결제, 주차 등록 및 신청 이력 관리까지 통합 제공하는 교육 신청 시스템의 백엔드 개발 및 운영',
      cover: '', // TODO: 상세 대표 이미지 / GIF
      role: '백엔드 리드',
      // members: 'BE TODO · FE TODO',
      members: '2명(퍼블 1명, 풀스텍 1명)',
      contribution: '100%',
      links: [
        { label: '시연 영상', url: '' }, // TODO: 없으면 빈 문자열 → 숨김
        { label: 'API 문서', url: '' },
      ],
      overview: [
        '교육 과정별 수강신청과 결제, 신청자 관리 등 교육 운영에 필요한 기능을 제공하는 웹 시스템을 개발했습니다. 본인인증 및 PG 결제 서비스를 연동하고, 사용자 신청 정보와 결제 내역을 안정적으로 처리할 수 있는 백엔드 구조를 구축했습니다.',
        'Java Spring 기반 서버와 MS-SQL 데이터베이스를 활용하여 수강신청부터 결제 완료, 신청 이력 관리까지 이어지는 업무 처리 흐름을 구현하고, 실제 운영 환경에서 발생하는 요구사항을 지속적으로 반영하는 것을 목표로 했습니다.',
      ],
      techGroups: [
        { label: 'Backend', items: ['Java 8', 'Java Spring', 'JSP'] },
        { label: 'Data', items: ['MS-SQL'] },
        { label: 'Infra', items: ['KT Cloud', 'Window'] },
      ],
      // TODO: 아키텍처 이미지가 있으면 architectureImage 에 경로 → 아래 flow 대신 이미지 출력
      architectureImage: '',
      architecture: ['Client (Web Browser)', 'Java Spring / JSP (API Server on KT Cloud / Windows)', ['MS-SQL (Database)']],
      roles: [
        '본인인증 모듈 연동 및 요청 데이터 처리 로직 구현',
        'PG사 연동을 통한 결제 기능 개발 및 검증',
        '주차 등록 기능 및 신청 사용자 관리 기능 구현',
        '수강 신청 이력 저장/조회 기능 포함한 DB 설계 및 SQL 최적화 수행',
      ],
      troubles: [
        {
          title: '본인인증 및 PG 결제 연동 처리',
          problem: '수강신청 과정에서 사용자 본인확인과 결제 처리가 필요했으며, 외부 인증 및 결제 서비스와 내부 신청 데이터 간 연계가 필요했습니다.',
          cause: '외부 서비스에서 전달되는 인증 및 결제 결과를 내부 신청 정보와 연결하고, 요청 결과에 따라 신청 상태를 정확하게 관리해야 했습니다.',
          solution: '본인인증 모듈과 PG사 연동 인터페이스를 구현하고, 외부 요청 및 응답 데이터를 처리하여 인증 결과와 결제 상태를 내부 시스템에 반영하도록 개발했습니다.',
          result: '본인인증부터 결제까지 이어지는 수강신청 처리 흐름을 구현하여 사용자 신청 절차를 통합했습니다.',
        },
        { title: '수강신청 이력 데이터 관리 및 조회 최적화', 
          problem: '수강신청 정보와 사용자별 신청 이력을 체계적으로 저장하고 조회할 수 있는 데이터 처리 구조가 필요했습니다.', 
          cause: '수강신청 데이터와 사용자 정보 간 관계를 고려한 데이터베이스 설계 및 조회 조건 최적화가 필요했습니다.', 
          solution: 'MS-SQL 기반으로 신청 이력 관련 데이터 구조를 설계하고 SQL 쿼리를 구현 및 최적화하여 사용자별 신청 내역 조회 기능을 개발했습니다.', 
          result: '수강신청 이력의 저장 및 조회 기능을 구현하고 데이터 관리와 조회 효율성을 개선했습니다.' },
      ],
      results: [
        { value: '통합 구현', label: '본인인증 및 PG 결제 연동' },
        { value: '100%', label: '백엔드 개발 담당 기여도' },
        { value: '지속 운영', label: '수강신청 시스템 유지보수 및 기능 개선' },
      ],
      retrospective: '수강신청부터 본인인증, 결제, 신청 이력 관리까지 서비스의 전체적인 백엔드 처리 흐름을 설계하고 구현하며 시스템 전반에 대한 이해도를 높였습니다. 특히 외부 인증 및 결제 서비스와 데이터베이스를 연계하면서 데이터 정합성과 안정적인 예외 처리가 중요하다는 점을 경험했으며, 실제 운영 환경에서 발생하는 요구사항을 반영하며 서비스 유지보수 역량을 강화하고 있습니다.',
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
    team: '7명(퍼플 2명 ,프론트 3명 ,백엔드 1명 ,풀스텍 1명)',
    thumbnail: logos.mmate,
    tech: ['JAVA', 'Java Spring', 'ORACLE'],
    detail: {
      description: '기존 기업용 솔루션의 기능적 한계를 개선하고, 사용자 요구사항에 맞춘 게시판 및 대회 접수·신청 관리 기능을 확장한 웹 서비스',
      cover: '', // TODO: 상세 대표 이미지 / GIF
      role: '백엔드 리드',
      // members: 'BE TODO · FE TODO',
      members: '7명(퍼플 2명 ,프론트 3명 ,백엔드 1명 ,풀스텍 1명)',
      contribution: '80%',
      links: [
        { label: '시연 영상', url: '' }, // TODO: 없으면 빈 문자열 → 숨김
        { label: 'API 문서', url: '' },
      ],
      overview: [
        '기존 Mmate 솔루션의 지속적인 유지보수와 사용자 요구사항에 따른 신규 기능 개발을 진행했습니다. 게시판 내 투표 기능과 대회 접수 및 신청 관리 기능을 추가하여 기존 서비스의 활용 범위를 확장했습니다.',
        'Java Spring 기반의 백엔드 구조를 유지하면서 Oracle 데이터베이스 모델을 설계하고, 신규 기능과 기존 시스템 간의 데이터 연계 및 서비스 안정성을 확보하는 것을 목표로 했습니다.',
      ],
      techGroups: [
        { label: 'Backend', items: ['Java 8', 'Java Spring', 'JSP'] },
        { label: 'Data', items: ['ORACLE'] },
        { label: 'Infra', items: ['Linux', 'SVN'] },
      ],
      // TODO: 아키텍처 이미지가 있으면 architectureImage 에 경로 → 아래 flow 대신 이미지 출력
      architectureImage: '',
      architecture: ['Client (Web Browser)', 'Java Spring / JSP (API Server on KT Cloud / Windows)', ['ORACLE (Database)']],
      roles: [
        '게시판 내 투표 기능 추가 및 관련 데이터 모델 설계',
        '대회 접수 및 신청 관리 기능 개발 (신청 상태, 접수 내역 확인 등 포함)',
        '운영 중 발생한 버그 수정 및 신규 요청사항 처리 다수 대응',
      ],
      troubles: [
        {
          title: '게시판 투표 데이터 관리 및 집계 구조 설계',
          problem: '게시글별 투표 항목과 사용자 투표 내역을 관리하고 투표 결과를 정확하게 집계할 수 있는 데이터 구조가 필요했습니다.',
          cause: '게시글, 투표 항목, 사용자별 투표 내역 간 데이터 관계와 투표 결과 집계 기준을 명확하게 정의해야 했습니다.',
          solution: 'Oracle 데이터베이스 기반으로 투표 관련 데이터 모델을 설계하고, 투표 등록 및 결과 조회를 위한 SQL 처리 로직을 구현했습니다.',
          result: '게시판 내 투표 기능과 결과 조회 기능을 구현하여 기존 솔루션의 서비스 기능을 확장했습니다.',
        },
        { title: '대회 접수 및 신청 상태 관리 기능 구현', 
          problem: '대회 신청 정보와 신청 진행 상태를 체계적으로 관리하고 사용자가 접수 내역을 확인할 수 있는 기능이 필요했습니다.', 
          cause: '신청 정보와 진행 상태에 따른 데이터 처리 및 화면별 조회 조건을 구분해야 했습니다.', 
          solution: '대회 신청 데이터 모델을 구성하고 신청 상태 관리, 접수 내역 조회 및 관련 데이터 처리 로직을 개발했습니다.', 
          result: '대회 접수부터 신청 내역 확인까지 이어지는 관리 기능을 구현하여 업무 처리 편의성을 개선했습니다.' },
      ],
      results: [
        { value: '신규 기능', label: '게시판 투표 기능 및 데이터 모델 구현' },
        { value: '업무 자동화', label: '대회 접수 및 신청 관리 기능 개발' },
        { value: '지속 개선', label: '기존 솔루션 유지보수 및 기능 고도화' },
      ],
      retrospective: '기존 시스템의 구조를 이해하고 새로운 기능을 추가하는 과정에서 기존 데이터와 신규 기능 간의 연계성을 고려하는 것이 중요하다는 점을 배웠습니다. 또한 사용자 요구사항을 데이터 모델과 서버 로직으로 구체화하는 경험을 통해 유지보수성과 확장성을 고려한 백엔드 개발 역량을 높였습니다.',
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
    team: '7명(퍼블 2명, 프론트 1명 ,풀스택 4명)',
    thumbnail: logos.safety,
    tech: ['Java', 'Java Spring', 'MariaDB', '전자정부프레임워크'],
    detail: {
      description: '체험 프로그램의 예약 편의성을 높이고 Instagram API를 활용한 SNS 콘텐츠 연동 및 관리자 예약 관리 기능을 제공하는 공공기관 웹 서비스',
      cover: '', // TODO: 상세 대표 이미지 / GIF
      role: '백엔드 리드',
      // members: 'BE TODO · FE TODO',
      members: '7명(퍼블 2명, 프론트 1명 ,풀스택 4명)',
      contribution: '20%',
      links: [
        { label: '시연 영상', url: '' }, // TODO: 없으면 빈 문자열 → 숨김
        { label: 'API 문서', url: '' },
      ],
      overview: [
        '체험 프로그램 이용자의 예약 편의성을 높이기 위해 날짜별 예약 인원 관리와 중복 예약 방지 기능을 개발했습니다. 또한 관리자가 공휴일을 설정하면 해당 날짜의 예약을 차단할 수 있도록 예약 시스템과 관리자 기능을 연계했습니다.',
        'Instagram API를 활용한 외부 SNS 피드 연동과 MariaDB 기반 데이터 관리 구조를 구현하여 사용자 편의성과 콘텐츠 접근성을 높이는 것을 목표로 했습니다.',
      ],
      techGroups: [
        { label: 'Backend', items: ['Java 8', 'Java Spring', 'JSP'] },
        { label: 'Data', items: ['MariaDB'] },
        { label: 'Infra', items: ['Linux', 'SVN'] },
      ],
      // TODO: 아키텍처 이미지가 있으면 architectureImage 에 경로 → 아래 flow 대신 이미지 출력
      architectureImage: '',
      architecture: ['Client (Web Browser)', 'Java Spring / JSP (API Server on KT Cloud / Windows)', ['MariaDB (Database)']],
      roles: [
        'SNS 연동형 인스타그램 피드 실시간 동기화 기능 구현 (API 기반 연동)',
        '사용자 예약 편의를 위한 체험 예약 기능 개발 (날짜별 인원 제한, 중복 방지 처리 등 포함)',
        '관리자 페이지 내 공휴일 설정 기능 개발, 예약 차단 기능과 연동',
        'DB 테이블 설계 및 각 모듈별 연계 처리 로직 구현',
      ],
      troubles: [
        {
          title: '날짜별 예약 인원 제한 및 중복 예약 방지',
          problem: '동일한 날짜와 시간대에 예약 신청이 집중될 경우 예약 가능 인원을 초과하거나 중복 예약이 발생하지 않도록 처리해야 했습니다.',
          cause: '예약 날짜와 시간대별 신청 현황을 기준으로 잔여 인원을 확인하고 중복 신청 여부를 검증하는 과정이 필요했습니다.',
          solution: 'MariaDB 예약 데이터와 연계하여 날짜별 예약 인원 제한 및 중복 예약 검증 로직을 구현했습니다.',
          result: '예약 가능 인원과 신청 내역을 기반으로 예약을 관리할 수 있는 체계를 구현했습니다.',
        },
        { title: '관리자 공휴일 설정과 예약 차단 기능 연동', 
          problem: '관리자가 공휴일을 등록했을 때 해당 날짜에 신규 예약이 접수되지 않도록 예약 기능과 연동해야 했습니다.', 
          cause: '관리자 페이지의 공휴일 데이터와 사용자 예약 가능 날짜 사이의 연계 처리가 필요했습니다.', 
          solution: '공휴일 설정 데이터를 데이터베이스에 저장하고 예약 가능 여부를 확인하는 서버 로직에 연동하여 예약 차단 기능을 구현했습니다.', 
          result: '관리자가 등록한 공휴일을 예약 정책에 반영하여 예약 일정 관리의 편의성을 개선했습니다.' },
      ],
      results: [
        { value: '예약 관리', label: '날짜별 예약 인원 제한 및 중복 방지 구현' },
        { value: '관리자 기능', label: '공휴일 설정과 예약 차단 기능 연동' },
        { value: '외부 API', label: 'Instagram 피드 연동 및 데이터 동기화' },
      ],
      retrospective: '예약 시스템 개발을 통해 날짜별 인원 제한과 중복 신청 방지 등 데이터 정합성을 고려한 서버 로직 설계의 중요성을 경험했습니다. 또한 관리자 설정과 사용자 예약 기능을 연계하고 외부 API를 활용하면서 여러 시스템 간 데이터 흐름을 설계하고 구현하는 역량을 높였습니다.',
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
    team: '6명(퍼블 2명 ,백엔드 1명 ,풀스택 3명)',
    thumbnail: logos.building,
    tech: ['JAVA', 'Java Spring', 'MariaDB'],
    detail: {
      description: '건축사의 업무 효율성을 높이기 위해 게시판, 자재 정보 및 표준계약서 관리 기능을 제공하는 업무지원 웹 시스템',
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
        '건축사 업무에 필요한 게시판, 자재 정보 및 표준계약서 관리 기능을 제공하는 업무지원 시스템 개발에 참여했습니다. 각 업무 모듈에서 사용하는 데이터를 체계적으로 관리하고 기존 JSP 페이지와 서버 간 원활한 데이터 연동이 필요했습니다.',
        'MariaDB 기반 데이터베이스 설계 및 구축과 Java Spring 기반 백엔드 기능 개발을 통해 업무별 데이터 관리 체계를 마련하고, 사용자 요청에 따른 데이터 조회 및 처리 기능을 제공하는 것을 목표로 했습니다.',
      ],
      techGroups: [
        { label: 'Backend', items: ['Java 8', 'Java Spring', 'JSP'] },
        { label: 'Data', items: ['MariaDB'] },
        { label: 'Infra', items: ['Linux', 'SVN'] },
      ],
      // TODO: 아키텍처 이미지가 있으면 architectureImage 에 경로 → 아래 flow 대신 이미지 출력
      architectureImage: '',
      architecture: ['Client (Web Browser)', 'Java Spring / JSP (API Server on KT Cloud / Windows)', ['MariaDB (Database)']],
      roles: [
        '데이터베이스 설계 및 구축 담당 (MySQL 기반 ERD 구성 및 테이블 생성)',
        '게시판, 자재 정보 시스템, 표준계약서 관리 기능 등 주요 모듈 개발',
        'JSP 기반 페이지와 연동되는 RESTful API 및 쿼리 구현',
      ],
      troubles: [
        {
          title: '업무 모듈별 데이터베이스 구조 설계',
          problem: '게시판, 자재 정보, 표준계약서 등 서로 다른 업무 영역의 데이터를 효율적으로 관리할 수 있는 데이터베이스 구조가 필요했습니다.',
          cause: '각 업무 모듈의 데이터 특성과 조회 및 관리 방식이 달라 테이블 구조와 데이터 관계를 명확하게 정의해야 했습니다.',
          solution: 'MySQL 기반 ERD를 작성하고 업무별 테이블 구조를 설계 및 구축하여 데이터 관리 체계를 구성했습니다.',
          result: '업무 모듈별 데이터 구조를 정립하고 각 기능에서 활용할 수 있는 데이터베이스 기반을 마련했습니다.',
        },
        { title: 'JSP 페이지와 백엔드 API 간 데이터 연동', 
          problem: '게시판과 자재 정보 및 표준계약서 관리 화면에서 필요한 데이터를 서버와 연동하여 조회하고 처리할 수 있어야 했습니다.', 
          cause: '화면별 요청 데이터와 데이터베이스 처리 결과를 일관된 방식으로 연결하는 서버 처리 로직이 필요했습니다.', 
          solution: 'Java Spring 기반 RESTful API와 SQL 쿼리를 구현하고 JSP 페이지와 연계하여 업무별 데이터 조회 및 처리 기능을 개발했습니다.', 
          result: '각 업무 화면에서 필요한 데이터를 서버와 연동하여 조회하고 관리할 수 있는 기능을 구현했습니다.' },
      ],
      results: [
        { value: 'DB 설계', label: 'ERD 작성 및 데이터베이스 구축' },
        { value: '업무 시스템', label: '게시판·자재 정보·표준계약서 관리 기능 개발' },
        { value: 'API 개발', label: 'JSP 연동 RESTful API 및 SQL 구현' },
      ],
      retrospective: '업무지원 시스템의 데이터베이스를 직접 설계하고 구축하면서 업무 요구사항을 데이터 구조로 구체화하는 경험을 쌓았습니다. 또한 여러 업무 모듈의 API와 SQL을 구현하며 데이터 처리 흐름과 화면 간 연계 구조를 이해하고 유지보수성을 고려한 백엔드 개발 역량을 강화했습니다.',
    },
  },
];

// ==========================================================================
// 기타 업무 — 운영·유지보수, 소규모 기능, 배치, 어드민 등 자잘한 작업
// TODO: 필요한 만큼 추가 (최신순). tech·url 은 생략 가능
// ==========================================================================
export const tasks = [
  { title: 'DNEX SW융합테크비즈센터', desc: '대관신청 수정, 관리자페이지 오류 수정 및 유지보수', period: '2023.05 ~ 2024.10', tech: ['JAVA', 'Java Spring', 'MySQL'] },
  { title: 'ICG 2023', desc: '공지사항 등록 및 웹취약점 수정', period: '2023.01 ~ 2023.12', tech: ['JAVA', 'Java Spring', 'MySQL'] },
  { title: '경상북도문화관광공사', desc: '관리자페이지 개선 및 웹취약점 수정', period: '2023.09 ~ 2024.10', tech: ['JAVA', 'Java Spring', 'MySQL'] },
];
