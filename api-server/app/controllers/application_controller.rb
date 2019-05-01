class ApplicationController < ActionController::API
  # Handling all errors here to avoid repeating code in controller
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, ActiveRecord::ActiveRecordError, with: :render_not_found_response
  rescue_from AbstractController::ActionNotFound, with: :render_action_not_found_response
  rescue_from StandardError, with: :render_standard_error_response

  def render_unprocessable_entity_response(exception)
    render json: {
        status: "ERROR",
        error: exception.record.errors
    }, status: :unprocessable_entity
  end

  def render_not_found_response(exception)
    render json: {
        status: "ERROR",
        error: exception.message
    }, status: :not_found
  end

  def render_action_not_found_response(exception)
    render json: {
        status: "ERROR",
        error: exception.message
    }, status: :not_implemented
  end

  def render_standard_error_response(exception)
    render json: {
        status: "ERROR",
        error: exception.message
    }, status: :not_implemented
  end

end
