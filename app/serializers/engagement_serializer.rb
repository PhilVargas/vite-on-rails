class EngagementSerializer < ActiveModel::Serializer
  attributes :id, :name

  attribute :status do
    object.status.upcase
  end
end
