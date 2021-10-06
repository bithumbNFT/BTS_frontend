// 카카오로그인 키
const KAKAO_CLIENT_ID = 'ee94979439874c79e3ce9f8545f6712b';
// [배포용]
// const KAKAO_REDIRECT_URI = 'http://3.35.69.11/login/oauth2/code/kakao';
// [로컬용]
const KAKAO_REDIRECT_URI = 'http://localhost:3000/login/oauth2/code/kakao';

// 네이버 로그인 키
const NAVER_CLIENT_ID = 's5fg6nwUikj7JUgh3nX2';
// const NAVER_CLIENT_ID = 'dlFlVjjrC_SpcdLnZ9Bv';
const NAVER_CALLBACK_URL = 'http://localhost:3000/login/oauth2/code/naver';
const STATE_STRING = Math.random().toString(36).substr(2, 11);

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code&state=${STATE_STRING}`;
export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE_STRING}&redirect_uri=${NAVER_CALLBACK_URL}`;
