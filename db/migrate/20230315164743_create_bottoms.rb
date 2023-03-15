class CreateBottoms < ActiveRecord::Migration[6.1]
  def change
    create_table :bottoms do |t|
      t.integer :outfit_id
      t.string :bottom_name
      t.string :bottom_img

      t.timestamps
    end
  end
end
