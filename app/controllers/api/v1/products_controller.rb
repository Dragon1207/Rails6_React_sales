class Api::V1::ProductsController < ApplicationController
  before_action :require_signin, except: [:index, :show]
  before_action :find_product, only: [:show, :edit, :update, :destroy]
  before_action :require_owner, only: [:edit, :update, :destroy]

  def index
    @products = Product.all
  end

  def show
    @comment = @product.comments.build
    @comments = @product.comments
  end

  def create
    @product = Product.new(product_params)
    @product.user = current_user
    if @product.save
      flash[:notice] = 'Product has been created'
      redirect_to root_path
    else
      flash.now[:alert] = 'There was an error, please try again'
      render :new
    end
  end

  def update
    if @product.update(product_params)
      flash[:notice] = 'Product has been updated'
      redirect_to root_path
    else
      flash.now[:alert] = 'There was an error, please try again'
      render :edit
    end
  end

  def destroy
    @product.destroy
    flash[:alert] = 'Product has been deleted'
    redirect_to root_path
  end

  private

  def require_owner
    unless @product.owned_by?(current_user)
      flash[:alert] = 'Access denied'
      redirect_to root_path
    end
  end

  def find_product
    begin
      @product = Product.find(params[:id])
    rescue ActiveRecord::RecordNotFound
      redirect_to root_path
    end
  end

  def product_params
    params.require(:product).permit([:name, :price, :description, :quantity, :image_url])
  end


end
