import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { ItemView, Desc, Comment } from './styles';

moment.locale('ko');
console.log(moment);
function Item({ post }) {
  return (
    <ItemView>
      <a href="/board_post">
        <Desc>
          <h3>{post.title}</h3>

          <div className="userTime">
            {/* 작성자 */}
            <span>{post.author}</span>

            {/* 글 게시 날짜 */}
            <span>{moment(post.createdAt, 'YYYYMMDD').fromNow()}</span>
          </div>
        </Desc>

        <Comment>
          <strong>{post.view_cnt}</strong>
          <p>댓글수</p>
        </Comment>
      </a>
    </ItemView>
  );
}

Item.propTypes = {
  board: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
    createPostDate: PropTypes.string,
    p_id: PropTypes.number,
    title: PropTypes.string,
    view_cnt: PropTypes.number,
  }).isRequired,
};

export default Item;
