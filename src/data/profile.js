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
    'TODO: 개발을 시작한 계기와 현재 주력 분야를 3~4문장으로 작성합니다.',
    'TODO: 일하는 방식, 협업 태도, 앞으로의 방향을 2~3문장으로 작성합니다.',
  ],
  // TODO: 강점 3가지
  strengths: [
    { title: '성능 개선', desc: 'TODO: 쿼리·캐시 튜닝 경험 한 줄' },
    { title: '안정적 운영', desc: 'TODO: 장애 대응·모니터링 경험 한 줄' },
    { title: '기록과 공유', desc: 'TODO: 문서화·스터디 활동 한 줄' },
  ],
};
