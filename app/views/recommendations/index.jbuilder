json.recommendations @recommendations do |r|
  json.id r.id
  json.name r.name
  json.address r.address
  json.city r.city
  json.state r.state
  json.votes r.votes
  json.number_of_comments r.comments.length
  json.comments r.comments do |c|
    json.user c.user.name
    json.comment c.comment
    json.created c.created_at
  end
  json.user_id r.user_id
end
