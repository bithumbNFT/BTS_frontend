import React from 'react';
import { Link } from 'react-router-dom';
import { ItemView, Desc, Comment } from './styles';

function Item({ post }) {
  // 게시글 작성 날짜
  const writeDate = post.create_post_date.split('T').splice(0, 1);

  return (
    <ItemView>
      <Link to={`/board_post/${post.p_id}`}>
        <Desc>
          <h3 className="postTitle">{post.title}</h3>

          <div className="userTime">
            {/* 작성자 */}
            <span>{post.author}</span>

            {/* 글 게시 날짜 */}
            <span>{writeDate}</span>
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
