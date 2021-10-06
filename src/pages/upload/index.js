import React from 'react';
import Header from 'components/Common/Header';
import UploadForm from 'components/ImgUpload/Form';
import { Title, Container } from './styles';

function Upload() {
  return (
    <>
      <Header />
      <Container>
        <Title>작품 등록하기</Title>
        <UploadForm />
      </Container>
    </>
  );
}

export default Upload;
