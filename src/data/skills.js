// ==========================================================================
// 기술스택 데이터
// category 값은 skillCategories 의 id 중 하나
// icon: src/assets/logos 의 로고 (없으면 short 텍스트 표시)
// TODO: 실제 사용 기술과 숙련도 설명으로 교체
// ==========================================================================
import { logos } from '../assets/logos';

export const skillCategories = [
  { id: 'all', label: '전체' },
  { id: 'language', label: 'Language' },
  { id: 'framework', label: 'Framework' },
  { id: 'data', label: 'DB · Infra' },
  { id: 'tool', label: 'Tool' },
];

export const skills = [
  { name: 'Java', short: 'Java', icon: logos.java, category: 'language', desc: '비즈니스 로직 구현, 트랜잭션 관리, 예외 처리 등 견고한 서버 로직 작성 역량 보유' },
  { name: 'Node.js', short: 'Node', icon: logos.nodejs, category: 'language', desc: '비동기 이벤트 기반의 서버 환경 구축 및 효율적인 API 서버 개발 경험' },
  { name: 'PHP', short: 'php', icon: logos.php, category: 'language', desc: '웹 서비스 백엔드 구축 및 데이터베이스 연동을 통한 동적 페이지 처리 경험' },
  { name: 'JavaScript', short: 'Js', icon: logos.javascript, category: 'language', desc: '프론트엔드와 백엔드를 아우르는 전반적인 웹 애플리케이션 로직 구현 역량 보유' },
  { name: 'Java Spring', short: 'Java Sprin', icon: logos.javaspring, category: 'framework', desc: 'Spring MVC 기반의 웹 애플리케이션 및 RESTful API 설계·구현' },
  { name: 'ORACLE', short: 'ORACLE', icon: logos.oracle, category: 'data', desc: '효율적인 스키마 설계, 조인(Join) 및 서브쿼리를 활용한 복잡한 SQL 쿼리 작성, 데이터 조회 성능 최적화 고려' },
  { name: 'MySQL', short: 'MySQL', icon: logos.mysql, category: 'data', desc: '효율적인 스키마 설계, 조인(Join) 및 서브쿼리를 활용한 복잡한 SQL 쿼리 작성, 데이터 조회 성능 최적화 고려' },
  { name: 'Linux', short: 'Linux', icon: logos.linux, category: 'data', desc: '리눅스 기반 서버 환경 이해 및 기본 명령어, 쉘 스크립트를 활용한 서비스 운영·배포 환경 관리 경험' },
  { name: 'SVN', short: 'SVN', icon: logos.svn, category: 'tool', desc: '형상 관리 도구를 활용한 소스 코드 버전 관리 및 이력 추적' },
  { name: 'Git', short: 'Git', icon: logos.git, category: 'tool', desc: '브랜치 전략(Git-flow / Feature Branch Workflow)에 맞춘 커밋 관리 및 PR 생성' },
];
