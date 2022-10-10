require 'rails_helper'

RSpec.describe "Api::V1::Engagements", type: :request do
  let!(:engagement) { FactoryBot.create(:engagement) }

  describe "GET /index" do
    it "returns a list of engagements" do
      get api_v1_engagements_path
      expect(response).to be_successful
      expect(JSON.parse(response.body)).to include(include('id' => engagement.id, 'status' => engagement.status.upcase))
    end
  end

  describe 'PATCH /engagements/:id' do
    let(:params) do
      {
        engagement: {
          status: 'ACTIVE'
        }
      }
    end

    it 'returns 204 no content' do
      patch api_v1_engagement_path(engagement.id), params: params

      expect(response).to be_no_content
    end

    it 'updates an engagement' do
      expect {
        patch api_v1_engagement_path(engagement.id), params: params
      }.to change { engagement.reload.status }.from('unstarted').to('active')
    end

  end
end
