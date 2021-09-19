import styled from '@emotion/styled';

export const WriteBg = styled.div`
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

export const Form = styled.form`
  position: relative;
  background: #fff;
  border-radius: 20px;
  margin: 0 auto;
  max-width: 800px;
  overflow: hidden;
  width: 100%;
  text-align: center;
  padding: 28px;

  h1 {
    text-align: left;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    margin-top: 4rem;
    font-weight: 600;
  }

  input {
    width: 100%;
    border: 1px solid #dee2e6;
    font-size: 16px;
    margin-bottom: 24px;
    padding: 13px 12px;
    border-radius: 4px;
    background-color: #fff;
    line-height: 1.47;
    letter-spacing: -0.3px;
  }

  textarea {
    width: 100%;
    border: 1px solid #dee2e6;
    font-size: 16px;
    padding: 13px 12px;
    border-radius: 4px;
    background-color: #fff;
    line-height: 1.47;
    letter-spacing: -0.3px;
    height: 40vh;
    resize: none;
  }

  .buttons {
    display: inline-flex;
    justify-content: flex-end;
    width: 100%;
    button {
      min-width: 180px;
      padding: 0 16px;
      height: 48px;
      line-height: 1.47;
      font-size: 16px;
      letter-spacing: -0.3px;
      border-radius: 4px;
      margin-top: 30px;
      margin-bottom: 20px;
      color: #fff;
      background-color: #fe5000;
    }
  }
`;
