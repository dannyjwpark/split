class Api::ExpensesController < ApplicationController

    def create
      @bill = Bill.create(bill_params)
      bill_id=@bill.id
      bill_payers = params[:bill][:friends]
      bill_payers.push(current_user.id)
      bill_payer_id = params[:bill][:bill_payer_id]

      bill_payers.each do |payer_id|
        BillGroup.create(bill_id: bill_id, split_id: payer_id, bill_payer_id: bill_payer_id)
      end

      if @bill
        render "api/bills/show.json.jbuilder"
      end

    end

    def index
      bills_all = current_user.split_bills
      bill_ids = bills_all.pluck(:bill_id).uniq
      
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
        @bill = Bill.find_by(id: params[:id])
        @bill.destroy

        render "api/bills/show.json.jbuilder"
    end 

  private 

  def bill_params
    params.require(:bill).permit(:author_id, :category, :description, :amount, :notes)
  end

end