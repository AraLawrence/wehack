Rails.application.routes.draw do
  get 'api/gif' => 'gifs#new'

  get 'images/new'

  get 'api/quote' => 'quote#new'

  get 'quote/create'

  get 'quote/destroy'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
