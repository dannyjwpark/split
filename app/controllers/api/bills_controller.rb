class Api::BillsController < ApplicationController

    def create
      # debugger
      bill_payer_id = params[:bill][:bill_payer_id]
      @bill = Bill.create(bill_params)
      bill_id=@bill.id
      bill_payers = params[:bill][:friend_list]
      # bill_payers.push(current_user.id)

      
      bill_payers.each do |payer|
        bill_group = BillGroup.new(bill_id: bill_id, split_id: payer, payer_id: bill_payer_id)
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
      @bill = Bill.find_by(id: params[:id])
      @bill.update(bill_params)

      bill_id=@bill.id
      bill_payers = params[:bill][:friends]
      bill_payers.push(current_user.id)
      bill_payer_id = params[:bill][:bill_payer_id]

      if @bill
        render "api/bills/show.json.jbuilder"
      end
    end


    def destroy
        @bill = Bill.find(id: params[:id])
        
        if @bill
          @bill.destroy
        else
          Bill.each do |bill|
            bill.destroy
          end
        end

        # render "api/bills/show.json.jbuilder"
    end 

    
  private 

  def bill_params
    params.require(:bill).permit(:author_id, :category, :description, :amount, :notes, :payer_id, :num_payers, :friend_list)
  end

end