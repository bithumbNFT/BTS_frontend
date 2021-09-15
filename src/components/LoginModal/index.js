import React from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { LoginBg, LoginPopUp, Button, Close } from './styles';

function LoginModal() {
  return (
    <LoginBg>
      <LoginPopUp>
        <h1 className="logo">BTS</h1>
        <Close>
          <VscChromeClose />
        </Close>

        <Button type="submit">카카오톡으로 로그인</Button>
        <Button type="submit">회원가입</Button>
      </LoginPopUp>
    </LoginBg>
  );
}

export default LoginModal;
