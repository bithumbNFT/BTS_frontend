import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import LoginModal from 'components/LoginModal';
import { KAKAO_AUTH_URL, NAVER_AUTH_URL } from 'utils/OAuth';
import { Gnb, Menu, User, Title } from './styles';

function Header() {
  // [TODO] 로그인 상태에 맞게 header 변경하기 ('로그인'/'로그아웃')
  const [isShowing, setIsShowing] = useState(false);

  const openModal = () => {
    setIsShowing(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsShowing(false);
    document.body.style.overflow = 'unset';
  };

  const onKakaoLoginClick = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  const onNaverLoginClick = () => {
    window.location.href = NAVER_AUTH_URL;
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

          <li className="user">
            <button type="button" onClick={openModal}>
              로그인
            </button>
          </li>
        </User>
      </div>

      <LoginModal
        onClose={closeModal}
        open={isShowing}
        onKakaoLogin={onKakaoLoginClick}
        onNaverLogin={onNaverLoginClick}
      />
    </Gnb>
  );
}

export default Header;
