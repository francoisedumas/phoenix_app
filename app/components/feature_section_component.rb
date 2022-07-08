# frozen_string_literal: true

class FeatureSectionComponent < ViewComponent::Base
  attr_reader :options

  def initialize(title:, description:, **options)
    super
    @title = title
    @description = description
    @options = options || {}
  end

  def svg_left?
    options&.key?(:svg_left)
  end

  def svg_right?
    options&.key?(:svg_right)
  end
end
