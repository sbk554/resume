# Backend Portfolio

Mobbin 스타일 가이드 기반 백엔드 개발자 포트폴리오 (React + Vite).

## 실행

```bash
npm install
npm run dev      # 개발 서버
npm run build    # dist/ 생성
```

## 구조

```
src/
├─ css/
│  ├─ reset.css     기본 스타일 제거
│  ├─ common.css    스타일 가이드 (토큰 · 타이포 클래스 · 버튼/배지/칩/카드 등)
│  └─ style.css     전체 레이아웃 및 화면 디자인
├─ data/            ★ 내용은 여기서만 수정 (TODO 표시)
│  ├─ profile.js    이름·소개·이메일·히어로 카운터·로고 클라우드·강점
│  ├─ skills.js     기술스택
│  ├─ career.js     경력·교육
│  ├─ projects.js   주요 업무(카드+상세) · 기타 업무(tasks 리스트)
│  └─ nav.js        메뉴
├─ assets/logos/   기술 로고 SVG (Devicon, MIT) — index.js 에 import 해서 사용
├─ sections/        메인 섹션 (Hero, About, Skills, Experience, Projects, Education)
├─ pages/           Home(원페이지), ProjectDetail(/#/project/:id)
├─ components/      Header(+모바일 메뉴), Footer(연락처), ProjectCard, Segmented …
├─ hooks/           useScrollSpy(메뉴 활성), useSectionNav(섹션 이동), useReveal
└─ utils/date.js    재직 기간 자동 계산
```

## TODO 채우기

프로젝트 전체에서 `TODO` 를 검색하면 채워야 할 곳이 모두 나옵니다.

- `index.html` — title, description, og 태그
- `src/data/*.js` — 모든 텍스트·링크·날짜
- 이미지 — `public/images/` 에 넣고 데이터에 `./images/파일명` 으로 지정
  (비워 두면 회색 TODO 플레이스홀더가 표시됩니다)
- 이력서 PDF — `public/resume.pdf` 후 `profile.resumeUrl: './resume.pdf'`

## 스타일 가이드 사용법

디자인 시안의 스타일 이름 = 클래스 이름입니다.

```html
<h2 class="heading-large">경력.</h2>
<p class="body-medium text-muted">설명</p>
<a class="btn btn--primary btn--large">프로젝트 보기</a>
```

| 분류 | 클래스 |
|---|---|
| 타이포 | `display-large` `heading-xlarge/large/medium/small` `title-medium` `body-large/medium/small` `label-large/medium/small` `caption` |
| 텍스트 색 | `text-ink` `text-muted` `text-faint` `text-accent` |
| 버튼 | `btn` + `btn--primary/outline/soft` + `btn--large/small/xsmall` |
| 기타 | `badge(--accent/--overlay/--outline)` `chip` `icon-tile(--small/--large)` `card(--soft/--sm)` `segmented` |

## 배포 (GitHub Pages)

HashRouter 사용으로 새로고침 404 없이 정적 호스팅 가능합니다. `npm run build` 후 `dist/` 를 업로드하세요.
