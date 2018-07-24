class Recommendation < ApplicationRecord

  def increaseVote
    self.update(:votes => self.votes + 1)
  end
end
