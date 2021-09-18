import React, { useState, useRef } from 'react';
import { Wrapper, UserInfo, ProfileImage, UserName, UserEmail, ImageInput } from './styles';

function Profile() {
  const [imgSrc, setImgSrc] = useState();
  const profileImgInput = useRef();
  const onChangeImg = (evt) => {
    if (evt.target.files.length) {
      const imgTarget = evt.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(imgTarget);
      fileReader.onload = (e) => {
        setImgSrc(e.target.result);
      };
    }
  };

  const onImgDivClick = (event) => {
    event.preventDefault();
    profileImgInput.current.click();
  };
  return (
    <Wrapper>
      <UserInfo>
        <UserName>서유림</UserName>
        <ProfileImage onClick={onImgDivClick}>
          {imgSrc ? (
            <img src={imgSrc} alt="profileImg" />
          ) : (
            <img src="images/defaultProfile.svg" alt="default" />
          )}
        </ProfileImage>
        <ImageInput
          ref={profileImgInput}
          type="file"
          id="uploadImg"
          accept="image/*"
          name="file"
          onChange={onChangeImg}
        />
      </UserInfo>
      <UserEmail>
        <div>- 이메일</div> <span>abc@def.com</span>
      </UserEmail>
      <UserEmail>
        <div>- 지갑 정보(수정가능)</div> <span>hereIsYourKLAYWalletInfo</span>
      </UserEmail>
      <UserEmail>
        <div>- 현재 잔액</div> <span>15 KLAY</span>
      </UserEmail>
    </Wrapper>
  );
}

export default Profile;
