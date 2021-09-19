// import UploadImageModal from 'components/UploadImage';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';

const ButtonContainer = styled.button`
  background-color: #fe5000;
  color: #ffffff;
  padding: 0.5rem 0.6rem;
  border-radius: 5px;
  font-size: 16px;
`;

function Button() {
  const history = useHistory();
  // const Upload = lazy(() => import('pages/upload'));
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const openUploadPage = () => {
    history.push('/upload');
  };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };
  return (
    <>
      <ButtonContainer onClick={openUploadPage} type="button">
        작품 등록하기
      </ButtonContainer>
      {/* <UploadImageModal isOpen={isModalOpen} close={closeModal} /> */}
    </>
  );
}

export default Button;
