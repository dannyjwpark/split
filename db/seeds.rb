# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create!(id: 1, username: "Danny", email: "danny@split.com");
user2 = User.create!(id: 2, username: "Grace", email: "grace@split.com");
user3 = User.create!(id: 3, username: "Haru", email: "haru@split.com");
user4 = User.create!(id: 4, username: "Pepper", email: "pepper@split.com");
user5 = User.create!(id: 5, username: "Rose", email: "rose@split.com");
user6 = User.create!(id: 6, username: "Phoebe", email: "phoebe@split.com");
user7 = User.create!(id: 7, username: "Spencer", email: "spencer@split.com");
user8 = User.create!(id: 8, username: "Joey", email: "joey@split.com");

friend1_1 = Friend.create!(user_id: user1.id, friend_id: user3.id, email: user3.email, name: user3.username)
friend1_2 = Friend.create!(user_id: user1.id, friend_id: user4.id, email: user4.email, name: user4.username)
friend1_3 = Friend.create!(user_id: user1.id, friend_id: user5.id, email: user5.email, name: user5.username)
friend1_4 = Friend.create!(user_id: user1.id, friend_id: user8.id, email: user8.email, name: user8.username)

friend2_1 = Friend.create!(user_id: user2.id, friend_id: user3.id, email: user3.email, name: user3.username)
friend2_2 = Friend.create!(user_id: user2.id, friend_id: user6.id, email: user6.email, name: user6.username)
friend2_3 = Friend.create!(user_id: user2.id, friend_id: user7.id, email: user7.email, name: user7.username)
friend2_4 = Friend.create!(user_id: user2.id, friend_id: user8.id, email: user8.email, name: user8.username)

friend3_1 = Friend.create!(user_id: user3.id, friend_id: user1.id, email: user1.email, name: user1.username)
friend3_2 = Friend.create!(user_id: user3.id, friend_id: user2.id, email: user2.email, name: user2.username)
friend3_3 = Friend.create!(user_id: user3.id, friend_id: user4.id, email: user4.email, name: user4.username)
friend3_4 = Friend.create!(user_id: user3.id, friend_id: user6.id, email: user6.email, name: user6.username)

friend4_1 = Friend.create!(user_id: user4.id, friend_id: user1.id, email: user1.email, name: user1.username)
friend4_2 = Friend.create!(user_id: user4.id, friend_id: user3.id, email: user3.email, name: user3.username)
friend4_3 = Friend.create!(user_id: user4.id, friend_id: user5.id, email: user5.email, name: user5.username)
friend4_4 = Friend.create!(user_id: user4.id, friend_id: user6.id, email: user6.email, name: user6.username)