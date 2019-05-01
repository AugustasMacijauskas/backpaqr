module Api
  module V1
    class GuidesRecentController < ApplicationController
      # Get all guides with their most recent locations
      def index
        guides = Guide.guides_with_recent_locations(params[:how_many])

        render json: {
            status: "SUCCESS",
            data: guides
        }, status: :ok
      end

    end
  end
end