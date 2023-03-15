class CreateShoes < ActiveRecord::Migration[6.1]
  def change
    create_table :shoes do |t|
      t.integer :outfit_id
      t.string :shoe_name
      t.string :shoe_img

      t.timestamps
    end
  end
end
