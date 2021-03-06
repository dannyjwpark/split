class Api::FriendsController < ApplicationController

  def create
    @friend = User.find_by(username: params[:friend][:name])
    
    if @friend
      @friend_relationshipship = Friend.create!({
        user_id: params[:friend][:user_id],
        friend_id: params[:friend][:friend_id],
        name: params[:friend][:name]
      })
      render 'api/friends/show.json.jbuilder'
    else
      render json: "error: no user found"
    end
  end

  def destroy
      @friend_relationship = Friend.find_by(user_id: params[:user_id], id: params[:id])
      @friend_relationship.destroy

      if @friend_relationship
        render 'api/friends/friend_relationship.json.jbuilder'
      end
  end

  def show
      friend_relationship = Friend.find_by(user_id: params[:user_id], friend_id: params[:id])
      @friend = User.find_by(id: friend_relationship.friend_id)
      
      if @friend
          render 'api/friends/show.json.jbuilder'
      end
  end

  def index
      @user = User.find(params[:user_id])
      @friends = @user.friends
      render 'api/friends/index.json.jbuilder'
  end

  private 

  def friend_params
      params.require(:friend).permit(:id, :user_id, :friend_id, :name)
  end
end