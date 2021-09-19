import styled from '@emotion/styled';

export const Wrapper = styled.form`
  display: grid;
  grid-template-columns: 500px 500px;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  -webkit-justify-content: space-evenly;
  justify-content: space-evenly;
  width: 100%;
  max-width: 950px;
  margin: 65px auto;
  padding-bottom: 10rem;
`;

export const ImgSection = styled.div`
  width: 500px;
  height: 500px;
  border: 3px dashed #dee2e6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 500;
  color: #8a8a8a;
  cursor: pointer;

  img {
    width: 100%;
    height; auto;
  }
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 60px;

  label {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 0.5em;
    color: #4a4a4a;
  }

  label:nth-of-type(4) {
    margin-top: 24px;
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

  input:nth-of-type(2) {
    background-image: url(./images/klaytn.png);
    background-position: right 8px center;
    background-repeat: no-repeat;
    background-size: 20px;
    padding-right: 35px;
    text-align: right;
    margin-bottom: 5px;
  }

  input:nth-of-type(4) {
    border: 1px solid #fe5000;
    background-color: #fe5000;
    color: white;
    font-weight: bold;
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
    margin-bottom: 24px;
  }
  span {
    display: inline-block;
    color: #8a939b;
    font-weight: bold;
    text-align: right;
    padding-right: 20px;
  }
`;

export const ImageInput = styled.input`
  display: none;
`;
