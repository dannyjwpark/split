# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(id: 1, name: "Danny", email: "danny@split.com");
user2 = User.create(id: 2, name: "Grace", email: "grace@split.com");
user3 = User.create(id: 3, name: "Haru", email: "haru@split.com");
user4 = User.create(id: 4, name: "Pepper", email: "pepper@split.com");
user5 = User.create(id: 1, name: "Rose", email: "rose@split.com");
user6 = User.create(id: 2, name: "Phoebe", email: "phoebe@split.com");
user7 = User.create(id: 3, name: "Spencer", email: "spencer@split.com");
user8 = User.create(id: 4, name: "Joey", email: "joey@split.com");

friend1_1 = Friend.create!(user_id: user1.id, friend_id: user3.id)
friend1_2 = Friend.create!(user_id: user1.id, friend_id: user4.id)
friend1_3 = Friend.create!(user_id: user1.id, friend_id: user5.id)
friend1_4 = Friend.create!(user_id: user1.id, friend_id: user8.id)

friend2_1 = Friend.create!(user_id: user2.id, friend_id: user3.id)
friend2_2 = Friend.create!(user_id: user2.id, friend_id: user6.id)
friend2_3 = Friend.create!(user_id: user2.id, friend_id: user7.id)
friend2_4 = Friend.create!(user_id: user2.id, friend_id: user8.id)

friend3_1 = Friend.create!(user_id: user3.id, friend_id: user1.id)
friend3_2 = Friend.create!(user_id: user3.id, friend_id: user2.id)
friend3_3 = Friend.create!(user_id: user3.id, friend_id: user4.id)
friend3_4 = Friend.create!(user_id: user3.id, friend_id: user6.id)

friend4_1 = Friend.create!(user_id: user4.id, friend_id: user1.id)
friend4_2 = Friend.create!(user_id: user4.id, friend_id: user3.id)
friend4_3 = Friend.create!(user_id: user4.id, friend_id: user5.id)
friend4_4 = Friend.create!(user_id: user4.id, friend_id: user6.id)