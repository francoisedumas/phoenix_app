# frozen_string_literal: true

class HeroBannerComponent < ViewComponent::Base
  def initialize(page:)
    super
    @page = page
  end
end
