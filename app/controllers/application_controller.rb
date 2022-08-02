# frozen_string_literal: true

class ApplicationController < ActionController::Base
  before_action :set_locale, :set_language

  def default_url_options
    { locale: I18n.locale }
  end

  def language
    redirect_to "/#{params[:link]['url']}"
  end

  private

  def set_language
    path = request.path.gsub("/en", "").gsub("/th", "")
    @language = "#{params[:locale]}#{path}" if params[:link].nil?
    @language = "#{params[:link]['url']}#{path}" unless params[:link].nil?
    @english_link = "en#{path}"
    @thai_link = "th#{path}"
  end

  def set_locale
    I18n.locale = params[:locale]&.to_sym || I18n.default_locale
  end
end
