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

ActiveRecord::Schema.define(version: 2021_10_07_003500) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bill_groups", force: :cascade do |t|
    t.integer "bill_id", null: false
    t.integer "payer_id", null: false
    t.integer "split_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "payer_name"
    t.index ["bill_id"], name: "index_bill_groups_on_bill_id"
    t.index ["payer_id"], name: "index_bill_groups_on_payer_id"
    t.index ["split_id"], name: "index_bill_groups_on_split_id"
  end

  create_table "bills", force: :cascade do |t|
    t.integer "author_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "category"
    t.string "description"
    t.float "amount"
    t.string "notes"
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
    t.string "email"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email"
    t.string "password_digest"
    t.string "session_token"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
