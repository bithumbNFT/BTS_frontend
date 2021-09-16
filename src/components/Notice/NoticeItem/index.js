import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  padding: 20px 0;
  min-width: 850px;
  border-bottom: 1px solid #dee2e6;
  width: 100%;
  transition: all 0.3s;
  &:nth-of-type(1) {
    border-top: 1px solid #dee2e6;
    margin-top: 1.4em;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
`;
const IconContainer = styled.div`
  width: 80px;
  height: 80px;

  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.3rem;
  font-weight: bold;
`;
const Description = styled.p`
  font-weight: bold;
  padding-bottom: 15px;
  font-size: 1.2rem;
  line-height: 1.2;
`;
const Date = styled.p`
  color: #8a8a8a;
  font-size: 14px;
`;
function NoticeItem() {
  return (
    <Container>
      <ContentWrapper>
        <IconContainer>🔔</IconContainer>
        <Content>
          <Description>
            Lorem ipsum dolor sit amet, ad sed simul adipiscing, sed et iudico
            lobortis consequuntur, ne mel saepe veritus. An usu graeci option
            forensibus. Velit euripidis eu ius, pri at quem quaeque eloquentiam.
            Te ius regione fierent evertitur, causae persequeris eum no. Usu
            habeo paulo ad.
          </Description>
          <Date>2021년 9월 13일</Date>
        </Content>
      </ContentWrapper>
    </Container>
  );
}

export default NoticeItem;
