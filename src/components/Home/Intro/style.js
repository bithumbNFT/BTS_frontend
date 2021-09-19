import styled from '@emotion/styled';

export const HomeMain = styled.main`
  width: 100%;
`;
export const ChartWrap = styled.section`
  font-size: 40px;
  text-align: center;
  height: 80vh;
  border-bottom: 1px solid #262626;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
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
