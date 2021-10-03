import React from 'react';
import { KAKAO_AUTH_URL, NAVER_AUTH_URL } from 'utils/OAuth';
import styled from '@emotion/styled';
import Header from 'components/Common/Header';

function Login() {
  const handleLoginClick = (social, e) => {
    e.preventDefault();
    if (social === 'kakao') {
      window.location.href = KAKAO_AUTH_URL;
    } else if (social === 'naver') {
      window.location.href = NAVER_AUTH_URL;
    }
  };

  return (
    <>
      <Header />
      <LoginWrapper>
        <LoginBg>
          <LoginLeft>
            <h1>BTS 시작하기 👉🏻</h1>
            <span>지금 로그인하고 다양한 NFT 작품들을 만나보세요</span>
            <br />
            <span>매일 다양한 작품들이 새 탭에서 펼쳐집니다.</span>
          </LoginLeft>
          <LoginPopUp>
            <h1 className="logo">Login</h1>
            <span className="sub-title">
              로그인 후 더 다양한 기능을 이용하실 수 있습니다.
            </span>
            <div>
              <Button
                type="button"
                className="kakao"
                onClick={e => handleLoginClick('kakao', e)}
              >
                <img src="/images/kakao.svg" alt="네이버 로그인" />
                <span> 카카오톡으로 로그인</span>
              </Button>
              <Button
                type="button"
                className="naver"
                onClick={e => handleLoginClick('naver', e)}
              >
                <img src="/images/naver.svg" alt="네이버 로그인" />
                <span> 네이버로 로그인</span>
              </Button>
            </div>
            <p className="login-notice">
              # 로그인은 개인 정보 보호 정책 및 서비스 약관에 동의하는 것을
              의미하며, <br /> 서비스 이용을 위해 이메일과 이름, 프로필 이미지를
              수집합니다.
            </p>
          </LoginPopUp>
        </LoginBg>
      </LoginWrapper>
    </>
  );
}

export default Login;

export const LoginWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 4.5em 2.5em;
  max-width: 1024px;
  overflow: hidden;
  box-sizing: border-box;
`;
// export const LoginBg = styled.div`
//   position: fixed;
//   left: 0;
//   top: 0;
//   width: 100vw;
//   height: 100vh;
//   z-index: 100;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
export const LoginBg = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  place-items: center;
`;

export const LoginLeft = styled.div`
  h1 {
    font-size: 32px;
    font-weight: 500;
    padding-bottom: 20px;
  }
  span {
    font-size: 16px;
    line-height: 1.43;
    color: #4e4e4e;
  }
`;

export const LoginPopUp = styled.div`
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  position: relative;
  background: #fff;
  max-width: 450px;
  overflow: hidden;
  width: 100%;
  text-align: center;
  padding: 30px 25px 38px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .logo {
    font-weight: 500;
    font-size: 32px;
    color: #444;
    text-align: center;
    margin: 68px 0 0;
  }
  .sub-title {
    padding: 10px 0 40px;
  }
  .login-notice {
    font-size: 11px;
    color: #4a4a4a;
    line-height: 1.2;
    padding-top: 30px;
  }
  .or {
    margin: 10px 40px 18px;
    font-size: 13px;
    font-weight: 600;
    line-height: 15px;
    color: #8e8e8e;
    position: relative;
    margin: 18px 18px;
    &::before {
      position: absolute;
      width: 36%;
      height: 1px;
      margin: 0 auto;
      content: '';
      display: inline-block;
      background-color: #dbdbdb;
      top: 8px;
      left: 17px;
    }
    &::after {
      position: absolute;
      width: 36%;
      height: 1px;
      margin: 0 auto;
      content: '';
      display: inline-block;
      background-color: #dbdbdb;
      top: 8px;
      right: 17px;
    }
  }
`;

export const Form = styled.form`
  display: grid;
  place-items: center;
  input {
    width: 80%;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    padding: 0.5em;
    margin-bottom: 8px;
  }
  button {
    font-size: 14px;
    line-height: 18px;
    background: #fe5000;
    width: 80%;
    border-radius: 4px;
    padding: 8px 0;
    color: #ffffff;
    font-weight: 800;
    margin-top: 8px;
    margin-bottom: 20px;
  }
`;

export const Button = styled.button`
  font-size: 16px;
  line-height: 18px;
  background: #fe5000;
  width: 100%;
  border-radius: 4px;
  padding: 10px 0;
  color: #ffffff;
  font-weight: 400;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.kakao {
    background: #fee500;
    color: #444;
  }
  &.naver {
    background: #1ec800;
  }
  span {
    margin-left: 0.8em;
  }
`;

export const Close = styled.button`
  font-size: 24px;
  position: absolute;
  right: 30px;
  top: 20px;
  color: #444;
`;
