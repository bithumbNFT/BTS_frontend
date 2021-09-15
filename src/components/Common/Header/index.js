import React, { useState, useCallback } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import LoginModal from 'components/LoginModal';
import { Gnb, Menu, User, Title } from './styles';

function Header() {
  const [isShowing, setIsShowing] = useState(false);

  const toggleModal = useCallback(() => {
    setIsShowing(!isShowing);
  }, []);

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
            <p>로그인</p>
          </li>
        </User>
      </div>

      {isShowing && <LoginModal onClose={toggleModal} />}
    </Gnb>
  );
}

export default Header;
