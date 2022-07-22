import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="modal"

// to use this modal component you just have do add the controller on the trigger element
// and provide the html with the data-modal-content-value attribute
// e.g:
//    <div data-controller="modal" data-action="click->modal#open" data-modal-content-value="<button> A button displayed in my modal</button>"></div>
// If you need that an element triggers the close of the modal, you just have to add data-modal="close" on it
// e.g:
//    <div data-controller="modal"
//         data-action="click->modal#open"
//         data-modal-content-value="
//      <button type="button"> This button will do nothing</button>
//      <button type="button" data-modal="close">This button will close the modal</button>
//    "></div>
//
// See ModalHelper#modal_with helper for usage in erb files

export default class extends Controller {
  static values = { content: String }

  open() {
    if (!this.modal) {
      this.#buildModal()
    }
    document.body.appendChild(this.modal)
  }

  close() {
    this.modal.remove()
  }

  // build the modal from the template inserted in application.html.erb
  #buildModal() {
    this.modal = this.#cloneTemplate()

    this.#insertContent()

    // add close trigger on all element with `data-modal="close"` within the whole modal
    this.modal.querySelectorAll('[data-modal=close]').forEach(this.#setCloseEvent.bind(this))
  }

  #cloneTemplate() {
    const modalTemplate = document.getElementById('modal-template')
    return modalTemplate.content.firstElementChild.cloneNode(true)
  }

  #insertContent() {
    const contentElement = this.modal.querySelector('.modal-content')
    contentElement.innerHTML = this.contentValue
  }

  #setCloseEvent(element) {
    element.addEventListener('click', this.close.bind(this))
  }
}
