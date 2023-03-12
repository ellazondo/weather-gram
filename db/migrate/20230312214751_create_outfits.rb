class CreateOutfits < ActiveRecord::Migration[6.1]
  def change
    create_table :outfits do |t|
      t.string :name
      t.integer :temp
      t.boolean :rain
      t.string :occasion
      t.string :city
      t.string :outfit_img
      t.string :created_by

      t.timestamps
    end
  end
end
