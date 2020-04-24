import React from 'react'
import PropTypes from 'prop-types'

const Comment = ({ comment }) => (
  <div class="col-md-10 offset-md-1 mt-4">
    <div class="comment-body mb-2 mt-3">
      { comment.body }
    </div>
    <small>
      <em>Created <span>{ comment.created_at }</span> ago by: </em>
      { comment.user.fullname }
    </small>
  </div>
)

export default Comment
