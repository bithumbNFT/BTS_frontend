import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ko';
import { Link } from 'react-router-dom';
import { ItemView, Desc, Comment } from './styles';

function Item({ post }) {
  const nowTime = moment().format('YYYY.MM.DD HH:mm');
  console.log(nowTime);

  return (
    <ItemView>
      <Link to={`/board_post/${post.p_id}`}>
        <Desc>
          <h3 className="postTitle">{post.title}</h3>

          <div className="userTime">
            {/* 작성자 */}
            <span>{post.author}</span>

            {/* 글 게시 날짜 */}
            <span>{nowTime}</span>
          </div>
        </Desc>

        <Comment>
          <strong>{post.view_cnt}</strong>
          <p>댓글수</p>
        </Comment>
      </Link>
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
