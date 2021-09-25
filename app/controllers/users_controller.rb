class UsersController < ApplicationController

  before_action :require_signed_in!, only: [:show, :index]
  
  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      render json: @user.errors.full_messages
    end
  end

  def new
    @user = User.new
  end

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
    if @user
      render :show
    else
      redirect_to new_session_url
    end
  end

  private
  
  def user_params
    params.require(:user).permit(:password, :username)
  end
end
