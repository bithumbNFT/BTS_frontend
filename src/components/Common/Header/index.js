import React, { useCallback, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutRequestAction } from 'reducers/user';
import { HiMenu } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
import {
  Gnb,
  Menu,
  User,
  Title,
  UserProfile,
  SmallGnb,
  ListMenu,
} from './styles';

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
  const [showMenu, setShowMenu] = useState(false);
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

  const onClickShowMenu = () => {
    setShowMenu(!showMenu);
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
    <>
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

      {/*  모바일버전 메뉴바 */}

      <SmallGnb>
        <div className="navWrap">
          <Title type="button" onClick={() => GoToPage('/')}>
            BTS
          </Title>

          <div className="rightMenu">
            <li className="search">
              <form onSubmit={onSubmit}>
                <input
                  type="search"
                  value={searchValue}
                  onChange={onChangeSearch}
                />
              </form>

              <span>
                <i>
                  <AiOutlineSearch />
                </i>
              </span>
            </li>
            <button type="button" onClick={onClickShowMenu}>
              <HiMenu />
            </button>
          </div>
        </div>

        {showMenu ? (
          <ListMenu>
            <button type="button" className="close" onClick={onClickShowMenu}>
              <GrClose />
            </button>
            {userInfo ? (
              <>
                <UserProfile onClick={() => GoToPage('/mypage')}>
                  <img src={userInfo.picture} alt="profileImage" />
                  <p>MyPage</p>
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
            <li>
              <Link to="/upload" className="board">
                NFT 작품 등록하기
              </Link>
            </li>
            <li>
              <Link to="/board" className="board">
                커뮤니티
              </Link>
            </li>
          </ListMenu>
        ) : null}
      </SmallGnb>
    </>
  );
}

export default Header;
