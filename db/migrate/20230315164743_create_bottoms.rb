class CreateBottoms < ActiveRecord::Migration[6.1]
  def change
    create_table :bottoms do |t|
      t.string :bottom_name
      t.string :bottom_img
      t.string :zalando_link
      t.integer :outfit_id 

      t.timestamps
    end
  end
end
