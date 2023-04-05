# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_03_15_164824) do

  create_table "bottoms", force: :cascade do |t|
    t.string "bottom_name"
    t.string "bottom_img"
    t.string "zalando_link"
    t.integer "outfit_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "hangers", force: :cascade do |t|
    t.integer "outfit_id"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "outfits", force: :cascade do |t|
    t.string "name"
    t.string "temp_range"
    t.boolean "rain"
    t.string "occasion"
    t.string "city"
    t.string "outfit_img"
    t.string "created_by"
    t.integer "top_id"
    t.integer "bottom_id"
    t.integer "shoe_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "shoes", force: :cascade do |t|
    t.string "shoe_name"
    t.string "shoe_img"
    t.string "zalando_link"
    t.integer "outfit_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tops", force: :cascade do |t|
    t.string "top_name"
    t.string "top_img"
    t.string "zalando_link"
    t.integer "outfit_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "profile_pic"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
