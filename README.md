# 오픈플랜 프론트엔드 과제

## 기본 설정

```
1. Node.js 18 이상이 설치되어 있어야 합니다
2. pnpm이 설치되어 있어야 합니다 (설치: `npm install -g pnpm`)

프로젝트 설정
1. 저장소 클론: `git clone https://github.com/gyeongza/open-plan-assignments.git`

2. 프로젝트 폴더로 이동: `cd open-plan`

3. VS Code에서 워크스페이스 열기: `/open-plan/.vscode/open-plan.code-workspace` 파일 실행

4. 의존성 설치: `pnpm install`
```

## 개발 서버 실행

```
1. 웹 애플리케이션 실행
- web workspace -> pnpm dev

- 기본적으로 http://localhost:5173 에서 실행됩니다

2. 스토리북 실행

- storybook workspace -> pnpm dev
- 기본적으로 http://localhost:6006 에서 실행됩니다
```

## 기술 선택 및 이유

### Core

- TypeScript
  - 정적 타입 시스템을 통해 런타임 오류를 방지하고 코드의 가독성과 유지보수성을 향상시키기 위해 사용
- React
  - 선언적 UI 구성과 컴포넌트 기반 아키텍처를 통해 효율적인 UI 개발이 가능하도록 선택

### Style

- Tailwind CSS
  - 빠른 개발 속도와 일관성 있는 디자인을 하기 위해 선택

### State Managements

- React Query

  - 서버 상태 (데이터 페칭, 캐싱, 동기화 및 상태 업데이트)를 효율적으로 관리하기 위해 사용

- Zustand
  - 클라이언트 상태 (사진 조회 정보, 조회 이력)를 전역으로 관리하기 위해 사용

## 기능 요구사항

- [REQUIREMENTS.md 참고](https://github.com/gyeongza/open-plan-assignments/blob/main/docs/REQUIREMENTS.md)

## 고민했던 부분

### 1. 사진 조회 이력 유무에 따른 리다이렉트

- `result` 페이지 권한에 대한 부분을 클라이언트 상태로만 어떻게 관리할 수 있을지에 대한 고민을 했습니다.
- `result` 페이지로 바로 접근하는 경우 권한이 없다고 판단하여 HOC 패턴(`withResultAccessGuard`)을 이용하여 `canAccessResult` 상태에 따라 컴포넌트 렌더링했습니다.
- `Home`에서 다음을 누르는 경우에는 `allowResultAccess`를 비동기적으로 처리하여 이동하기 전에 권한을 부여하여 데이터를 불러올 수 있도록 했습니다.
- 로그인 방식을 클라이언트에서 처리하는 것 같아 어색한 부분이 있었지만 최대한 요구사항에 맞도록 구현해보았습니다.
- 테스트하기 편하도록 조회 이력을 초기화하는 버튼을 전역적으로 추가했습니다.

### 2. 스타일링

- Tailwind CSS를 사용하면서 폰트나 gap의 단위를 피그마에 맞게 작성하다보니 px과 rem이 혼합되어 사용하였습니다. 예) `px-[17px] py-2(rem)`이 부분은 주어진 요구사항이 어떤가에 따라 통일할 수 있는 부분이라 일단은 피그마의 요구사항에 맞도록 스타일링하였습니다. 디자인 시스템이 있다면 그에 따라 config를 확장하여 변경할 수 있을 것 같습니다.
- 반응형 디자인에 맞게 레이아웃 및 스켈레톤 UI를 추가했습니다.

### 3. 새로고침을 통해 기존 데이터 사용

- `shouldFetchData`를 검증하고 데이터가 이미 로컬 스토리지에 있다면 기존 데이터를 사용하도록 했습니다.
- React Query를 사용하거나 Next.js fetch를 사용한다면 기본적으로 캐싱이 되지만 `새로 고침 시에도 데이터가 유지되게 해주세요.` 라는 요구사항을 다시 서버에 요청하지 않도록 하는 것으로 이해해서 이렇게 구현했습니다.

### 4. Suspense 및 ErrorBoundary

- Next.js 에서는 Loading이나 Error 파일을 이용하여 해당 레이아웃이나 페이지 단에서 로딩과 에러처리를 할 수 있지만 리액트만 사용하여 구현하였기에 데이터를 불러오는 쪽에서 선언적으로 로딩과 에러를 관리하도록 했습니다.

### 5. 모노레포 구성

- 크게 web, storybook, pakages(config, ui)로 분리했습니다.
- apps와 packages로 나누어 각각에 필요한 패키지 의존성을 관리하도록 했습니다.
