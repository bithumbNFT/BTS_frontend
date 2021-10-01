import React from 'react';
import styled from '@emotion/styled';

function SmallFooter() {
  return (
    <SmallFooterBox>
      &copy; 2021, Built with 빗썸테크 아카데미 BTS팀
    </SmallFooterBox>
  );
}

export default SmallFooter;

export const SmallFooterBox = styled.h5`
  letter-spacing: -0.6px;
  padding: 1rem;
  font-size: 0.8rem;
  text-align: right;
  color: #fe5000;
  font-weight: bold;
`;
