// 리다이렉트될 화면

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { kakaoLoginRequestAction } from 'reducers/user';
// import { useHistory, withRouter } from 'react-router-dom';
// import { actionCreators as userActions } from '../redux/modules/user';
// import Spinner from './Spinner';

const OAuth2RedirectHandler = () => {
  const dispatch = useDispatch();
  // 인가코드
  const params = new URL(document.location).searchParams;
  const code = params.get('code');
  const state = params.get('state');

  useEffect(() => dispatch(kakaoLoginRequestAction(code, state)), [dispatch]);

  return <></>;
};

export default OAuth2RedirectHandler;
