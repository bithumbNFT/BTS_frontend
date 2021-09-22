import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NotFoundPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const NotFoundName = styled.div`
  font-size: 30px;
  text-align: center;
  line-height: 1.3;
  margin-bottom : 1rem;
  font-weight: 600;
  color: #fe5000;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const NotFoundText = styled.div`
  font-size: 25px;
  text-align: center;
  line-height: 1.5;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const NotFoundDescription = styled.div`
  font-size: 25px;
  text-align: center;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const GoToMainButton = styled(Link)`
  margin-top: 30px;
  font-size: 20px;
  text-decoration: underline;

  &:hover {
    text-decoration: underline;
  }
`;
