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
  { name: 'Java', short: 'Java', icon: logos.java, category: 'language', desc: 'TODO: 숙련도 설명 (예: 객체지향 설계, Stream·동시성)' },
  { name: 'Node.js', short: 'Node', icon: logos.nodejs, category: 'language', desc: 'TODO: 숙련도 설명' },
  { name: 'PHP', short: 'php', icon: logos.php, category: 'language', desc: 'TODO: EC2, RDS, S3 배포 경험' },
  { name: 'JavaScript', short: 'Js', icon: logos.javascript, category: 'language', desc: 'TODO: EC2, RDS, S3 배포 경험' },
  { name: 'Java Spring', short: 'Java Sprin', icon: logos.spring, category: 'framework', desc: 'TODO: REST API, Security, 트랜잭션 관리' },
  { name: 'ORACLE', short: 'ORACLE', icon: logos.oracle, category: 'data', desc: 'TODO: N+1 해결, 동적 쿼리' },
  { name: 'MySQL', short: 'MySQL', icon: logos.mysql, category: 'data', desc: 'TODO: 인덱스 설계, 실행계획 분석' },
  { name: 'Linux', short: 'Linux', icon: logos.linux, category: 'data', desc: 'TODO: 캐시 전략, 분산 락' },
  { name: 'SVN', short: 'SVN', icon: logos.svn, category: 'tool', desc: 'TODO: CI/CD 파이프라인 구성' },
  { name: 'Git', short: 'Git', icon: logos.git, category: 'tool', desc: 'TODO: 브랜치 전략, 코드 리뷰' },
];
