import React, { useState, useRef, useEffect } from 'react';
import {
  MdEdit,
  MdContentCopy,
  MdCheck,
} from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { createWalletAction, checkBalanceAction } from 'reducers/user';
import { useDetectOutsideClick } from 'hooks/useDetectOutsideClick';
import { IoMdArrowDropdown } from 'react-icons/io';

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
  ImgWithBtn,
  CopyInputBtn,
  CopySuccess,
} from './styles';

function Profile() {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const [isEdit, setIsEdit] = useState(false);
  const [imgSrc, setImgSrc] = useState();
  // const [coinWallet, setCoinWallet] = useState(userInfo.coinWallet);
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onWalletInfoClick = () => setIsActive(!isActive);

  const profileImgInput = useRef();
  const dispatch = useDispatch();

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
  // ------- 지갑 정보 copy
  const [success, setSuccess] = useState(false);
  const textInput = useRef();

  const copy = () => {
    const el = textInput.current;
    el.select();
    document.execCommand('copy');
    setSuccess(true);

    setTimeout(() => setSuccess(false), 2000);
  };

  // ---------

  const onChangeImg = evt => {
    if (evt.target.files.length) {
      const imgTarget = evt.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(imgTarget);
      fileReader.onload = e => {
        setImgSrc(e.target.result);
      };
    }
  };

  const onImgDivClick = event => {
    event.preventDefault();
    profileImgInput.current.click();
  };

  const onCreateWallet = email => {
    dispatch(createWalletAction(email));
  };

  const getKlayBalance = () => {
    if (userInfo.coinWallet !== '') {
      console.log('1');
      dispatch(checkBalanceAction(userInfo.coinWallet));
    } else if (localStorage.getItem('coinWallet')) {
      console.log('2');
      dispatch(checkBalanceAction(localStorage.getItem('coinWallet')));
    } else {
      return 0;
    }
  };

  const { checkBalanceLoading, balanceData } = useSelector(
    state => state.userReducer,
  );

  useEffect(() => getKlayBalance(), [dispatch]);

  return (
    <>
      <Wrapper>
        {isEdit ? (
          <ImgWithBtn>
            <UserInfo>
              <UserName>{userInfo.name}</UserName>
              <ProfileImage onClick={onImgDivClick}>
                {imgSrc ? (
                  <img src={imgSrc} alt="profileImg" />
                ) : (
                  <img src="/images/defaultProfile.svg" alt="default" />
                )}
                <EditImgIcon>
                  <MdEdit />
                </EditImgIcon>
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
            <ButtonContainer>
              <SaveButton type="submit" onClick={onSubmitUserInfo}>
                저장
              </SaveButton>
              <CancelButton type="button" onClick={handleCancel}>
                취소
              </CancelButton>
            </ButtonContainer>
          </ImgWithBtn>
        ) : (
          <ImgWithBtn>
            <UserInfo>
              <UserName>{userInfo.name}</UserName>
              <ProfileImage>
                {imgSrc ? (
                  <img src={imgSrc} alt="profileImg" />
                ) : (
                  <img src="images/defaultProfile.svg" alt="default" />
                )}
              </ProfileImage>
            </UserInfo>
            <EditButton type="button" onClick={handleEditMode}>
              프로필 편집
            </EditButton>
          </ImgWithBtn>
        )}
        <UserEmail>
          <div>- 이메일</div> <span>{userInfo.email}</span>
        </UserEmail>
        <UserEmail>
          <div>- 지갑 정보</div>
          {userInfo.coinWallet === '' && !localStorage.getItem('coinWallet') ? (
            <>
              <span className="warn-msg">등록된 지갑이 없습니다.</span>
              <SaveButton
                type="button"
                onClick={() => onCreateWallet(userInfo.email)}
              >
                🗳지갑 생성하기
              </SaveButton>
            </>
          ) : (
            <>
              <CancelButton type="button" onClick={onWalletInfoClick}>
                💰지갑 정보 확인 <IoMdArrowDropdown />
              </CancelButton>
              <nav
                ref={dropdownRef}
                className={`menu ${isActive ? 'active' : 'inactive'}`}
              >
                <div>👤{userInfo.name}님의 지갑정보</div>
                <CopyInputBtn>
                  <input
                    type="text"
                    value={
                      userInfo.coinWallet || localStorage.getItem('coinWallet')
                    }
                    ref={textInput}
                    readOnly
                  />
                  {success ? (
                    <button type="button">
                      <MdCheck />
                    </button>
                  ) : (
                    <button onClick={copy} type="button">
                      <MdContentCopy />
                    </button>
                  )}
                </CopyInputBtn>
                {success ? (
                  <CopySuccess>
                    <span>Copied!</span>
                  </CopySuccess>
                ) : null}
              </nav>
            </>
          )}
        </UserEmail>
        <UserEmail>
          <div>- 현재 잔액</div>{' '}
          {checkBalanceLoading ? (
            <span>로딩중</span>
          ) : (
            <span>{balanceData} KLAY</span>
          )}
        </UserEmail>
      </Wrapper>
    </>
  );
}

export default Profile;
