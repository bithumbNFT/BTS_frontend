import styled from '@emotion/styled';

export const Wrapper = styled.div`
  border-bottom: 1px solid #dbdbdb;
  width: 250px;
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  margin-left: 1rem;
`;
export const ProfileImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const UserName = styled.span`
  font-weight: 700;
  margin-left: 1em;
  font-size: 1.2rem;
`;

export const UserEmail = styled.div`
  margin: 2rem;
  font-weight: 400;
  div {
    font-weight: 700;
    margin-right: 5px;
    color: #9c9c9c;
    margin-bottom: 20px;
  }
  span {
    padding-left: 10px;
  }
`;

export const ImageInput = styled.input`
  display: none;
`;

export const EditButton = styled.button`
  border: 1px solid #d1d1d1;
  background-color: #f6f6f6;
  text-align: center;
  width: 90%;
  padding: 5px 0;
  border-radius: 5px;
  margin: 0 1rem 1rem 1rem;
`;

export const SaveButton = styled.button`
  border: 1px solid #fe5000;
  background-color: #fe5000;
  text-align: center;
  padding: 5px 0;
  border-radius: 5px;
  margin: 0 0.3rem 1rem 1rem;
  color: white;
  font-weight: 600;
  width: 90%;
`;

export const CancelButton = styled.button`
  border: 1px solid #d1d1d1;
  background-color: #f6f6f6;
  text-align: center;
  padding: 5px 0;
  border-radius: 5px;
  margin: 0 1rem 1rem 0.3rem;
  width: 90%;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const EditImgIcon = styled.div`
  padding: 5px;
  background-color: #ffffff;
  border: 1px solid #f6f6f6;
  text-align: center;
  position: absolute;
  top: 60%;
  left: 75%;
  border-radius: 50%;
  font-size: 1.2rem;
  color: #fe5000;
`;

export const InputBox = styled.input`
  width: 100%;
  border: 1px solid #dee2e6;
  font-size: 14px;
  padding: 5px;
  border-radius: 4px;
  background-color: #fff;
  line-height: 1.47;
`;
