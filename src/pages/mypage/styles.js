import styled from '@emotion/styled';

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 2em 0 3em 0;
  letter-spacing: -0.8px;
  @media (max-width: 414px) {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }
`;
export const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding-bottom: 10%;
  @media (max-width: 768px) {
    width: 700px;
  }
  @media (max-width: 414px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media (max-width: 414px) {
    display: grid;
  }
`;

export const MyPageLink = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TabList = styled.li`
  color: ${props => (props.current ? '#4a4a4a' : '#9a9a9a')};
  font-weight: ${props => (props.current ? 600 : 400)};
  border-radius: 5px;
  text-align: center;
  a {
    display: inline-block;
    font-size: 1.2rem;
    width: 100%;
    padding: 1.2rem 10px;
  }
  &:hover {
    background-color: #f8f8f8;
  }
`;

export const MyPageTab = styled.div`
  padding: 20px;
  border: 1px solid #f5f5f5;
  margin-left: 2rem;
  width: 70%;
  @media (max-width: 414px) {
    width: 100%;
    margin-left: 0;
    margin-top: 2rem;
  }
`;
