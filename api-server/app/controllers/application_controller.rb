class ApplicationController < ActionController::API
  # Handling all errors here to avoid repeating code in controller
  # This is not the best way to handle routes,
  # as it would be hard to scale the application under the current implementation
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def render_not_found_response
    render json: {
        status: "ERROR",
        message: "Resource not found"
    }, status: :not_found
  end

  # Used to handle routing errors
  def routing_error
    render json: {
        status: "ERROR",
        message: "Route does not exist"
    }, status: :not_found
  end

  def action_missing(m, *args, &block)
    Rails.logger.error(m)
    redirect_to '/*path'
  end

end
