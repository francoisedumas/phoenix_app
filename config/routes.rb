Rails.application.routes.draw do
  scope "(:locale)", locale: /th|en/ do
    get '/:locale' => 'pages#home'
    root to: "pages#home"
    get "about", to: "pages#about"
  end
end
