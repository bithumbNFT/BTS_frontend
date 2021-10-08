import React, { useCallback } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsBell } from 'react-icons/bs';
import { logoutRequestAction } from 'reducers/user';
import { Gnb, Menu, User, Title, UserProfile, NotiIcon } from './styles';

function Header() {
  // [TODO] logInLoading, logInError 일 때 상태 처리하기
  const { logInLoading, logInDone, logInError } = useSelector(state => ({
    logInLoading: state.userReducer.logInLoading,
    logInDone: state.userReducer.logInDone,
    logInError: state.userReducer.logInError,
    me: state.userReducer.me,
  }));
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogoutClick = useCallback(() => {
    dispatch(logoutRequestAction(localStorage.getItem('social')));
  });

  const GoToPage = name => {
    history.push(name);
  };

  return (
    <Gnb>
      <div className="navWrap">
        <Menu>
          <Title type="button" onClick={() => GoToPage('/')}>
            BTS
          </Title>

          <Link to="/board" className="board">
            커뮤니티
          </Link>
        </Menu>

        <User>
          <li className="search">
            <input type="search" />
            <span>
              <i>
                <AiOutlineSearch />
              </i>
            </span>
          </li>

          {userInfo ? (
            <>
              <NotiIcon onClick={() => GoToPage('/notice')}>
                <BsBell />
              </NotiIcon>
              <UserProfile onClick={() => GoToPage('/mypage')}>
                <img src={userInfo.picture} alt="profileImage" />
              </UserProfile>
              <li className="user">
                <button type="button" onClick={handleLogoutClick}>
                  로그아웃
                </button>
              </li>
            </>
          ) : (
            <li className="user">
              <button type="button" onClick={() => GoToPage('/login')}>
                로그인
              </button>
            </li>
          )}
        </User>
      </div>
    </Gnb>
  );
}

export default Header;
