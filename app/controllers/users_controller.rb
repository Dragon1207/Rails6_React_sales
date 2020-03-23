class UsersController < ApplicationController
  def new
    if current_user
      flash[:notice] = 'You have already signed up'
      redirect_to root_path
    else
      @user = User.new
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      cookies.signed[:user_id] = @user.id
      flash[:notice] = 'Sign up successfully'
      redirect_to root_path
    else
      flash.now[:alert] = 'There was an error'
      render :new
    end
  end

  

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end

end
