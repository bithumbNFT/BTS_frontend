import styled from '@emotion/styled';

export const TableWrapper = styled.div`
  padding: 15px;
  border: 1px solid #9e9e9e;
  border-radius: 5px;
  margin-bottom: 10px;
  @media (max-width: 1024px) {
    padding: 30px;
  }
  @media (max-width: 414px) {
    padding: 5px;
  }
`;
export const TableContainer = styled.table`
  font-size: 16px;
  text-align: left;
  width: 100%;

  thead {
    .coin-title {
      margin-bottom: 1rem;
    }
    td {
      display: flex;
      align-items: center;

      img {
        width: 16px;
        height: 17px;
        margin-right: 5px;
      }
      b {
        font-weight: bold;
        padding-right: 5px;
      }
    }
  }
  tbody {
    td {
      padding-top: 12px;
    }
    .coin-info-price {
      font-size: 1.4rem;
      font-weight: bold;
      padding-right: 3px;
    }
    .word-sm {
      padding-right: 5px;
      color: #d3d3d3;
    }
  }
  @media (max-width: 414px) {
    font-size: 0.8rem;
    thead {
      font-size: 0.9rem;
    }
    tbody {
      .mr-3 {
        display: block;
      }
      .pb-1 {
        width: 40%;
      }
      td {
        padding: 0;
        line-height: 1.3;
      }
      .coin-info-price {
        font-size: 1.2rem;
        font-weight: bold;
      }
    }
  }
`;
