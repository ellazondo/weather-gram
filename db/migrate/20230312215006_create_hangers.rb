class CreateHangers < ActiveRecord::Migration[6.1]
  def change
    create_table :hangers do |t|
      t.integer :outfit_id
      t.integer :user_id

      t.timestamps
    end
  end
end
