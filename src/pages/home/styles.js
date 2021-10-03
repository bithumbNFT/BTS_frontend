import styled from '@emotion/styled';

export const Title = styled.h2`
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 1.2;
  text-align: center;
  letter-spacing: -1.5px;
  padding: 5%;
  strong {
    font-weight: 600;
  }
`;

export const CardWrap = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

export const CardListBox = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  margin: 0 auto;
`;

export const BottomMailn = styled.section`
  height: 100%;
  position: relative;

  .ant-pagination {
    text-align: right;
    margin-right: 3%;
  }
  .ant-pagination-item-active a {
    color: #fe5000;
  }
  .ant-pagination-item-active {
    font-weight: 500;
    background: #fff;
    border-color: #fe5000;
  }
`;
