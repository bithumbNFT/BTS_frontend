import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';

function Button() {
  const history = useHistory();

  const openUploadPage = () => {
    const coinWallet = JSON.parse(localStorage.getItem('userInfo')).coin_wallet;
    if (coinWallet) {
      history.push('/upload');
    } else {
      window.confirm('지갑을 생성해주세요');
    }
  };

  return (
    <>
      <ButtonContainer onClick={openUploadPage} type="button">
        작품 등록하기
      </ButtonContainer>
    </>
  );
}

export default Button;

const ButtonContainer = styled.button`
  background-color: #fe5000;
  color: #ffffff;
  padding: 0.5rem 0.6rem;
  border-radius: 5px;
  font-size: 16px;
`;
