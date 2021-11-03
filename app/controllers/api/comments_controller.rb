class Api::CommentsController < ApplicationController

  def create
    @comment = Bill.find(params[:bill_id])
    # @bill = Bill.find(params[:id])
    
    if @comment
      @comment_relationshipship = Comment.create!({
        comment: params[:comment][:comment],
        commenter_id: params[:comment][:commenter_id],
        bill_id: params[:comment][:bill_id]
      })
      render 'api/comments/show.json.jbuilder'
    else
      render json: "error: no bill found"
    end
  end

  def destroy
    @comment_relationshipship = Comment.find_by(id: params[:id], bill_id: params[:bill_id])

    if @comment_relationshipship
      @comment_relationshipship.destroy
    end
    render 'api/comments/comment_relationshipship.json.jbuilder'
  end

  def show
    @comment_relationshipship = Comment.find_by(id: params[:id], bill_id: params[:bill_id])
    @comment = Bill.find_by(id: @comment_relationshipship.bill_id)
    
    if @comment
      render 'api/comments/show.json.jbuilder'
    end
  end

  def index
    @bill = Bill.find(params[:bill_id])
    @comments = @bill.comments
    render 'api/comments/index.json.jbuilder'
  end

  private 

  def comment_params
    params.require(:comment).permit(:id, :comment, :commenter_id, :bill_id, :created_at)
  end
end