import styled from '@emotion/styled';

export const ListWrap = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 4.5em 2.5em;
  max-width: 1000px;
  overflow: hidden;
  box-sizing: border-box;
  h2 {
    font-size: 24px;
  }
  .postButton {
    background: #fe5000;
    border-radius: 5px;
    color: #fff;
    padding: 10px 12px;
    height: 40px;
    line-height: 1.43;
    font-size: 16px;
    letter-spacing: -0.3px;
    i {
      margin-right: 0.3em;
      font-size: 18px;
      vertical-align: middle;
    }
  }
  .write {
    text-align: right;
  }

  @media (max-width: 414px) {
    padding: 4.5em 0;
    .write {
      margin-right: 1rem;
    }
  }
`;

export const ListView = styled.ul`
  .ant-pagination {
    text-align: center;
    margin-top: 5em;
  }
`;

export const EmptyWrap = styled.section`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3 {
    font-size: 1rem;
    color: #616568;
    margin-top: 1rem;
    font-weight: 400;
  }
`;
