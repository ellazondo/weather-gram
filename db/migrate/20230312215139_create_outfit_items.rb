class CreateOutfitItems < ActiveRecord::Migration[6.1]
  def change
    create_table :outfit_items do |t|
      t.integer :outfit_id
      t.string :top_name
      t.string :top_img
      t.string :bottom_name
      t.string :bottom_img
      t.string :shoes_name
      t.string :shoes_img

      t.timestamps
    end
  end
end
