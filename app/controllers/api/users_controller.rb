class Api::UsersController < ApplicationController

  before_action :require_signed_in!, only: [:show, :index]
  
  def create
    @user = User.new(user_params)
    if @user.save
      render "api/users/show.json.jbuilder"
    else
      render json: @user.errors.full_messages
    end
  end

  def new
    @user = User.new
  end

  def index
    @users = User.all
    render "api/users/index.json.jbuilder"
  end

  def show
    @user = User.find(params[:id])
    if @user
      render "api/users/show.json.jbuilder"
    else
      render "api/users/index.json.builder"
    end
  end

  private
  
  def user_params
    params.require(:user).permit(:password, :username, :email)
  end
end
