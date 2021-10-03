import React from 'react';
import {
  Container,
  ContentWrapper,
  IconContainer,
  Content,
  Description,
  Date,
} from './styles';

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
