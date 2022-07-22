# frozen_string_literal: true

class MenuLinkComponent < ViewComponent::Base
  attr_reader :path, :options

  ACTIVE_CLASSES = "bg-gray-900 text-white"
  INACTIVE_CLASSES = "text-gray-300 hover:bg-gray-700 hover:text-white"

  def initialize(path:, name:, **options)
    super
    @path = path
    @name = name
    @options = options || {}
  end

  def status_classes
    active? ? ACTIVE_CLASSES : INACTIVE_CLASSES
  end

  def display_block
    "block" if options&.key?(:display_block)
  end

  private

  def active?
    request.path == @path
  end
end
