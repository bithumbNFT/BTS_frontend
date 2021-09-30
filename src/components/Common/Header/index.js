import React, { useState, useCallback } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoginModal from 'components/LoginModal';
import { BsBell } from 'react-icons/bs';
// import { VscBell } from 'react-icons/vsc';
import { KAKAO_AUTH_URL, NAVER_AUTH_URL } from 'utils/OAuth';
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
  const [isShowing, setIsShowing] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const openModal = () => {
    setIsShowing(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsShowing(false);
    document.body.style.overflow = 'unset';
  };

  const onLoginClick = social => {
    if (social === 'kakao') {
      window.location.href = KAKAO_AUTH_URL;
    } else if (social === 'naver') {
      window.location.href = NAVER_AUTH_URL;
    }
  };

  const LogoutClick = useCallback(() => dispatch(logoutRequestAction()));

  const GoToPage = name => {
    console.log(name);
    history.push(name);
  };
  return (
    <Gnb>
      <div className="navWrap">
        <Menu>
          <Title>
            <Link to="/">BTS</Link>
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
                <button type="button" onClick={LogoutClick}>
                  로그아웃
                </button>
              </li>
            </>
          ) : (
            <li className="user">
              <button type="button" onClick={openModal}>
                로그인
              </button>
            </li>
          )}
        </User>
      </div>

      <LoginModal
        onClose={closeModal}
        open={isShowing}
        onKakaoLogin={() => onLoginClick('kakao')}
        onNaverLogin={() => onLoginClick('naver')}
      />
    </Gnb>
  );
}

export default Header;
