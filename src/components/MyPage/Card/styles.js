import styled from '@emotion/styled';

export const CardWrap = styled.div`
  padding: 5% 0;
`;

export const CardListWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 50px 0 0;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`;

export const CardContainer = styled.div`
  border: 1px solid #ddd;
  position: relative;
  width: 300px;
  border-radius: 5px;
  margin-bottom: 32px;
  transition: all 0.3s;
  opacity: 0.7;
  height: 400px;
  display: grid;
  overflow: hidden;
  grid-auto-rows: 70% 30%;
  .delete {
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 1.5rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    width: 3rem;
    height: 3rem;
    transition: all 0.4s;
    display: none;
    &:hover {
      background: rgba(255, 255, 255, 1);
    }
  }
  .none {
    display: none;
  }
  &:hover {
    box-shadow: 1px 1px 20px #ddd;
    opacity: 1;
    .delete {
      display: block;
    }
    .none {
      display: none;
    }
  }
  a {
    height: 100%;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;

export const CardTitle = styled.h5`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
`;

export const CardImage = styled.img`
  width: 100%;
`;

export const Status = styled.div`
  width: fit-content;
  height: auto;
  padding: 5px;
  border-radius: 10%;
  background-color: #f5e6ca;
  font-size: 14px;
  color: #343f56;
  margin-top: 3em;
`;

export const CardDetail = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

export const CardLeft = styled.div`
  p {
    font-size: 14px;
    line-height: 1.2;
    margin-top: 0.3em;
  }
`;
export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  svg {
    cursor: pointer;
    font-size: 20px;
  }
`;
