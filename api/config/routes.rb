Rails.application.routes.draw do

  get 'api/gif' => 'gifs#new'

  get 'api/quote' => 'quote#new'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
