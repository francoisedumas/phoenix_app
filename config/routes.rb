# frozen_string_literal: true

Rails.application.routes.draw do
  get "language", to: "application#language"
  scope "(:locale)", locale: /th|en/ do
    get "/:locale" => "pages#home"
    root to: "pages#home"
    get "about", to: "pages#about"
  end
end
