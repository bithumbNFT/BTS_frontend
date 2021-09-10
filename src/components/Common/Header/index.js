import React from 'react';
import styled from '@emotion/styled';

function Header() {
  return (
    <nav>
      <Title>BTS</Title>
    </nav>
  );
}

export default Header;

const Title = styled.button`
  color: hotpink;
`;
