class CreateTops < ActiveRecord::Migration[6.1]
  def change
    create_table :tops do |t|
      t.integer :outfit_id
      t.string :top_name
      t.string :top_img

      t.timestamps
    end
  end
end
