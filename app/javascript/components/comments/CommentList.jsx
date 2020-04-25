import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Comment from './Comment'

class CommentList extends Component {
  render(){
    const { comments } = this.props
    let commentList = null

    if(!comments || comments.length === 0){
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 mt-4">
              <h2 className="comment-header text-center">No Comments Yet</h2>
            </div>
          </div>
        </div>
      )
    }

    commentList = comments && comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1 mt-4">
            <h2 className="comment-header">Customer comments ({ comments && comments.length })</h2>
          </div>
          { commentList }
        </div>
      </div>
    )
  }
}

CommentList.propTypes = {
  comments: PropTypes.array
}

export default CommentList
