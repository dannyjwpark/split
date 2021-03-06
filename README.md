# .split()
[![Build Status](https://app.travis-ci.com/dannyjwpark/split.svg?branch=main)](https://app.travis-ci.com/github/dannyjwpark/split)    
[live-demo](https://splitsplit.herokuapp.com/)


.split() is a clone of [Splitwise](https://www.splitwise.com/), an interpersonal finance app that allows consumers to split expenses with friends. If a group needs to share the cost of a particular bill, .split() ensures that anyone who pays is reimbursed the correct amount and with a minimal number of transactions. 
<br />

![](https://github.com/dannyjwpark/split/blob/main/app/assets/images/splash_screen.gif)


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

![](https://github.com/dannyjwpark/split/blob/main/app/assets/images/commenting.gif)

### Commenting
- Commenting feature on each expenses by a current user, as well as friends included in the expense
<br />


## Development
### N+1 queries

Through implementing eager loading, which works by preloading every data beforehand in a temporary cache stored in memory, number of queries being made from the Rails side can be reduced significantly. This allows earlier loading of data, which means number of queries is independent of the number of items fetched.

``` Ruby
def index
  @users = User.eager_load(params[:username])
  render "api/users/index.json.jbuilder"
end
```

## Nested routes backend

One of the challenges of setting backend architecture was with nested attributes.  Commenting routes were nested under each bills,so the necessary parameters and properties had to be passed in acoordingly in order to successfully return data from backend api calls, as well as to populate on frontend side.

``` Ruby
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
```

``` Ruby
json.extract! @bill, :id, :author_id, :amount, :category, :description, :friend_list, :notes, :payer_id

json.comments do
  @bill.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :commenter_id, :bill_id, :comment, :created_at, :updated_at
    end
  end
end
```

## Re-rendering components
While adding/deleting comments worked fine on database level, simple props change and re-fetching inside lifecycle methods such as componentDidMount() were not sufficient to trigger components' re-rendering. In this case, the props were stored inside declared variables to be set as states to proactively trigger re-rendering with setState() method.

```Javascript
handleDelete(id){
  const bill_id = this.props.bill.id;
  const comment = {bill_id: bill_id, id: id}

  if(this.props.comments[id].commenterId === this.props.currentUser.id){
    let new_comments = this.state.comments.filter((comment) => comment.id !== id);
    this.props.deleteComment(comment);
    this.setState(state => {
      const comments = state.comments.filter((comment) => comment.id !== id);
      return {
        comments,
      }
    })
  } else {
    alert("You can only delete your own comment")
  }
}

handleSubmit(e) {
  e.preventDefault();

  const comment = { 
    bill_id: this.props.bill.id,
    commenter_id: this.props.currentUser.id,
    comment: this.state.comment,
  };

  this.props.addComment(comment)
    .then(() => this.props.fetchComments(this.props.bill.id))
    .then(() => this.setState(state => {
      let comments = state.comments;
      comments[comments.length] = {
        commenterId: this.props.currentUser.id,
        billId: this.props.bill.id,
        comment: this.state.comment,
        createdAt: 'Now',
        updatedAt: 'Now',
      }
      return {
        comment: this.state.comment,
        comments,
        }
      }
    )
  );
  this.forceUpdate();
  console.log(this.state.comments);
}
```



## Future actions
- Enable users to form a group between themselves for transactions on regular basis
- Settling expenses once paid out
- Enable changing split ratio of the expenses (other than equal proportions among number of payers)
