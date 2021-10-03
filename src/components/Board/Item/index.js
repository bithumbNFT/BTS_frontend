import React from 'react';
import { Link } from 'react-router-dom';
import { ItemView, Desc, Comment } from './styles';

function Item({ post }) {
  return (
    <ItemView>
      <Link to={`/board_post/${post.p_id}`}>
        <Desc>
          <h3 className="postTitle">{post.title}</h3>

          <div className="userTime">
            {/* 작성자 */}
            <span>{post.author}</span>

            {/* 글 게시 날짜 */}
            <span>{post.create_post_date}</span>
          </div>
        </Desc>

        <Comment>
          <strong>{post.comment_list.length}</strong>
          <p>댓글수</p>
        </Comment>
      </Link>
    </ItemView>
  );
}

export default Item;
