import React from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { LoginBg, LoginPopUp, Form, Button, Close } from './styles';

function LoginModal() {
  return (
    <LoginBg>
      <LoginPopUp>
        <h1 className="logo">BTS</h1>
        <Close>
          <VscChromeClose />
        </Close>
        <Form>
          <input type="email" placeholder="이메일을 입력해주세요." />
          <input type="password" placeholder="비밀번호를 입력해주세요" />

          <Button type="submit">로그인</Button>
        </Form>

        <div className="or">
          <p>또는</p>
        </div>

        <Button type="submit">카카오톡으로 로그인</Button>
        <Button type="submit">회원가입</Button>
      </LoginPopUp>
    </LoginBg>
  );
}

export default LoginModal;
