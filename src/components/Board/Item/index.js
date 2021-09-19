import React from 'react';
import PropTypes from 'prop-types';
import { ItemView, Desc, Comment } from './styles';

function Item({ title, user, time, num }) {
  return (
    <ItemView>
      <a href="/board_post">
        <Desc>
          <h3>{title}</h3>

          <div className="userTime">
            <span>{user}</span>
            <span>{time}</span>
          </div>
        </Desc>

        <Comment>
          <strong>{num}</strong>
          <p>댓글수</p>
        </Comment>
      </a>
    </ItemView>
  );
}

Item.defaultProps = {
  title: '비트코인 앞으로의 전망',
  user: '이현주',
  time: '30분 전',
  num: 5,
};

Item.propTypes = {
  title: PropTypes.string,
  user: PropTypes.string,
  time: PropTypes.string,
  num: PropTypes.number,
};

export default Item;
