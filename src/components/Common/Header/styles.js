import styled from '@emotion/styled';

export const Gnb = styled.nav`
  position: sticky;
  z-index: 50;
  width: 100%;
  height: 65px;
  border-bottom: 1px solid transparent;
  background-color: #fff;
  left: 0;
  top: 0;
  right: 0;
  transition: background-color 0.2s ease;
  border-bottom-color: rgba(0, 27, 55, 0.1);
  .navWrap {
    max-width: 1000px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2em;
  }
  // 아이패드 기준
  @media (max-width: 1024px) {
    .navWrap {
      padding: 0;
      max-width: 900px;
    }
  }
  @media (max-width: 768px) {
    .navWrap {
      padding: 0;
      max-width: 700px;
    }
  }
  @media (max-width: 414px) {
    display: none;
  }
`;

export const Title = styled.button`
  font-weight: 700;
  font-size: 26px;
  color: #fe5000;
`;

export const User = styled.ul`
  display: flex;
  align-items: center;
  li {
    color: #4a4a4a;
    line-height: 1.5;
    margin-left: 1em;
    &.user {
      border: 1px solid #dbdbdb;
      border-radius: 5px;
      button {
        padding: 5px 8px;
        font-size: 16px;
      }
    }
  }
  .search {
    position: relative;
    width: 17rem;
    background: #f6f6f6;
    color: #5f5f5f;
    border-radius: 3px;
    span {
      position: absolute;
      font-size: 1.4em;
      right: 11px;
      top: 6px;
    }
  }
  input {
    padding: 0.5rem 0.8rem;
    font-size: 1rem;
  }
  input::-ms-clear,
  input::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration {
    display: none;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  .board {
    padding-left: 2.5rem;
    color: #4a4a4a;
    line-height: 1.5;
    font-size: 16px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
  @media (max-width: 1024px) {
    .board {
      font-size: 1.2rem;
    }
    input {
      &::placeholder {
        font-size: 1.2rem;
      }
    }

    li {
      font-size: 1.2rem;
    }
  }
`;

export const UserProfile = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 1em;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  @media (max-width: 414px) {
    width: 90px;
    height: 90px;
    position: absolute;
    top: 3.4rem;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    p {
      margin-top: 0.5rem;
      color: #fe5000;
      font-weight: 500;
    }
  }
`;

export const NotiIcon = styled.div`
  svg {
    font-size: 20px;
    color: #4a4a4a;
    margin-left: 2em;
    cursor: pointer;

    &:hover {
      color: #fe5000;
      fill: #fe5000;
    }
  }
`;

export const SmallGnb = styled.nav`
  display: none;
  @media (max-width: 414px) {
    display: block;
    position: sticky;
    z-index: 50;
    background-color: #fff;
    padding: 0.6rem 1rem;
    width: 100%;
    .navWrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    svg {
      font-size: 1.8rem;
      cursor: pointer;
    }
    .rightMenu {
      display: flex;
      justify-content: center;
      align-items: end;
      .search {
        position: relative;
        width: 10rem;
        background: #f6f6f6;
        color: #5f5f5f;
        border-radius: 3px;
        margin-right: 0.5rem;
        span {
          position: absolute;
          font-size: 1.4em;
          right: 11px;
          top: 6px;
        }
      }
      i {
        svg {
          font-size: 1.4rem !important;
        }
      }
      input {
        padding: 0.3rem;
        font-size: 1rem;
      }
    }
  }
`;

export const ListMenu = styled.ul`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  display: block;
  li {
    border-bottom: 1px solid #ddd;
    padding: 1rem;
    color: #444;
    &:nth-of-type(1) {
      margin-top: 12rem;
      border-top: 1px solid #ddd;
    }
  }
  .close {
    position: absolute;
    right: 1rem;
    top: 1rem;
    svg {
      font-size: 1.2rem;
    }
  }
`;
