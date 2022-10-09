class Engagement < ApplicationRecord
  enum status: { unstarted: 'UNSTARTED', active: 'ACTIVE', complete: 'COMPLETE'}
end
