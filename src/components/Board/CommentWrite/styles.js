import styled from '@emotion/styled';

export const CommentWriteBox = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  justify-content: space-between;
  position: relative;
  margin: 2em auto;
  font-size: 16px;
  input {
    background: #fff;
    padding: 15px;
    width: 90%;
    height: 100%;
    border: 1px solid #e9ecef;
    display: flex;
    border-radius: 4px;
  }
  @media (max-width: 414px) {
    input {
      width: 80%;
    }
  }
`;

export const Button = styled.button`
  background: #fe5000;
  color: #fff;
  border: none;
  padding: 5px 8px;
  border-radius: 5px;
  font-size: 16px;
  width: 8%;

  @media (max-width: 414px) {
    width: 16%;
  }
`;
