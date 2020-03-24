module ApplicationHelper

  def commented_by(user)
    user.fullname
  end

  def persisted_comments(comments)
    comments.reject { |comment| comment.new_record? }
  end
end
