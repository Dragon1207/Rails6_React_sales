class CommentsController < ApplicationController
  before_action :require_signin
  before_action :set_product

  def create
    @comment = @product.comments.build(comment_params)
    @comment.user = current_user
    if @comment.save
      flash[:notice] = 'Comment has been posted'
      redirect_to @product
    else
      @comments = @product.comments
      flash.now[:alert] = 'Comment not created'
      render 'products/show'
    end
  end


  private

  def set_product
    @product = Product.where(id: params[:product_id]).first
  end

  def comment_params
    params.require(:comment).permit(:body)
  end

end
