import styled from '@emotion/styled';

export const HomeMain = styled.main`
  width: 100%;
`;
export const ChartWrap = styled.section`
  border-bottom: 1px solid #262626;
  background: #000;
  display: flex;
  justify-content: center;
  height: 100vh;
  margin-top: -65px;
  h1 {
    margin-top: 30px;
    font-weight: bold;
    font-size: 40px;
    text-align: center;
  }
`;
export const Chart = styled.article`
  max-width: 1000px;
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
  svg {
    height: 30px;
    width: 30px;
    min-width: 30px;
    color: #ffffff;
  }
`;

export const CoinDesc = styled.div`
  display: flex;
  margin-top: 20px;
  width: 1000px;
  justify-content: space-around;
  h4 {
    color: #ffffff;
    font-size: 21px;
    font-weight: 400;
    text-align: center;
  }
`;

export const InfoRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  h4 {
    color: #fff;
    font-size: 24px;
    line-height: 1.4;
    letter-spacing: -1.5px;
    strong {
      font-weight: 700;
    }
  }
  img {
    width: 100px;
    margin-bottom: 10px;
  }
`;

export const InfoLeft = styled.div`
  width: 70%;
`;

export const ButtonWrap = styled.div`
  padding: 10px;
  width: 100%;
`;
