import styled from '@emotion/styled';

export const PostWrap = styled.article`
  width: 100%;
  margin: 0 auto;
  padding: 5em 2em 10em;
  max-width: 1000px;
  overflow: hidden;
  box-sizing: border-box;
  background: #fff;
  .boardHeader {
    border-bottom: 1px solid #f1f3f5;
    margin-bottom: 10px;
    .align {
      display: flex;
      justify-content: space-between;
      .right {
        color: #fe5000;
        font-size: 16px;
        button {
          &:nth-of-type(1) {
            margin-right: 1em;
          }
        }
      }
    }
  }
  .userTimeNum {
    display: flex;
    flex-direction: row;
    margin-bottom: 16px;
    height: 20px;
    font-size: 14px;
    line-height: 1.43;
    margin-top: 10px;
    span {
      margin-right: 0.5em;
    }
    .name {
      font-weight: 500;
      color: #495057;
    }
    .date {
      font-weight: 400;
      color: #adb5bd;
    }
    .comment {
      font-weight: 400;
      color: #495057;
    }
  }
  .boardBody {
    padding: 16px 0;
    p {
      line-height: 1.5;
      color: #444;
      letter-spacing: -0.3px;
    }
  }
`;

export const Title = styled.h2`
  display: inline;
  word-break: break-all;
  font-size: 24px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.42;
  letter-spacing: -0.3px;
  color: #212529;
`;

export const CommentWrap = styled.div`
  width: 100%;
  background-color: #f8f9fa;
  padding: 2em 4em 6em;
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
