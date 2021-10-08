import styled from '@emotion/styled';

export const Nfting = styled.main`
  display: grid;
  grid-template-columns: 500px 500px;
  justify-content: space-evenly;
  width: 100%;
  max-width: 950px;
  margin: 65px auto;
  padding-bottom: 10rem;
`;

export const Images = styled.div`
  width: 100%;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

export const Detail = styled.article`
  width: 100%;
  padding: 0 30px;
  .detail {
    &__header {
      display: flex;
      justify-content: space-between;
      .like {
        font-size: 1.3rem;
        font-weight: 600;
        color: #fe5000;
        text-align: right;
        display: flex;
        flex-direction: column;
        align-items: center;
        h3 {
          font-size: 30px;
          color: #fe5000;
          opacity: 0.8;
        }
      }
      .owner {
        h2,
        p {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 0.5em;
          color: #4a4a4a;
        }
      }
    }

    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 2em 0 1em;
    }
  }
`;

export const Border = styled.div`
  width: 100%;
  border: 1px solid #dbdbdb;
  margin-top: 2em;
  border-radius: 5px;
  padding: 15px;
  .price {
    p {
      font-size: 1.3em;
      font-weight: 500;
      display: inline-block;
      padding-left: 0.5rem;
    }
    span {
      font-size: 1em;
      font-weight: 500;
      display: inline-block;
      margin-left: 0.3rem;
    }
    margin-bottom: 20px;
  }
  .email {
    p {
      font-size: 1em;
      font-weight: 500;
    }
  }
  
  h3 {
    color: #8a939b;
    font-size: 1.2rem;
    margin-bottom: 5px;
  }
  p {
    line-height: 1.4;
    letter-spacing: -0.4px;
    padding-bottom: 5px;
    font-weight: 300;
  }
  button {
    min-width: 180px;
    padding: 0 16px;
    height: 48px;
    line-height: 1.47;
    font-size: 16px;
    letter-spacing: -0.3px;
    border-radius: 4px;
    background-color: #fe5000;
    color: #fff;
  }
  table {
    width: 100%;
    font-weight: 300;
    th {
      margin-bottom: 1em;
      text-align: left;
      font-weight: 500;
    }
  }
  .desc {
    text-align: right;
    line-height: 2;
  }
`;
