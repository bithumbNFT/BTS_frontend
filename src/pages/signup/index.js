import React from 'react';
import { SignUpBg, SignUpForm, Button, Wrap, Form } from './styles';

function signup() {
  return (
    <SignUpBg>
      <Wrap>
        <SignUpForm>
          <h1 className="logo">BTS</h1>
          <p className="desc">
            NFT 이미지와 커뮤니티를 이용하시려면 가입하세요.
          </p>

          <Button type="button">이메일로 로그인</Button>
          <Button type="button">카카오톡으로 로그인</Button>

          <div className="or">
            <p>또는</p>
          </div>

          <Form>
            <input type="email" placeholder="이메일을 입력해주세요." />
            <input type="text" placeholder="닉네임을 입력해주세요." />
            <input type="password" placeholder="비밀번호를 입력해주세요" />
            <button type="submit">가입하기</button>
          </Form>
        </SignUpForm>
      </Wrap>
    </SignUpBg>
  );
}

export default signup;
