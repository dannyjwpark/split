# // json.partial! ('partial name'), (key from partial):(replace with __)

@bills_records.each do |bill|
    json.set! bill.id do
        json.partial! "api/bills/bill", bill: bill
    end
end