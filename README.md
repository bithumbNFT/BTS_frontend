# ✨ BTS (Bithumb NTF SNS) 💰

## 🎨 프로젝트 소개

- 프로젝트명은 **Bithumb의 NFT와 SNS 서비스를 결합하여 BTS로 지었습니다.** 다양한 작가들의 그림과 아트를 NFT 코인 경매로 만나볼 수 있으며 빗썸 코인 유저들과 열린 소통을 할 수 있도록 SNS 커뮤니티도 활성화 시켰습니다.

<br />

## 📅 개발 기간

### 2021. 9. 13 ~ 10. 10 (4~5주)

### [작업 issues 바로보기](https://github.com/bithumbNFT/BTS_frontend/issues)

- 1주 차 : 전 페이지 UI 컴포넌트 레이아웃 마크업 작업 완료
- 2주 차 : 더미데이터 만들어서 Redux 및 Redux-saga 세팅 작업 완료
- 3주 차 : 커뮤니티 및 경매 부분 기능 및 API 연동 작업 (커뮤니티 완료)
- 4주 차 : NFT 작품 상세페이지 & 마이페이지 완료
- 5주 차 : NFT 경매 작업 완료 & QA 테스트

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
- axios (RESTfull API 데이터 통신)
- immer (불변성 유지)
- react-icons (아이콘)
- AOS (모션 동작)
- react-router-dom

<br>

## 👩🏻‍🎤 팀 소개

| 팀명   | MIC (May I clone?) |
| ------ | ------------------ |
| 프론트 | 서유림 (테크리더)  |
| 프론트 | 이현주             |
| 백엔드 | 조원희 (팀 리더)   |
| 백엔드 | 백인준 (테크리더)  |
| 백엔드 | 문승재             |

<br>

---

## 💻 프로젝트 주요 기능 (화면 미리보기)

<br />

## 🌟 페이지별 기능 요약

```
📦 src
 ┣ 📂 pages
 ┃ ┣ 📜 404page.js 📍(404 에러 경로 이탈 시 메인으로 이동)
 ┃ ┣ 📜 auction.js 📍(NFT 경매 작품 View)
 ┃ ┣ 📜 board.js 📍(커뮤니티 업로드 된 게시글 리스트)
 ┃ ┣ 📜 board_post.js 📍(커뮤니티 게시글 내용물 View)
 ┃ ┣ 📜 board_write.js 📍(커뮤니티 게시글 작성)
 ┃ ┣ 📜 board_update.js 📍(커뮤니티 게시글 수정)
 ┃ ┣ 📜 login.js 📍(로그인 페이지 : 네이버 & 카카오 Oauth)
 ┃ ┣ 📜 mypage.js 📍(마이페이지 : 내가 올린 NFT 작품, 좋아요한 작품, 지갑 정보)
 ┃ ┣ 📜 search.js 📍(NFT 작품 검색 기능)
 ┃ ┣ 📜 upload.js 📍(NFT 작품 경매 게시글 업로드)
 ┃ ┗ 📜 home.js 📍(NFT 메인페이지 : 클레이튼 현재 유동적인 시세가 표, NFT 경매 게시글 카드 (경매전, 경매중, 경매완료로 상태 나눔), Footer 팀 멤버 소개 )
```

## 🌟 페이지별 기능 **디테일** 소개

<br />

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

![](https://images.velog.io/images/leemember/post/a522f045-cb12-4776-968d-dd8a0cb009d7/main.gif)
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
   ![](https://images.velog.io/images/leemember/post/c45fdb16-6f60-40ed-82d7-742062458f5e/nft.gif)

2. 좋아요 해제 시 마이페이지 `좋아요한 작품` 에 삭제
   ![](https://images.velog.io/images/leemember/post/5f976f77-1d2c-486e-8c7e-1a637160ee3c/unlike.gif)

### **삭제 기능**

1. 마이페이지 `나의 NFT 작품` 라우터에서만 삭제 가능

<br />

## 👉 `NFT 경매 업로드`

1. NFT 제목 및 작품설명

2. 코인 및 경매기간 설정해서 NFT 경매 게시글 업로드

![](https://images.velog.io/images/leemember/post/c0373617-d8a6-4597-a73a-f84a35a1f092/NFTwrite.gif)

<br />

## 👉 `NFT 경매 게시글`

### **경매 시작 버튼 클릭 시**

### **좋아요 개수 체크**

<br />

## 👉 `커뮤니티`

### **커뮤니티 게시글 모든 목록 불러오기**

1. 페이징네이션 (게시글 최대 5개 까지 볼 수 있도록 구현, 초과시 다음 페이지 번수가 생긴다.)

![](https://images.velog.io/images/leemember/post/ba6a074a-fdf7-4f7b-ab5f-6e1cf46b6bfe/board.gif)

### **게시글 View 페이지**

1. 댓글 작성
2. 댓글 삭제

![](https://images.velog.io/images/leemember/post/5510c539-6b04-4127-b1d8-4ad4d8cdbd28/comment.gif)

### **본인이 작성한 게시글**

1. 게시글 수정 (수정 시 이전글 그대로 불러오기)

![](https://images.velog.io/images/leemember/post/e046c9d9-5ee1-4786-9983-b74a867694f7/update.gif)

2. 게시글 삭제 (삭제 시 게시글 목록 페이지로 자동 리다이렉팅)

![](https://images.velog.io/images/leemember/post/1e75d8ef-4acf-4e7a-9b40-b323f0f18148/delete.gif)

<br />

## 👉 `마이페이지`

### **1. 지갑생성 & 현재 잔액 조회**

### **2. 나의 NFT 작품 & 좋아요한 작품**

![](https://images.velog.io/images/leemember/post/7eaad3fa-c858-43af-afd1-537f1341a598/mypage.gif)

<br />

## 👉 `검색기능`

- 헤더 검색바에 해당 키워드 검색시, 검색한 키워드의 NFT 경매 게시글 출력

![](https://images.velog.io/images/leemember/post/e5989934-70e9-4e88-b9a8-a551ed963faa/search.gif)
<br />
