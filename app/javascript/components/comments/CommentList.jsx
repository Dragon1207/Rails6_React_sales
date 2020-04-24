import React from 'react'
import PropTypes from 'prop-types'

class CommentList extends Component {
  render(){
    return (
      <div className="container">
        <div class="row">
          <div class="col-md-10 offset-md-1 mt-4">
            <h2 class="comment-header">Customer comments (number of comments)</h2>
          </div>
          (List of comments)
        </div>
      </div>
    )
  }
}

export default CommentList
