class CreateRecommendations < ActiveRecord::Migration[5.2]
  def change
    create_table :recommendations do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :state
      t.float :votes
      t.text :comments
      t.timestamps
    end
  end
end
