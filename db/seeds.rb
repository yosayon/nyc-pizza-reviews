
# require 'csv'
#
# restaurants = CSV.read('./db/data/7.13.18.csv')
# restaurants_array = []
# restaurants.each{|row|restaurants_array << {:name => row[0], :rating => row[1], :address => row[2], :city => row[3], :state => row[4], :zipcode => row[5], :phone_number => row[6], :restaurant_url => row[7], :video_review_url => row[8], :description => row[9]}}
# restaurants_array.each{|hash|Restaurant.create(hash)}
