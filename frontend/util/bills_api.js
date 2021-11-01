// index
export const fetchBills = () => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/bills`,
    })
  )
}

// show
export const fetchBill = billId => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/bills/${billId}`,
    })
  )
}

// create
export const addBill = bill => {
  return (
    $.ajax({
      method: 'POST',
      url: `/api/bills`,
      data: {bill}
    })
  )
}

// update
export const updateBill = bill => {
  return (
    $.ajax({
      method: 'PATCH',
      url: `/api/bills/${bill.id}`,
      data: {bill}
    })
  )
}

// destroy
export const deleteBill = billId => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `/api/bills/${billId}`,
    })
  )
}

