ActiveAdmin.register Restaurant do
  permit_params :name, :rating, :address, :city, :state, :zipcode, :phone_number, :restaurant_url, :video_review_url, :description, :lat, :lng
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

end
