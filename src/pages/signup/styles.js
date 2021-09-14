import styled from '@emotion/styled';

export const SignUpBg = styled.main`
  background-color: #fafafa;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const SignUpForm = styled.section`
  max-width: 350px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #f4f4f4;
  text-align: center;
  padding: 10px 0;
  .logo {
    font-weight: 700;
    font-size: 26px;
    color: #fe5000;
    margin: 22px auto 12px;
  }

  .desc {
    color: rgba(var(--f52, 142, 142, 142), 1);
    font-size: 17px;
    font-weight: 600;
    line-height: 20px;
    margin: 0 40px 10px;
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

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
