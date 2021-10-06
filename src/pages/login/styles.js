import styled from '@emotion/styled';

export const LoginWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 4.5em 2.5em;
  max-width: 1024px;
  overflow: hidden;
  box-sizing: border-box;
`;
// export const LoginBg = styled.div`
//   position: fixed;
//   left: 0;
//   top: 0;
//   width: 100vw;
//   height: 100vh;
//   z-index: 100;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
export const LoginBg = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  place-items: center;
`;

export const LoginLeft = styled.div`
  h1 {
    font-size: 32px;
    font-weight: 500;
    padding-bottom: 20px;
  }
  span {
    font-size: 16px;
    line-height: 1.43;
    color: #4e4e4e;
  }
`;

export const LoginPopUp = styled.div`
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  position: relative;
  background: #fff;
  max-width: 450px;
  overflow: hidden;
  width: 100%;
  text-align: center;
  padding: 30px 25px 38px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .logo {
    font-weight: 500;
    font-size: 32px;
    color: #444;
    text-align: center;
    margin: 68px 0 0;
  }
  .sub-title {
    padding: 10px 0 40px;
  }
  .login-notice {
    font-size: 11px;
    color: #4a4a4a;
    line-height: 1.2;
    padding-top: 30px;
  }
  .or {
    margin: 10px 40px 18px;
    font-size: 13px;
    font-weight: 600;
    line-height: 15px;
    color: #8e8e8e;
    position: relative;
    margin: 18px 18px;
    &::before {
      position: absolute;
      width: 36%;
      height: 1px;
      margin: 0 auto;
      content: '';
      display: inline-block;
      background-color: #dbdbdb;
      top: 8px;
      left: 17px;
    }
    &::after {
      position: absolute;
      width: 36%;
      height: 1px;
      margin: 0 auto;
      content: '';
      display: inline-block;
      background-color: #dbdbdb;
      top: 8px;
      right: 17px;
    }
  }
`;

export const Button = styled.button`
  font-size: 16px;
  line-height: 18px;
  background: #fe5000;
  width: 100%;
  border-radius: 4px;
  padding: 10px 0;
  color: #ffffff;
  font-weight: 400;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.kakao {
    background: #fee500;
    color: #444;
  }
  &.naver {
    background: #1ec800;
  }
  span {
    margin-left: 0.8em;
  }
`;
