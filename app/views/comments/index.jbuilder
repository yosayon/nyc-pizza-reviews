json.comments @comments do |comment|
  json.user comment.user.name
  json.comment comment.comment
  json.created comment.created_at
end
