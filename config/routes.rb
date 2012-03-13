Leroy::Application.routes.draw do
  match "index" => "pages#index"
  match "services" => "pages#services"
  match "schedule" => "pages#schedule"
  match "prices" => "pages#prices"
  root :to => 'pages#index'
end
