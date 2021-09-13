import styled from '@emotion/styled';

export const LoginBg = styled.div`
  background: rgba(0, 0, 0, 0.65);
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginPopUp = styled.div`
  position: relative;
  background: #fff;
  border-radius: 20px;
  margin: 0 auto;
  max-width: 400px;
  overflow: hidden;
  width: 100%;
  text-align: center;
  padding: 10px 0 38px;

  .logo {
    font-weight: 700;
    font-size: 32px;
    color: #fe5000;
    text-align: center;
    margin: 32px 0 18px;
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

export const Form = styled.form`
  display: grid;
  place-items: center;
  input {
    width: 80%;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    padding: 0.5em;
    margin-bottom: 8px;
  }
  button {
    font-size: 14px;
    line-height: 18px;
    background: #fe5000;
    width: 80%;
    border-radius: 4px;
    padding: 8px 0;
    color: #ffffff;
    font-weight: 800;
    margin-top: 8px;
    margin-bottom: 20px;
  }
`;

export const Button = styled.button`
  font-size: 14px;
  line-height: 18px;
  background: #fe5000;
  width: 80%;
  border-radius: 4px;
  padding: 8px 0;
  color: #ffffff;
  font-weight: 800;
  margin-top: 8px;
`;

export const Close = styled.button`
  font-size: 24px;
  position: absolute;
  right: 30px;
  top: 20px;
  color: #444;
`;
