# frozen_string_literal: true

class ServiceCardComponent < ViewComponent::Base
  def initialize(image:, title:, description:)
    super
    @image = image
    @title = title
    @description = description
  end

end
