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

            <Button type="submit">카카오톡으로 로그인</Button>
            <Button type="submit">네이버로 로그인</Button>
          </LoginPopUp>
        </LoginBg>
      ) : null}
    </>
  );
}

export default LoginModal;
