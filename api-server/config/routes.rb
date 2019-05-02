Rails.application.routes.draw do
  namespace "api" do
    namespace "v1" do
      resources :guides, only: [:index, :show]
      resources :guides_recent, only: [:index]
    end
  end
  # If there is a request to a route that does not exist, it is redirected to handled at application#routing_error
  match '*path', :to => 'application#routing_error', via: [:get, :post, :delete, :put, :patch]
end
