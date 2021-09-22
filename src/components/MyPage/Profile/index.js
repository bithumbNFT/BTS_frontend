import React, { useState, useRef } from 'react';
import { MdEdit } from 'react-icons/md';
import {
  Wrapper,
  UserInfo,
  ProfileImage,
  UserName,
  UserEmail,
  ImageInput,
  EditButton,
  SaveButton,
  CancelButton,
  ButtonContainer,
  EditImgIcon,
  InputBox,
} from './styles';

function Profile() {
  const [isEdit, setIsEdit] = useState(false);
  const [imgSrc, setImgSrc] = useState();
  const profileImgInput = useRef();

  const handleEditMode = () => {
    setIsEdit(true);
  };

  const onSubmitUserInfo = () => {
    console.log('hello');
    setIsEdit(false);
  };

  const handleCancel = () => {
    setIsEdit(false);
    setImgSrc(undefined);
  };

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
    <>
      {isEdit ? (
        <Wrapper>
          <UserInfo>
            <UserName>서유림</UserName>
            <ProfileImage onClick={onImgDivClick}>
              {imgSrc ? (
                <img src={imgSrc} alt="profileImg" />
              ) : (
                <img src="/images/defaultProfile.svg" alt="default" />
              )}
              <EditImgIcon><MdEdit /></EditImgIcon>
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
            <div>- 지갑 정보(수정가능)</div>
            <InputBox value="hereIsYourKLAYWalletInfo" />
          </UserEmail>
          <UserEmail>
            <div>- 현재 잔액</div> <span>15 KLAY</span>
          </UserEmail>
          <ButtonContainer>
            <SaveButton type="submit" onClick={onSubmitUserInfo}>
              저장
            </SaveButton>
            <CancelButton type="button" onClick={handleCancel}>
              취소
            </CancelButton>
          </ButtonContainer>
        </Wrapper>
      ) : (
        <Wrapper>
          <UserInfo>
            <UserName>서유림</UserName>
            <ProfileImage>
              {imgSrc ? (
                <img src={imgSrc} alt="profileImg" />
              ) : (
                <img src="images/defaultProfile.svg" alt="default" />
              )}
            </ProfileImage>
          </UserInfo>
          <UserEmail>
            <div>- 이메일</div> <span>abc@def.com</span>
          </UserEmail>
          <UserEmail>
            <div>- 지갑 정보(수정가능)</div>{' '}
            {/* <span>hereIsYourKLAYWalletInfo</span> */}
            <span>hereIsYourKLAYWalletInfo</span>
          </UserEmail>
          <UserEmail>
            <div>- 현재 잔액</div> <span>15 KLAY</span>
          </UserEmail>
          <EditButton type="button" onClick={handleEditMode}>
            프로필 편집
          </EditButton>
        </Wrapper>
      )}
    </>
  );
}

export default Profile;
