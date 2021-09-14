import React from 'react';
import styled from '@emotion/styled';
import { VscClose } from 'react-icons/vsc';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.50);
  z-index: 0;
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 80%;
  width: 20rem;
  height: 80%;
  padding: 16px;
  background: white;
  border-radius: 10px;
  text-align: center;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CloseIcon = styled(VscClose)`
  cursor: pointer;
`;

function UploadImageModal(props) {
  const { isOpen, close } = props;
  console.log(close);
  return (
    <>
      {isOpen ? (
        <Wrapper>
          <ModalContainer>
            <ModalHeader>
              <div>이미지 업로드 모달</div>
              <CloseIcon onClick={close} />
            </ModalHeader>
          </ModalContainer>
        </Wrapper>
      ) : null}
    </>
  );
}

export default UploadImageModal;
