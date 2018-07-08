class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.float :rating
      t.string :address
      t.string :city
      t.string :state
      t.string :zipcode
      t.string :phone_number
      t.string :restaurant_url
      t.string :video_review_url
      t.text :description
      t.timestamps
    end
  end
end
