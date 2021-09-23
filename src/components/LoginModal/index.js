import React, { useEffect } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { LoginBg, LoginPopUp, Button, Close } from './styles';

function LoginModal(props) {
  const { open, onClose, onKakaoLogin, onNaverLogin } = props;

  return (
    <>
      {open ? (
        <LoginBg>
          <LoginPopUp>
            <h1 className="logo">BTS</h1>

            <Close button="button" onClick={onClose}>
              <VscChromeClose />
            </Close>

            <Button type="button" className="kakao" onClick={onKakaoLogin}>
              <img src="/images/kakao.svg" alt="네이버 로그인" />
              <span> 카카오톡으로 로그인</span>
            </Button>
            <Button type="button" className="naver" onClick={onNaverLogin}>
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
