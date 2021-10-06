import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px 0;
  min-width: 850px;
  border-bottom: 1px solid #dee2e6;
  width: 100%;
  transition: all 0.3s;
  &:nth-of-type(1) {
    border-top: 1px solid #dee2e6;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
`;
export const IconContainer = styled.div`
  width: 80px;
  height: 80px;

  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.3rem;
  font-weight: bold;
`;
export const Description = styled.p`
  font-weight: bold;
  padding-bottom: 15px;
  font-size: 1.2rem;
  line-height: 1.2;
`;
export const Date = styled.p`
  color: #8a8a8a;
  font-size: 14px;
`;
