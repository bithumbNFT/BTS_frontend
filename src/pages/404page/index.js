import React from 'react';
import {
  NotFoundDescription,
  NotFoundPageWrapper,
  NotFoundText,
  GoToMainButton,
  NotFoundName,
} from './styles';

function notFoundPage() {
  return (
    <NotFoundPageWrapper>
      <NotFoundName>BTS</NotFoundName>
      <NotFoundText>⚠️ 404 ⚠️</NotFoundText>
      <NotFoundDescription>
        찾을 수 없는 페이지입니다. <br />
        다른 콘텐츠를 보러 가시겠어요?
      </NotFoundDescription>
      <GoToMainButton to="/">메인으로</GoToMainButton>
    </NotFoundPageWrapper>
  );
}

export default notFoundPage;
