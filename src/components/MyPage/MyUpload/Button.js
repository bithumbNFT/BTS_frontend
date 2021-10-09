import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';

function Button() {
  const history = useHistory();
  const openUploadPage = () => {
    history.push('/upload');
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
  font-weight: 500;
`;
