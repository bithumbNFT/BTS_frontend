// 리다이렉트 될 화면
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { naverLoginRequestAction } from 'reducers/user';

const OAuth2RedirectHandler = () => {
  const { logInLoading, logInDone, logInError } = useSelector(state => ({
    logInLoading: state.userReducer.logInLoading,
    logInDone: state.userReducer.logInDone,
    logInError: state.userReducer.logInError,
  }));
  const dispatch = useDispatch();
  // 인가코드
  const params = new URL(document.location).searchParams;
  const code = params.get('code');
  const state = params.get('state');

  useEffect(() => dispatch(naverLoginRequestAction(code, state)), [dispatch]);

  return <></>;
};

export default OAuth2RedirectHandler;
