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

friend1 = Friend.create(id: 1, name: "Danny", email: "danny@split.com");
friend2 = Friend.create(id: 2, name: "Grace", email: "grace@split.com");
friend3 = Friend.create(id: 3, name: "Haru", email: "haru@split.com");
friend4 = Friend.create(id: 4, name: "Pepper", email: "pepper@split.com");


