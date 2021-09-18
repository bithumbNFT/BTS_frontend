import styled from '@emotion/styled';

export const Wrapper = styled.div`
  border-bottom: 1px solid #dbdbdb;
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 2rem;
  margin-right: 1rem;
`;
export const ProfileImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  cursor: pointer;
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
    color: #9a9a9a;
    margin-bottom: 20px;
  }
  span {
    padding-left: 10px;
  }
`;

export const ImageInput = styled.input`
  display: none;
`;
