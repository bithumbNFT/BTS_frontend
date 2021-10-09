/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
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
          <a
            onClick={e => NextPage(number, e)}
            href="#"
            active={number === paginate}
          >
            {number}
          </a>
        </li>
      ))}
    </Paging>
  );
};

export default Pagination;

const Paging = styled.ul`
  margin: 100px 0 20px;
  padding: 0;
  list-style: none;
  text-align: center;
  li {
    display: inline-block;
    margin-right: 5px;
    a {
      color: #666;
      padding: 5px 10px;
      text-decoration: none;
      border: 1px solid #eee;
      background-color: #fff;
      box-shadow: 0px 0px 10px 0px #eee;
      &:active {
        color: #fff;
        background-color: #fe5000;
        border-color: #fe5000;
      }
      &.current {
        color: #fff;
        background-color: #fe5000;
        border-color: #fe5000;
      }
    }
  }
`;
