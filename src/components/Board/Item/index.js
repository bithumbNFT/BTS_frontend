import React from 'react';
import PropTypes from 'prop-types';
import { ItemView, Desc, Comment } from './styles';

function Item({ title, content, user, time, num }) {
  return (
    <ItemView>
      <a href="/board_post" target="_blank">
        <Desc>
          <h3>{title}</h3>
          <p>{content}</p>

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
  content: '비트코인 물렸습니다ㅏ....... 언제 쯤 오를까요 ??',
  user: '이현주',
  time: '30분 전',
  num: 5,
};

Item.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  user: PropTypes.string,
  time: PropTypes.string,
  num: PropTypes.number,
};

export default Item;
