class Recommendation < ApplicationRecord
  belongs_to :user
  has_many :comments
  has_many :votes
  # scope :commented_by_user, -> (user_id){where(:comments.user_id => user_id)}

  # def increaseVote
  #   self.update(:votes => self.votes + 1)
  # end

  def self.created_by_user(user_id)
    where(:user_id => user_id)
  end

  def self.commented_by_user(user_id)
    all.includes(:comments).where('comments.user_id = ?', user_id).references(:comments)
  end

  def self.voted_by_user(user_id)
    all.includes(:votes).where('votes.user_id = ?', user_id).references(:votes)
  end

end
