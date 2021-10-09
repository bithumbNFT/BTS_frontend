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
  @media (max-width: 768px) {
    padding: 10%;
  }
  @media (max-width: 414px) {
    font-size: 1.4rem;
    line-height: 1.7;
    padding: 3rem;
  }
`;

export const CardWrap = styled.div`
  width: 1000px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 950px;
  }
  @media (max-width: 768px) {
    width: 700px;
  }
  @media (max-width: 414px) {
    width: 100%;
  }
`;

export const CardListBox = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  margin: 0 auto;
  place-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 414px) {
    grid-template-columns: 1fr;
  }
`;

export const BottomMailn = styled.section`
  height: 100%;
  position: relative;
  padding-bottom: 200px;
  @media (max-width: 414px) {
    padding-bottom: 80px;
  }
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
