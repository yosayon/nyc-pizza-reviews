json.comments @comments do |comment|
  json.(comment, :id, :recommendation_id, :comment, :user)
end
