import React from 'react';
import ReactLoading from 'react-loading';
import styled from '@emotion/styled';

function Loader() {
  return (
    <LoadingWrap>
      <div>
        <h2>
          다이노도 즐긴다는 <strong>Bithumb NFT</strong> 경매장 💰
        </h2>
        <img src="/images/loading.gif" alt="loading..." />
        <ReactLoading />
      </div>
    </LoadingWrap>
  );
}
export default Loader;

export const LoadingWrap = styled.main`
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  div {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h2 {
      margin-bottom: 2em;
      text-align: center;
      font-size: 28px;
      font-family: 'paybooc-Bold' !important;
      color: #444;
      strong {
        color: #fe5000;
        font-family: 'paybooc-Bold' !important;
      }
    }
  }
`;
