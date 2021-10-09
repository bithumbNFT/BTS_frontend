import styled from '@emotion/styled';

export const HomeMain = styled.main`
  width: 100%;
`;
export const ChartWrap = styled.section`
  border-bottom: 1px solid #262626;
  background: #000;
  display: grid;
  justify-content: center;
  height: 100vh;
  margin-top: -65px;
  h1 {
    margin: 30px 0;
    font-weight: bold;
    font-size: 32px;
    text-align: center;
  }
  @media (max-width: 1024px) {
    h1 {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 414px) {
    h1 {
      font-size: 1rem;
      margin: 30px 0 0;
    }
  }
`;

export const Chart = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  color: #fff;
  position: relative;
  height: 100%;
  align-items: center;
  flex-direction: column;
  h1 {
    color: #fff;
    font-family: 'SEBANG_Gothic_Bold' !important;
  }
`;

export const TextWrapper = styled.span`
  color: #fe5000;
  font-family: 'SEBANG_Gothic_Bold' !important;
`;
export const Button = styled.button`
  cursor: pointer;
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
  svg {
    height: 30px;
    width: 30px;
    min-width: 30px;
    color: #ffffff;
  }
  @media (max-width: 414px) {
    width: 40px;
    height: 40px;
    svg {
      height: 100%;
      color: #ffffff;
      font-size: 1rem;
    }
  }
`;

export const CoinDesc = styled.div`
  display: flex;
  margin-top: 20px;
  width: 1200px;
  h4 {
    color: #ffffff;
    font-size: 21px;
    font-weight: 400;
    text-align: center;
  }
  @media (max-width: 1024px) {
    width: 900px;
  }
  @media (max-width: 768px) {
    width: 683px;
  }
  @media (max-width: 414px) {
    width: 110%;
  }
  @media (max-width: 375px) {
    width: 100%;
  }
`;

export const InfoDesc = styled.div`
  display: flex;
  justify-content: end;
  text-align: right;
  width: 100%;
  margin-top: 1rem;
  h4 {
    color: #fff;
    font-size: 16px;
    line-height: 1.4;
    letter-spacing: -1.5px;
    margin-left: 1rem;
    strong {
      font-weight: 700;
    }
  }
  img {
    width: 20px;
  }
  @media (max-width: 1024px) {
    h4 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 768px) {
    h4 {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 414px) {
    h4 {
      font-size: 1rem;
    }
  }
`;

export const InfoLeft = styled.div`
  width: 100%;
`;

export const ButtonWrap = styled.div`
  padding: 10px;
  width: 100%;
`;
