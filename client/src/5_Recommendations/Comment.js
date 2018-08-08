import React from 'react'

const Comment = ({ comment, user }) => {
  return(
    <div className='comment-content'>
      {user}: {comment}
    </div>
  )
}

export default Comment
