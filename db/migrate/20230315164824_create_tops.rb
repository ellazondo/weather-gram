class CreateTops < ActiveRecord::Migration[6.1]
  def change
    create_table :tops do |t|
      t.string :top_name
      t.string :top_img
      t.string :zalando_link
      t.integer :outfit_id 

      t.timestamps
    end
  end
end
