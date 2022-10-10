require 'rails_helper'

describe Engagement, type: :model do
  describe 'serialization' do
    subject { JSON.parse(EngagementSerializer.new(FactoryBot.create(:engagement)).to_json) }


    it 'has an upcased status' do
      expect(subject['status']).to eq 'UNSTARTED'
    end

    it 'has a name' do
      expect(subject['name']).to be_present
    end
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_presence_of(:status) }
  end
end
