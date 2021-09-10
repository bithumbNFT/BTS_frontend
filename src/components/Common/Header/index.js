import React from 'react';
import styled from '@emotion/styled';
import { IoIosSearch } from 'react-icons/io';

function Header() {
  return (
    <Gnb>
      <div className="navWrap">
        <Title>BTS</Title>
        <Search>
          <IoIosSearch />
        </Search>
      </div>
    </Gnb>
  );
}

export default Header;

const Gnb = styled.nav`
  position: fixed;
  z-index: 50;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid transparent;
  background-color: transparent;
  left: 0;
  top: 0;
  transition: background-color 0.2s ease;
  border-bottom-color: rgba(0, 27, 55, 0.1);
  .navWrap {
    max-width: 1000px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Title = styled.button`
  font-weight: 700;
  font-size: 26px;
  color: #fe5000;
`;

const Search = styled.button`
  font-weight: 700;
  font-size: 30px;
  color: #fff;
`;
