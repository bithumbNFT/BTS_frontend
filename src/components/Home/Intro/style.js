import styled from '@emotion/styled';

export const HomeMain = styled.main`
  width: 100%;
`;
export const ChartWrap = styled.section`
  font-size: 40px;
  text-align: center;
  height: 100vh;
  border-bottom: 1px solid #262626;
  background: #000;
  display: flex;
  justify-content: center;
  font-weight: bold;
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
  bottom: 8%;
  left: 50%;
  svg {
    height: 30px;
    width: 30px;
    min-width: 30px;
    color: #ffffff;
  }
`;

export const CoinDesc = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: 1.5fr 0.5fr;
  gap: 20px;
  font-size: 28px;
  font-weight: 400;
`;

export const InfoRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 200px;
    margin-bottom: 10px;
  }
`;

export const InfoLeft = styled.div``;
