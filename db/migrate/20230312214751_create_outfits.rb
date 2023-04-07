class CreateOutfits < ActiveRecord::Migration[6.1]
  def change
    create_table :outfits do |t|
      t.string :name
      t.string :temp_range
      t.boolean :rain
      t.string :occasion
      t.string :city
      t.string :outfit_img
      t.string :created_by
      t.integer :top_id
      t.integer :bottom_id
      t.integer :shoe_id


      t.timestamps
    end
  end
end
