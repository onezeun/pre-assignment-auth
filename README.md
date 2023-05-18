# 사용자 로그인 구현
기업과제로 구현한 사용자 로그인 화면입니다.

<br>

## 🔗 배포링크
https://warm-heliotrope-3e78eb.netlify.app

<br>

## ⚙ 실행방법
```
// 프로젝트 패키지 설치
$ npm i

// 프로젝트 실행
$ npm start
```

<br>

## 📂 디렉토리 구조 
```
📦src
 ┣ 📂components
 ┃ ┗ 📜Layout.tsx
 ┣ 📂hooks
 ┃ ┗ 📜useValidation.tsx
 ┣ 📂pages
 ┃ ┣ 📜Login.tsx
 ┃ ┗ 📜Main.tsx
 ┣ 📂styles
 ┃ ┣ 📜index.css
 ┃ ┗ 📜Layout.css
 ┣ 📜App.tsx
 ┗ 📜index.tsx
 ```

 <br>

## 🔨 사용 기술 스택
| 사용처 | 사용 기술 | 결정 사유 |
| --- | --- | --- |
| 프레임워크 | React (CRA) |  |
| 언어 | Typescript(Javascript) | - 더 안정적인 코드 작성: 컴파일 과정에서 버그를 사전에 찾을 수 있음 <br /> - 개발 생산성 향상: 자동완성, 타입체크, 에러 표시 도구 제공 <br /> - 코드 가독성 향상: 개발자가 코드를 이해하고 유지보수하기 쉽게 만듦 |
| 라우팅 처리 | react-router-dom |  |
| 코드 포매팅 | ESLint |  |
| 배포 | netlify | 정적 웹페이지를 간편하게 무료로 배포 가능 |

<br>


## 💻 구현 사항
- 로그인시 Local Storage에 로그인 정보 저장 후 메인페이지 이동
- 유효성 검사 (validation 커스텀 훅으로 분리)
  - ID : 메일형식
  - PWD : 소문자, 대문자, 숫자 조합 (최소 1개씩) 시작문자는 알파벳
- 로그아웃시 Local Storage 정보 삭제 후 로그인 페이지 이동

<br>

<p align="center"> <img width="700" src="https://github.com/onezeun/pre-assignment-login/assets/78632052/6fbad17f-ee11-40c5-bcec-9453016486cb"></p>


