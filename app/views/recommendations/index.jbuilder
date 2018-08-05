json.recommendations @recommendations do |r|
  json.id r.id
  json.name r.name
  json.address r.address
  json.city r.city
  json.state r.state
  json.votes r.votes
  json.comments r.comments
  json.user_id r.user_id
end
