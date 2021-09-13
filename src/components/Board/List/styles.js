import styled from '@emotion/styled';

export const ListWrap = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 4.5em 2.5em;
  max-width: 1000px;
  overflow: hidden;
  box-sizing: border-box;
  .postButton {
    background: #fe5000;
    border-radius: 5px;
    color: #fff;
    padding: 10px 12px;
    height: 40px;
    line-height: 1.43;
    font-size: 15px;
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
`;

export const ListView = styled.ul`
  font-size: 12px;
  font-weight: 500;
  color: #616568;
`;
