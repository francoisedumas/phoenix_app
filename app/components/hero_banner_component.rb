# frozen_string_literal: true

class HeroBannerComponent < ViewComponent::Base
  def initialize(page:)
    @page = page
  end
end
