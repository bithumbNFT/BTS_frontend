import styled from '@emotion/styled';

export const Title = styled.h2`
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 1.2;
  text-align: center;
  letter-spacing: -1.5px;
  padding: 5%;
  strong {
    font-weight: 600;
  }
`;

export const CardWrap = styled.div`
  width: 1000px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 950px;
  }
`;

export const CardListBox = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  margin: 0 auto;
`;

export const BottomMailn = styled.section`
  height: 100%;
  position: relative;
  padding-bottom: 200px;
`;

export const EmptyWrap = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  padding-bottom: 5%;
  h3 {
    font-size: 1rem;
    color: #616568;
    margin-top: 1rem;
  }
`;
