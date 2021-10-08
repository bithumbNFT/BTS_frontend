/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import styled from '@emotion/styled';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  const NextPage = (number, e) => {
    e.preventDefault();
    paginate(number);
  };

  // Math.ceil: 올림
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Paging>
      {pageNumbers.map(number => (
        <li className="page-item" key={number}>
          <a onClick={e => NextPage(number, e)} href="#" className="page-link">
            {number}
          </a>
        </li>
      ))}
    </Paging>
  );
};

export default Pagination;

const Paging = styled.ul`
  display: flex;
  justify-content: center;
  margin: 2rem 0 7rem 0;
  li {
    width: 30px;
    height: 30px;
    border: 1px solid #ccc;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    display: flex;
    a {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      &:active {
        background: #fe5000;
        color: #fff;
      }
    }
  }
`;
