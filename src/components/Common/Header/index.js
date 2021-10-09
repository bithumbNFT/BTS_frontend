import React, { useCallback, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutRequestAction } from 'reducers/user';
import { Gnb, Menu, User, Title, UserProfile } from './styles';

function Header() {
  // [TODO] logInLoading, logInError 일 때 상태 처리하기
  const { logInLoading, logInDone, logInError } = useSelector(state => ({
    logInLoading: state.userReducer.logInLoading,
    logInDone: state.userReducer.logInDone,
    logInError: state.userReducer.logInError,
    me: state.userReducer.me,
  }));
  // 검색
  const [searchValue, setSearchValue] = useState('');

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogoutClick = useCallback(() => {
    dispatch(logoutRequestAction(localStorage.getItem('social')));
  });

  const onChangeSearch = useCallback(e => {
    setSearchValue(e.target.value);
  }, []);

  const GoToPage = name => {
    history.push(name);
  };

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      // 로컬 스토리지에 해당 searchValue를 저장해야 한다
      history.push(`/search/${searchValue}`);
      setSearchValue('');
    },
    [searchValue, history],
  );
  return (
    <Gnb>
      <div className="navWrap">
        <Menu>
          <Title type="button" onClick={() => GoToPage('/')}>
            BTS
          </Title>

          <Link to="/board" className="board">
            커뮤니티
          </Link>
        </Menu>

        <User>
          <li className="search">
            <form onSubmit={onSubmit}>
              <input
                type="search"
                value={searchValue}
                onChange={onChangeSearch}
                placeholder="NFT 경매품을 입력하세요."
              />
            </form>

            <span>
              <i>
                <AiOutlineSearch />
              </i>
            </span>
          </li>

          {userInfo ? (
            <>
              <UserProfile onClick={() => GoToPage('/mypage')}>
                <img src={userInfo.picture} alt="profileImage" />
              </UserProfile>
              <li className="user">
                <button type="button" onClick={handleLogoutClick}>
                  로그아웃
                </button>
              </li>
            </>
          ) : (
            <li className="user">
              <button type="button" onClick={() => GoToPage('/login')}>
                로그인
              </button>
            </li>
          )}
        </User>
      </div>
    </Gnb>
  );
}

export default Header;
