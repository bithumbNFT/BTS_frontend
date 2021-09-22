// 리다이렉트될 화면

import React from 'react';
import { naverLogin } from 'utils/apis/loginApi';
// import { useDispatch } from 'react-redux';
// import { actionCreators as userActions } from '../redux/modules/user';
// import Spinner from './Spinner';

const OAuth2RedirectHandler = () => {
  //   const dispatch = useDispatch();
  // 예시  : ${Redirec_uri}?code=EElLSpKdX6qQpQYv9X&state=kYWAR07zNS0HAb4g
  // 인가코드
  //   const { href } = window.location.href;
  const params = new URL(document.location).searchParams;
  const code = params.get('code');
  const state = params.get('state');
  //   const code = new URL(window.location.href).searchParams.get('code');
  //   console.log(code);
  //   const state =
  React.useEffect(async () => {
    await naverLogin(code, state)
      .then(res => console.log(res))
      .catch(err => console.log('-------loginerror', err));
  }, []);
  // kakaoLogin(code).then((res) =>
  // console.log(res)).catch((err) => console.log('-------loginerror', err));

  return <div>{code}</div>;
};

export default OAuth2RedirectHandler;

// http://localhost:3000/login/oauth2/code/kakao?code=dJYJfDKXY0x4Y6ZIuK_xkY1t_0sVu3dhXW_PiGmWS0q8FlPOURyQM1xD6JIbfxED5_QC8go9cxcAAAF77lFnrw
