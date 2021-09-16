import React from 'react';
import { Wrapper, ModalContainer, ModalHeader, CloseIcon } from './styles';

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
