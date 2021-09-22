// 리다이렉트될 화면

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { kakaoLoginRequestAction } from 'reducers/user';
// import { useHistory, withRouter } from 'react-router-dom';
// import { actionCreators as userActions } from '../redux/modules/user';
// import Spinner from './Spinner';

const OAuth2RedirectHandler = () => {
  // const history = useHistory();
  const { logInLoading, logInDone, logInError } = useSelector(state => ({
    logInLoading: state.userReducer.logInLoading,
    logInDone: state.userReducer.logInDone,
    logInError: state.userReducer.logInError,
  }));
  console.log(logInLoading, logInDone);
  // console.log('me in kakaologin', me);
  const dispatch = useDispatch();
  // 인가코드
  const code = new URL(window.location.href).searchParams.get('code');
  useEffect(() => dispatch(kakaoLoginRequestAction(code)), [dispatch]);

  return <></>;
};

export default OAuth2RedirectHandler;
