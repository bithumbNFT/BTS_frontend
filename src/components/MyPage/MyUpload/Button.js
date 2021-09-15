import UploadImageModal from 'components/UploadImage';
import React, { useState } from 'react';
import styled from '@emotion/styled';

const ButtonContainer = styled.button`
  background-color: #fe5000;
  color: #ffffff;
  padding: 0.5rem 0.6rem;
  border-radius: 5px;
  font-size: 16px;
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
      <ButtonContainer onClick={openModal} type="button">
        작품 등록하기
      </ButtonContainer>
      <UploadImageModal isOpen={isModalOpen} close={closeModal} />
    </>
  );
}

export default Button;
