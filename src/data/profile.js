// ==========================================================================
// 프로필 · 소개 · 연락처 데이터
// TODO 표시된 값을 실제 내용으로 교체하세요.
// ==========================================================================
import { logos } from '../assets/logos';

export const profile = {
  // TODO: 내비 로고 (이니셜 등)
  logo: 'RESUME',
  // TODO: 이름
  name: '성보경',
  role: 'Backend Developer',
  // TODO: 히어로 메인 카피 (마침표로 끝나는 한 문장 권장)
  headline: '멈추지 않는 서버를 설계합니다.',
  // TODO: 히어로 서브 카피 (2문장 이내)
  intro: '안녕하세요, 백엔드 개발자 성보경입니다. 트래픽이 몰려도 흔들리지 않는 API와 데이터 구조를 고민합니다.',
  // TODO: 이력서 PDF 경로 (public/resume.pdf 에 넣으면 './resume.pdf')
  resumeUrl: '#',
  // TODO: 이메일
  email: 'sbk8731@naver.com',
  certifications: [
    { title: "무선설비기사", date: "2020.12.16" }
  ],
};

// 히어로 카운터 — TODO: 숫자와 라벨
export const stats = [
  { value: '3년+', label: '백엔드 개발 경력' },
  { value: '4개', label: '운영한 서비스' },
  { value: '7개', label: '진행 프로젝트 수' },
];

// 히어로 기술 로고 클라우드 — TODO: 실제 사용 기술에 맞게 추가/삭제 (logos 는 src/assets/logos/index.js)
// size: 'large' | 'small' | 생략(medium)
export const heroTech = [
  { name: 'Java', icon: logos.java, size: 'large' },
  { name: 'JPA · Hibernate', icon: logos.hibernate },
  { name: 'Spring', icon: logos.spring, size: 'large' },
  { name: 'Git', icon: logos.git, size: 'small' },
  { name: 'MySQL', icon: logos.mysql },
  { name: 'Redis', icon: logos.redis, size: 'large' },
  { name: 'Kubernetes', icon: logos.kubernetes, size: 'small' },
  { name: 'AWS', icon: logos.aws, size: 'large' },
  { name: 'Nginx', icon: logos.nginx, size: 'small' },
  { name: 'Kafka', icon: logos.kafka },
  { name: 'GitHub Actions', icon: logos.githubActions, size: 'small' },
  { name: 'Docker', icon: logos.docker },
];

export const about = {
  // TODO: 프로필 사진 경로 (흑백 처리는 CSS 에서 자동)
  photo: logos.profile,
  // TODO: 한 줄 슬로건
  slogan: '기록하고 개선하는 개발자',
  // TODO: 자기소개 문단 (배열 순서대로 출력, 첫 문단은 진하게 / 나머지는 muted)
  paragraphs: [
    'AI 스쿨 과정을 통해 코딩의 즐거움과 몰입감을 경험하며 개발자의 길을 걷게 되었습니다. 현재는 안정적인 시스템 설계와 데이터 처리에 매력을 느껴 백엔드 개발을 주력 분야로 삼고 있습니다. 탄탄한 서버 로직 구축을 바탕으로 완성도 높은 서비스를 만드는 데 집중하고 있습니다.',
    '철저한 일정 관리와 책임감을 바탕으로 마감 기한을 엄수하는 것을 원칙으로 일하고 있습니다. 팀원들과의 활발하고 투명한 소통을 통해 시너지를 내며 협업에 임합니다. 안주하지 않고 어떤 도구나 환경이든 유연하게 대처하며 무엇이든 해낼 수 있는 개발자로 성장하는 것이 목표입니다.',
  ],
  // TODO: 강점 3가지
  strengths: [
    // { title: '안정적 운영', desc: 'Java 8 및 Apache Tomcat 9 기반의 Spring MVC 프로젝트 개발 환경을 구성하고, MSSQL 데이터베이스와 JDBC 기반으로 연동하여 웹 애플리케이션의 데이터 처리 환경을 구축했습니다. Controller, Service, DAO 구조를 기반으로 요청 처리 흐름을 구성하고, 서버 실행 및 데이터베이스 연결 설정을 점검하며 안정적인 서비스 실행 환경을 관리했습니다.' },
    // { title: '성능 개선', desc: '불필요한 API 요청 및 DB 중복 처리 로직을 개선하고, Sharp 라이브러리를 통한 이미지 압축을 적용해 전반적인 시스템 성능을 최적화했습니다.' },
    // { title: '기록과 공유', desc: '프로젝트 개발 과정에서 발생한 오류와 해결 방법, API 명세 및 서버 환경 설정 등을 정리하여 유지보수와 문제 해결에 활용했습니다.' },
    { title: '안정적 운영', desc: 'Java 8과 Tomcat 9 기반의 Spring MVC 환경에서 MSSQL을 연동하여 백엔드를 구축했습니다. Controller-Service-DAO 계층 기반으로 요청 흐름을 설계하고, 데이터베이스 연결을 점검해 안정적인 서비스 기반을 마련했습니다.' },
    { title: '성능 개선', desc: '불필요한 API 호출과 DB 중복 처리 로직을 리팩토링하여 서버의 응답 속도를 개선했습니다. 또한 Sharp 라이브러리를 활용한 이미지 압축 기술을 적용해 전반적인 시스템 부하를 줄이고 성능을 최적화했습니다.' },
    { title: '기록과 공유', desc: '개발 과정에서 발생한 트러블슈팅 내역과 해결 방법, API 명세 및 서버 설정 내역을 체계적으로 문서화했습니다. 이를 통해 프로젝트의 유지보수 효율을 높이고 향후 원활한 문제 해결이 가능하도록 기여했습니다.' },
  ],
};
