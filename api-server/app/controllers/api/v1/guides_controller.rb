module Api
  module V1
    class GuidesController < ApplicationController
      # Get all guides
      def index
        guides = Guide.order("created_at DESC");
        render json: {
            status: "SUCCESS",
            data: guides
        }, status: :ok
      end

      # Get a single guide by id with its locations
      def show
        guide = Guide.find(params[:id])
        render json: {
            status: "SUCCESS",
            data: {
                guide: guide,
                locations: guide.locations
            }
        }, status: :ok
      end

    end
  end
end