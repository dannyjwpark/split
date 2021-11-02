# .split()
[![Build Status](https://app.travis-ci.com/dannyjwpark/split.svg?branch=main)](https://app.travis-ci.com/github/dannyjwpark/split)    
[live-demo](https://splitsplit.herokuapp.com/)

![](https://github.com/dannyjwpark/split/blob/main/app/assets/images/splash_screen.gif)

.split() is a clone of [Splitwise](https://www.splitwise.com/), an interpersonal finance app that allows consumers to split expenses with friends. If a group needs to share the cost of a particular bill, .split() ensures that anyone who pays is reimbursed the correct amount and with a minimal number of transactions. 
<br />

## Technologies
- Frontend: Javascript, React, Redux, HTML5, CSS3
- Backend: Ruby on Rails, PostgreSQL
<br />

## Features

### User Authentication
- Able to create an account, sign in, and sign out with credentials
- Able to auto-sign in suing demo-user login feature
- Homepage dashboard is a protected route that can only be viewed after logging in.

### Homepage Dashboard
- Dashboard page consists of the user show page, as well as the components for adding friends and expenses.

![](https://github.com/dannyjwpark/split/blob/main/app/assets/images/adding_friend_bill.gif)

### Friending
- Able to add another existing user in the app as a friend
- Able to remove a friend
- A friend's show page consists of the shared expenses between the current user and a friend.

### Expensing
- Able to add an exppense that shows the payer's name, friends involved, category, description, and notes
- Expense dynamically generates the list of potential payers based on the current user's friend list

## Commenting
- Commenting feature on each expenses by a current user, as well as friends included in the expense
