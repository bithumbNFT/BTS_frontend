import styled from '@emotion/styled';

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem 0;
  @media (max-width: 414px) {
    margin: 0 1.5rem 1rem 1rem;
    font-size: 2rem;
    letter-spacing: -0.8px;
  }
`;

export const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 2rem;
  @media (max-width: 414px) {
    width: 100%;
  }
`;
