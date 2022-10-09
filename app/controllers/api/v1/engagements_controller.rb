class Api::V1::EngagementsController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
    engagements = Engagement.all

    render json: engagements
  end

  def show
    engagement = Engagement.find(params[:id])

    render json: engagement
  end

  def update
    engagement = Engagement.find(params[:id])

    if engagement.update(engagement_params)
      head :no_content
    else
      render json: { error: 'Unable to update Engagement' }, status: 400
    end
  end

  private

  def engagement_params
    params.require(:engagement).permit(:name, :status)
  end
end
