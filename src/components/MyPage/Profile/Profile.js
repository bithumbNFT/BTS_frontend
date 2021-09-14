// // eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  border-bottom: 1px solid;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 2rem;
  margin-right: 1rem;
`;
const ProfileImage = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 1px solid;
`;

const UserName = styled.span`
  font-weight: bold;
`;

const UserEmail = styled.div`
  margin: 2rem 3rem;
  span {
    font-weight: bold;
  }
`;
function Profile() {
  return (
    <Wrapper>
      <UserInfo>
        <ProfileImage />
        <UserName>서유림</UserName>
      </UserInfo>
      <UserEmail>
        <span>이메일</span> : abc@def.com
      </UserEmail>
      <UserEmail>
        <span>지갑정보</span> : abc@def.com
      </UserEmail>
    </Wrapper>
  );
}

export default Profile;
