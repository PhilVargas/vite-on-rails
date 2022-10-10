class Engagement < ApplicationRecord
  enum status: { unstarted: 'UNSTARTED', active: 'ACTIVE', complete: 'COMPLETE'}

  validates :name, :status, presence: true
end
