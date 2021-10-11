import styled from '@emotion/styled';

export const CommentForm = styled.div`
  background: #fff;
  padding: 24px 15px 24px 25px;
  border-radius: 8px;
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
  border: 1px solid #e9ecef;
  margin-bottom: 1em;
  svg {
    font-size: 1.5rem;
  }
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
  @media (max-width: 414px) {
    padding: 24px 15px 24px 20px;
    svg {
      font-size: 1.4rem;
    }
  }
`;

export const BoardBody = styled.div`
  margin-top: 10px;
`;
