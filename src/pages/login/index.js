import React from 'react';
import { KAKAO_AUTH_URL, NAVER_AUTH_URL } from 'utils/OAuth';
import Header from 'components/Common/Header';
import { LoginWrapper, LoginBg, LoginLeft, LoginPopUp, Button } from './styles';

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
            <h1>BTS 시작하기</h1>
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
