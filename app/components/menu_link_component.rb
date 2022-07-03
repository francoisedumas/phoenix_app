# frozen_string_literal: true

class MenuLinkComponent < ViewComponent::Base
  attr_reader :path

  ACTIVE_CLASSES = "bg-gray-900 text-white"
  INACTIVE_CLASSES = "text-gray-300 hover:bg-gray-700 hover:text-white"

  def initialize(path:, name:)
    super
    @path = path
    @name = name
  end

  def status_classes
    active? ? ACTIVE_CLASSES : INACTIVE_CLASSES
  end

  private

  def active?
    request.path == @path
  end
end
