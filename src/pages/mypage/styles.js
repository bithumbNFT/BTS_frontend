import styled from '@emotion/styled';

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  width: 1000px;
  margin: 2rem 0;
`;
export const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 2rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
`;

export const MyPageLink = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-left: 2rem;
`;

export const TabList = styled.li`
  padding: 1.2rem 10px;
  color: ${props => (props.current ? '#4a4a4a' : '#9a9a9a')};
  font-weight: ${props => (props.current ? 600 : 400)};
  font-size: 1.1rem;
  border-radius: 5px;

  &:hover {
    background-color: #f8f8f8;
  }
`;

export const MyPageTab = styled.div`
  padding: 20px;
  border: 1px solid #f5f5f5;
  margin-left: 2rem;
`;
