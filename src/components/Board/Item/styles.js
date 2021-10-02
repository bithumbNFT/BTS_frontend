import styled from '@emotion/styled';

export const ItemView = styled.li`
  padding: 20px 0;
  border-bottom: 1px solid #dee2e6;
  width: 100%;
  transition: all 0.3s;
  position: relative;
  height: 120px;
  .postTitle {
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    white-space: nowrap;
    width: 580px;
    height: 40px;
  }
  .userTime {
    position: absolute;
    bottom: 26px;
  }
  &:nth-of-type(1) {
    border-top: 1px solid #dee2e6;
    margin-top: 1.4em;
  }
  a {
    display: grid;
    grid-template-columns: 6fr 1fr;
    width: 100%;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;

export const Desc = styled.div`
  margin-left: 1.3em;
  h3 {
    margin-right: 9px;
    font-size: 18px;
    font-weight: 700;
    color: #1b1c1d;
    line-height: 1.5;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 30px;
    max-height: 44px;
    color: #616568;
    overflow: hidden;
    font-size: 15px;
  }
  .userTime {
    font-size: 14px;
    font-weight: 400;
    color: #858a8d;
    span {
      margin-right: 0.5em;
    }
  }
`;

export const Comment = styled.div`
  border-radius: 50%;
  border: 1px solid #dbdbdb;
  width: 80px;
  height: 80px;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  strong {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 5px;
  }
  p {
    font-size: 13px;
    font-weight: 300;
  }
`;

export const CommentForm = styled.div`
  background: #fff;
  padding: 24px 36px;
  border-radius: 8px;
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
  border: 1px solid #e9ecef;
  margin-bottom: 1em;
  .userTimeNum {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .left {
      .name {
        color: #fe5000;
        margin-right: 0.5em;
      }
      .date {
        font-weight: 400;
        color: #adb5bd;
      }
    }
    .right {
      font-size: 16px;
      button {
        color: #fe5000;
      }
    }
  }
`;

export const BoardBody = styled.div`
  margin-top: 20px;
`;
