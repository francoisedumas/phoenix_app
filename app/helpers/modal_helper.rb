# frozen_string_literal: true

module ModalHelper
  ##
  # Works with modal_controller.js
  # Usage:
  # <%= button_tag "Hello", data: modal_with(render("form", order: @order)) %>

  def modal_with(content)
    # See application.html.erb
    # The modal template is inserted in the layout only if needed
    content_for(:need_modal?, true)

    { controller: "modal", modal_content_value: content, action: "click->modal#open" }
  end
end
