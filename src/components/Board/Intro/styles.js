import styled from '@emotion/styled';

export const IntroView = styled.section`
  width: 100vw;
  height: 55vh;
  border-bottom: 1px solid #dbdbdb;
  box-sizing: border-box;
  overflow: hidden;
  background: url('./images/board.png') center -50px;
  background-size: cover;
  background-attachment: fixed;
  color: #ffffff;
  position: relative;
  &::before {
    content: '';
    opacity: 0.4;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: #000;
  }
`;

export const Text = styled.div`
  padding: 2.5em;
  opacity: 1;
  z-index: 10;
  position: absolute;
  letter-spacing: -0.5px;
  margin-top: 2em;
  h2 {
    font-size: 26px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0.5em;
  }
  p {
    font-size: 18px;
    color: #fff;
  }
`;
