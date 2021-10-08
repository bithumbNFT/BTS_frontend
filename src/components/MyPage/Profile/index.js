import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MdContentCopy, MdCheck } from 'react-icons/md';
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
  SaveButton,
  CancelButton,
  CopyInputBtn,
  CopySuccess,
} from './styles';

function Profile() {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const dispatch = useDispatch();

  // ------- 사용자 프로필 관련
  const [imgSrc, setImgSrc] = useState(userInfo.picture);
  const profileImgInput = useRef();

  // ------- 지갑 정보 관련
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const handleWalletInfoClick = () => setIsActive(!isActive);
  const handleCreateWallet = () => {
    dispatch(createWalletAction(userInfo.id));
  };
  // ------- ------- 지갑 정보 copy
  const [success, setSuccess] = useState(false);
  const textInput = useRef();

  const handleCopy = () => {
    const el = textInput.current;
    el.select();
    document.execCommand('copy');
    setSuccess(true);

    setTimeout(() => setSuccess(false), 2000);
  };

  // --------- 클레이튼 잔고 관련

  const getKlayBalance = () => {
    if (userInfo.coin_wallet) {
      dispatch(checkBalanceAction(userInfo.coin_wallet));
    } else {
      return 0;
    }
  };

  const { checkBalanceLoading, balanceData } = useSelector(
    state => state.userReducer,
  );

  useEffect(() => {
    getKlayBalance();
  }, []);

  return (
    <>
      <Wrapper>
        <UserInfo>
          <ProfileImage>
            <img src={imgSrc} alt="profileImg" />
          </ProfileImage>
          <UserName>{userInfo.name}</UserName>
        </UserInfo>

        <UserEmail>
          <p>- 이메일</p> <span>{userInfo.email}</span>
        </UserEmail>
        <UserEmail>
          <p>- 지갑 정보</p>
          {!userInfo.coin_wallet ? (
            <>
              <span className="warn-msg">등록된 지갑이 없습니다.</span>
              <SaveButton type="button" onClick={handleCreateWallet}>
                지갑 생성하기
              </SaveButton>
            </>
          ) : (
            <>
              <CancelButton type="button" onClick={handleWalletInfoClick}>
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
                    value={userInfo.coin_wallet}
                    ref={textInput}
                    readOnly
                  />
                  {success ? (
                    <button type="button">
                      <MdCheck style={{ fill: 'green' }} />
                    </button>
                  ) : (
                    <button onClick={handleCopy} type="button">
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
        {!userInfo.coin_wallet ? null : (
          <UserEmail>
            <div>- 현재 잔액</div>{' '}
            {checkBalanceLoading ? (
              <span>로딩중</span>
            ) : (
              <span>{balanceData} KLAY</span>
            )}
          </UserEmail>
        )}
      </Wrapper>
    </>
  );
}

export default Profile;
