# ✨ BTS (Bithumb NTF SNS) 💰

## 🎨 프로젝트 소개

- 프로젝트명은 **Bithumb의 NFT와 SNS 서비스를 결합하여 BTS로 지었습니다.** 다양한 작가들의 그림과 아트를 NFT 코인 경매로 만나볼 수 있으며 빗썸 코인 유저들과 열린 소통을 할 수 있도록 SNS 커뮤니티도 활성화 시켰습니다.

<br />

## 📅 개발 기간

### 2021. 9. 13 ~ 10. 08 (4주)

<br />

## 🧙🏻‍♀️ Front 기술 스택

| 역할       | 스택명                                                                                                                                                                                |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 프레임워크 | <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> (함수형 컴포넌트 사용)                                                            |
| 스타일     | <img src="https://img.shields.io/badge/Emotion-DB7093?style=flat-square&logo=Styled-components&logoColor=white"/>                                                                     |
| 상태관리   | <img src="https://img.shields.io/badge/Redux-001add?style=flat-square&logoColor=white"/> <img src="https://img.shields.io/badge/ReduxSaga-001add?style=flat-square&logoColor=white"/> |
| 기본 언어  | <img src="https://img.shields.io/badge/JavaScript-F7B93E?style=flat-square&logo=JavaScript&logoColor=white"/> ES6 준수                                                                |

<br>

## 🗂 React 라이브러리

- antd (템플릿)
- immer (불변성 유지)
- react-icons (아이콘)
- AOS (모션 동작)

<br>

## 👩🏻‍🎤 팀 소개

| 팀명   | MIC (May I clone?) |
| ------ | ------------------ |
| 프론트 | 서유림             |
| 프론트 | 이현주             |
| 백엔드 | 조원희             |
| 백엔드 | 백인준             |
| 백엔드 | 문승재             |

<br>

---

## 💻 프로젝트 주요 기능 (화면 미리보기)

<br />

### 페이지별 기능 소개
```
📦 src
 ┣ 📂 pages
 ┃ ┣ 📜 404page.js
 ┃ ┣ 📜 auction.js
 ┃ ┣ 📜 board.js
 ┃ ┣ 📜 board_post.js
 ┃ ┣ 📜 board_write.js
 ┃ ┣ 📜 board_update.js
 ┃ ┣ 📜 login.js
 ┃ ┣ 📜 mypage.js
 ┃ ┣ 📜 notice.js
 ┃ ┣ 📜 search.js
 ┃ ┣ 📜 upload.js
 ┃ ┗ 📜 home.js
 ┣ 📂 reducers
 ┃ ┣ 📜 action.js
 ┃ ┣ 📜 chart.js
 ┃ ┣ 📜 post.js
 ┃ ┗ 📜 user.js
 ┣ 📂 sagas
 ┃ ┣ 📜 action.js
 ┃ ┣ 📜 chart.js
 ┃ ┣ 📜 post.js
 ┃ ┗ 📜 user.js
```

## 👉 `로딩화면`

- 크롬 다이노도 즐기는 빗썸 NFT 경매장으로 뛰어들어가는 모습으로 로딩 화면 시작 <br>
  (활발하게 경매가 이루어질 수 있도록 유쾌하고 밝은 분위기로 시작됩니다.)

![](https://images.velog.io/images/leemember/post/c35472c9-c3ad-4bce-b8b7-2f9a48ea6b18/bts1.gif)

<br />

## 👉 `메인페이지`

### **Header** (로고, 검색바, 로그인 & 로그아웃, 마이페이지)

### **Intro**

1. 트레이딩뷰 그래프로 클레이튼 현재 시세 불러오기
2. 하락 상승시 색깔로 표시 (상승시 빨간색 / 하락시 파란색)
3. 아래 화살표 클릭 시 NFT 경매 섹션으로 이동

![](https://images.velog.io/images/leemember/post/68a0cbd5-173c-43da-826d-9c49dc4b117c/%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB.gif)

### **NFT 경매 섹션**

1. BTS 회원 유저들이 업로드한 모든 NFT 경매 게시글 불러오기
2. 페이징네이션 (최대 9개의 게시물이 보이도록 구현. 초과시 다음 페이지 번수가 생긴다.)

### **Footer**

1. 4주동안 함께 열심히 프로젝트 달렸던 팀 멤버들 소개
2. 깃허브 주소 클릭시 해당 멤버 깃허브 페이지로 새창 열리기

![](https://images.velog.io/images/leemember/post/5f8e4e67-9a4e-49cb-9334-8b31c807dade/%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB2.gif)

<br />

## 👉 `로그인`

### **상단 헤더에 로그인 버튼 클릭**

1. 카카오 auth 로그인
2. 네이버 auth 로그인

![](https://images.velog.io/images/leemember/post/e491a246-aa14-48bc-8a9a-053f2368ea87/login.gif)

<br />

## 👉 `NFT 카드 아이템`

### **좋아요 기능**

1. 좋아요 시 마이페이지 `좋아요한 작품` 에 저장
2. 좋아요 해제 시 마이페이지 `좋아요한 작품` 에 삭제

### **삭제 기능**

1. 마이페이지 `나의 NFT 작품` 라우터에서만 삭제 가능

<br />

## 👉 `NFT 경매 업로드`

### **제목, 작품설명**

### **코인 및 시간 설정해서 경매 시작**

<br />

## 👉 `NFT 경매 게시글`

### **경매 시작 버튼 클릭 시**

### **좋아요 개수 체크**

<br />

## 👉 `커뮤니티`

### **커뮤니티 게시글 모든 목록 불러오기**

1. 페이징네이션 (게시글 최대 5개 까지 볼 수 있도록 구현, 초과시 다음 페이지 번수가 생긴다.)

### **게시글 View 페이지**

1. 댓글 작성
2. 댓글 삭제

### **본인이 작성한 게시글**

1. 게시글 삭제 (삭제 시 게시글 목록 페이지로 자동 리다이렉팅)
2. 게시글 수정 (수정 시 이전글 그대로 불러오기)

<br />

## 👉 `마이페이지`

### **지갑생성**

1. 현재 잔액 조회

### **나의 NFT 작품**

### **좋아요한 작품**

<br />

## 👉 `검색기능`

- 헤더 검색바에 해당 키워드 검색시, 검색한 키워드의 NFT 경매 게시글 출력

![](https://images.velog.io/images/leemember/post/e5989934-70e9-4e88-b9a8-a551ed963faa/search.gif)
<br />
