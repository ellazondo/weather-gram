class CreateTops < ActiveRecord::Migration[6.1]
  def change
    create_table :tops do |t|
      t.string :top_name
      t.string :top_img
      t.string :zalando_link

      t.timestamps
    end
  end
end
