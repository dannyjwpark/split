# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_09_27_084930) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bill_groups", force: :cascade do |t|
    t.integer "bill_id", null: false
    t.integer "split_with_id", null: false
    t.integer "paid_by_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bill_id"], name: "index_bill_groups_on_bill_id"
    t.index ["paid_by_id"], name: "index_bill_groups_on_paid_by_id"
    t.index ["split_with_id"], name: "index_bill_groups_on_split_with_id"
  end

  create_table "bills", force: :cascade do |t|
    t.integer "author_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "description"
    t.string "category"
    t.string "notes"
    t.float "amount", null: false
    t.index ["author_id"], name: "index_bills_on_author_id"
  end

  create_table "comments", force: :cascade do |t|
    t.string "comment"
    t.integer "commenter_id"
    t.integer "bill_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "friends", force: :cascade do |t|
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name", null: false
    t.integer "friend_id", null: false
    t.string "email", null: false
    t.index ["friend_id"], name: "index_friends_on_friend_id"
    t.index ["user_id"], name: "index_friends_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.string "session_token"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username", null: false
  end

end
