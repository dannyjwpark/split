class Api::BillsController < ApplicationController

    def create
      # debugger
      payer_id = params[:bill][:payer_id]
      friend_list = params[:bill][:friend_list]
      # @bill = Bill.create(bill_params)
      @bill = Bill.create({
        author_id: params[:bill][:author_id],
        amount: params[:bill][:amount],
        category: params[:bill][:category],
        description: params[:bill][:description],
        friend_list: params[:bill][:friend_list],
        notes: params[:bill][:notes],
        num_payers: params[:bill][:num_payers],
        payer_id: params[:bill][:payer_id]
      })
      @bill_friends = @bill.friend_list
      bill_id=@bill.id
      # debugger
      # bill_payers.push(current_user.id)

      
      friend_list.each do |payer|
        bill_group = BillGroup.new(bill_id: bill_id, split_id: payer, payer_id: payer_id)
        if !bill_group
        #  render "api/bills/show.json.jbuilder"
        #else
          render @bill.errors.full_messages
        end
      end


      if @bill.save
        render "api/bills/show.json.jbuilder"
      else
        render @bill.errors.full_messages
      end

    end


    def index
      @bills = Bill.all
      #bills_all = current_user.split_bills
      #bill_ids = bills_all.pluck(:bill_id).uniq
      
    end


    def show
      @bill = Bill.find(params[:id])

      if @bill
        render "api/bills/show.json.jbuilder"
      end
    end


    def update
      @bill = Bill.find(params[:id])
      @bill.update(bill_params)

      bill_id=@bill.id
      bill_payers = params[:bill][:friend_list]
      bill_payers.push(current_user.id)
      bill_payer_id = params[:bill][:bill_payer_id]

      if @bill
        render "api/bills/show.json.jbuilder"
      end
    end


    def destroy
      # debugger
        @bill = Bill.find(params[:id])
        
        if @bill
          @bill.destroy
          render "api/bills/show.json.jbuilder"
        end

    end 

    
  private 

  def bill_params
    params.require(:bill).permit(:author_id, :amount, :category, :description, :friend_list, :notes, :num_payers, :payer_id,)
  end

end