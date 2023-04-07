class CreateShoes < ActiveRecord::Migration[6.1]
  def change
    create_table :shoes do |t|
      t.string :shoe_name
      t.string :shoe_img
      t.string :zalando_link
      t.integer :outfit_id 

      t.timestamps
    end
  end
end
