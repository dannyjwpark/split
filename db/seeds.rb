# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([]
    {
    id: 1,
    name: "Danny",
    email: "danny@split.com",
    },
    {
    id: 2,
    name: "Grace",
    email: "grace@split.com",
    },
    {
    id: 3,
    name: "Haru",
    email: "haru@split.com",
    },
    {
    id: 4,
    name: "Pepper",
    email: "pepper@split.com",
    }
])


friends = Friend.create([]
    {
    id: 1,
    name: "Danny",
    email: "danny@split.com",
    },
    {
    id: 2,
    name: "Grace",
    email: "grace@split.com",
    },
    {
    id: 3,
    name: "Haru",
    email: "haru@split.com",
    },
    {
    id: 4,
    name: "Pepper",
    email: "pepper@split.com",
    }
])