import styled from '@emotion/styled';

export const Wrapper = styled.div`
  border-bottom: 1px solid #dbdbdb;
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-right: 1rem;
`;
export const ProfileImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid #dbdbdb;
`;

export const UserName = styled.span`
  font-weight: 500;
  margin-left: 1em;
  font-size: 1rem;
`;

export const UserEmail = styled.div`
  margin: 2rem;
  text-align: center;
  font-weight: 400;
  strong {
    font-weight: 500;
    margin-right: 5px;
  }
`;
