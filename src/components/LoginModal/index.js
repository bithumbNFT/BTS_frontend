import React from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { LoginBg, LoginPopUp, Button, Close } from './styles';

function LoginModal(props) {
  const { open, onClose } = props;

  return (
    <>
      {open ? (
        <LoginBg>
          <LoginPopUp>
            <h1 className="logo">BTS</h1>

            <Close button="button" onClick={onClose}>
              <VscChromeClose />
            </Close>

            <Button type="submit" className="kakao">
              <img src="/images/kakao.svg" alt="네이버 로그인" />
              <span> 카카오톡으로 로그인</span>
            </Button>
            <Button type="submit" className="naver">
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
