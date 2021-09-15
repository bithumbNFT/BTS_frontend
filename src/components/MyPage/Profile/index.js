import React from 'react';
import { Wrapper, UserInfo, ProfileImage, UserName, UserEmail } from './styles';

function Profile() {
  return (
    <Wrapper>
      <UserInfo>
        <ProfileImage />
        <UserName>서유림</UserName>
      </UserInfo>
      <UserEmail>
        <strong>이메일</strong> abc@def.com
      </UserEmail>
      <UserEmail>
        <strong>지갑 정보</strong> abc@def.com
      </UserEmail>
    </Wrapper>
  );
}

export default Profile;
