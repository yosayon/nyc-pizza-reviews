json.users @users do |user|
  json.id user.id
  json.name user.name
  json.email user.email
  json.image_url  user.image_url
end
