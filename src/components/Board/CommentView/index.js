import React from 'react';
import PropTypes from 'prop-types';
import { CommentForm, BoardBody } from './styles';

function CommentView({ content, user, time }) {
  return (
    <>
      <CommentForm>
        <div className="userTimeNum">
          <span className="name">{user}</span>
          <span className="date">{time}</span>
        </div>

        <BoardBody>
          <p>{content}</p>
        </BoardBody>
      </CommentForm>
    </>
  );
}

CommentView.defaultProps = {
  content: '비트코인 물렸습니다ㅏ....... 언제 쯤 오를까요 ??',
  user: '이현주',
  time: '30분 전',
};

CommentView.propTypes = {
  content: PropTypes.string,
  user: PropTypes.string,
  time: PropTypes.string,
};

export default CommentView;
