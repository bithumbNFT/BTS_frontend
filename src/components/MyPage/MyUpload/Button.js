import UploadImageModal from 'components/UploadImage/UploadImageModal';
import React, { useState } from 'react';
import styled from '@emotion/styled';

const ButtonContainer = styled.button`
  background-color: #343F56;
  color: #ffffff;
  padding: 0.4rem 0.6rem;
  border-radius: 10px;

  :hover {
    background-color: #566991;
  }
`;

function Button() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <ButtonContainer onClick={openModal} type="button">작품 등록하기</ButtonContainer>
      <UploadImageModal isOpen={isModalOpen} close={closeModal} />
    </>
  );
}

export default Button;
