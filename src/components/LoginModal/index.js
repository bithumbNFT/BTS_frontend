import React, { useEffect } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { KAKAO_AUTH_URL, NAVER_AUTH_URL } from 'utils/OAuth';
import { LoginBg, LoginPopUp, Button, Close } from './styles';

function LoginModal(props) {
  const { open, onClose } = props;
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
      {open ? (
        <LoginBg>
          <LoginPopUp>
            <h1 className="logo">BTS</h1>

            <Close button="button" onClick={onClose}>
              <VscChromeClose />
            </Close>

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
              onClick={(e) => handleLoginClick('naver', e)}
            >
              <img src="/images/naver.svg" alt="네이버 로그인" />
              <span> 네이버로 로그인</span>
            </Button>
          </LoginPopUp>
        </LoginBg>
      ) : null}
    </>
  );
}

export default LoginModal;
