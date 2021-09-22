// 리다이렉트될 화면

import React from 'react';
import { kakaoLogin } from 'utils/apis/loginApi';
// import { useDispatch } from 'react-redux';
// import { actionCreators as userActions } from '../redux/modules/user';
// import Spinner from './Spinner';

const OAuth2RedirectHandler = () => {
  //   const dispatch = useDispatch();

  // 인가코드
  const code = new URL(window.location.href).searchParams.get('code');
  console.log(code);
  React.useEffect(async () => {
    await kakaoLogin(code)
      // jwt 토큰과 user 정보를 받아온다. => login success로 넘겨줌
      .then(res => console.log(res))
      // login failure로 넘겨줌
      .catch(err => console.log('-------loginerror', err));
  }, []);

  return <div>{code}</div>;
};

export default OAuth2RedirectHandler;
