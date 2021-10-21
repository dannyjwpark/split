# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user_demo = User.create!(username: "Demo User", email: "demo_user@email.com", password: 'demo123');
user1 = User.create!(username: "Danny", email: "danny@split.com", password: 'abc!12345');
user2 = User.create!(username: "Grace", email: "grace@split.com", password: 'abc!12345');
user3 = User.create!(username: "Haru", email: "haru@split.com", password: 'abc!12345');
user4 = User.create!(username: "Pepper", email: "pepper@split.com", password: 'abc!12345');
user5 = User.create!(username: "Ross", email: "ross@split.com", password: 'abc!12345');
user6 = User.create!(username: "Phoebe", email: "phoebe@split.com", password: 'abc!12345');
user7 = User.create!(username: "Spencer", email: "spencer@split.com", password: 'abc!12345');
user8 = User.create!(username: "Joey", email: "joey@split.com", password: 'abc!12345');
user9 = User.create!(username: "Rachel", email: "rachel@split.com", password: 'abc!12345');
user10 = User.create!(username: "Chandler", email: "chandler@split.com", password: 'abc!12345');
user11 = User.create!(username: "Monica", email: "monica@split.com", password: 'abc!12345');


friend_d_1 = Friend.create!(user_id: user_demo.id, friend_id: user1.id, email: user1.email, name: user1.username)
friend_d_2 = Friend.create!(user_id: user_demo.id, friend_id: user2.id, email: user2.email, name: user2.username)
#friend_d_3 = Friend.create!(user_id: user_demo.id, friend_id: user3.id, email: user3.email, name: user3.username)
#friend_d_4 = Friend.create!(user_id: user_demo.id, friend_id: user4.id, email: user4.email, name: user4.username)
#friend_d_5 = Friend.create!(user_id: user_demo.id, friend_id: user5.id, email: user5.email, name: user5.username)
#friend_d_6 = Friend.create!(user_id: user_demo.id, friend_id: user6.id, email: user6.email, name: user6.username)
#friend_d_7 = Friend.create!(user_id: user_demo.id, friend_id: user7.id, email: user7.email, name: user7.username)
#friend_d_8 = Friend.create!(user_id: user_demo.id, friend_id: user8.id, email: user8.email, name: user8.username)
#friend_d_9 = Friend.create!(user_id: user_demo.id, friend_id: user9.id, email: user9.email, name: user9.username)
#friend_d_10 = Friend.create!(user_id: user_demo.id, friend_id: user10.id, email: user10.email, name: user10.username)
#friend_d_11 = Friend.create!(user_id: user_demo.id, friend_id: user11.id, email: user11.email, name: user11.username)


bill1 = Bill.create!(author_id: 1, category: "General", amount: 24.00, notes: "Please pay by tomorrow", payer_id: 1, friend_list: [] );
bill2 = Bill.create!(author_id: 1, category: "Entertainment", amount: 100.00, notes: "Let's split the bill", payer_id: 2, friend_list: [] );

bill_group1 = BillGroup.create!(bill_id: 1, payer_id: 1, split_id: 1, payer_name: "John");
bill_group2 = BillGroup.create!(bill_id: 2, payer_id: 1, split_id: 2, payer_name: "John");

comment1 = Comment.create!(comment: "Thanks for paying", commenter_id: 1, bill_id: 1);