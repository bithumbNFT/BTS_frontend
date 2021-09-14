import React from 'react';
import styled from '@emotion/styled';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Header() {
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
            <Link to="/board">로그인</Link>
          </li>

          <li className="user signup">
            <Link to="/signup">회원가입</Link>
          </li>
        </User>
      </div>
    </Gnb>
  );
}

export default Header;

const Gnb = styled.nav`
  position: sticky;
  z-index: 50;
  width: 100%;
  height: 65px;
  border-bottom: 1px solid transparent;
  background-color: #fff;
  left: 0;
  top: 0;
  right: 0;
  transition: background-color 0.2s ease;
  border-bottom-color: rgba(0, 27, 55, 0.1);
  .navWrap {
    max-width: 1000px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2em;
  }
`;

const Title = styled.button`
  font-weight: 700;
  font-size: 26px;
  color: #fe5000;
`;

const User = styled.ul`
  display: flex;
  align-items: center;
  li {
    color: #4a4a4a;
    line-height: 1.5;
    font-size: 16px;
    margin-left: 0.8em;
    &.user {
      border: 1px solid #dbdbdb;
      padding: 5px 8px;
      border-radius: 5px;
      &.signup {
        background: #fe5000;
        color: #fff;
        border: none;
      }
    }
  }
  .search {
    position: relative;
    width: 12rem;
    background: #f6f6f6;
    color: #5f5f5f;
    border-radius: 3px;
    span {
      position: absolute;
      font-size: 1.4em;
      right: 9px;
      top: 6px;
    }
  }
  input {
    padding: 0.5rem;
  }
  input::-ms-clear,
  input::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration {
    display: none;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  .board {
    padding-left: 2.5rem;
    color: #4a4a4a;
    line-height: 1.5;
    font-size: 16px;
  }
`;
