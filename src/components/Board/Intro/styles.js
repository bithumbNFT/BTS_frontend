import styled from '@emotion/styled';

export const IntroView = styled.section`
  width: 100vw;
  height: 66vh;
  border-bottom: 1px solid #dbdbdb;
  box-sizing: border-box;
  overflow: hidden;
  background: url('./images/board.png') center 26px;
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
    font-size: 40px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0.5em;
    font-family: 'SEBANG_Gothic_Bold' !important;
  }
  p {
    font-size: 24px;
    color: #fff;
    font-family: 'SEBANG_Gothic_Bold' !important;
    letter-spacing: 1.2px;
  }
  @media (max-width: 414px) {
    h2 {
      font-size: 1.6rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
`;
