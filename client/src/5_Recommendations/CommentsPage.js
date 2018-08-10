import React from 'react'
import Comment from './Comment'
import ScrollArea from 'react-scrollbar'

const CommentsPage = ({ currentUser, recommendation, commentText, onChangeComment, onClickComment }) => {
  const displayComments = recommendation.comments && recommendation.comments.length > 0  ? recommendation.comments.map(comment => <Comment key={comment.id} comment={comment.comment}  user={comment.user}/>) : [" "]

  return(
    <div className='comments-list-container'>
      <ScrollArea>
        <div>
        {displayComments}
        </div>
      </ScrollArea>
      <div className='comment-container'>
        <div className='current-user-name'>{currentUser.name}:</div>
        <div className='comment-input-box-container'>
          <form onSubmit={(e) => onClickComment(e)}>
            <input
              className='comment-input-box'
              name="comments"
              value={commentText}
              onChange={(e) => onChangeComment(e)}
              type='text'
              placeholder='Enter Comment'
              />
            <input type='submit'/>
            </form>
        </div>
      </div>
    </div>
  )
}

export default CommentsPage
