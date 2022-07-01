import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = ["content"];
  static values = { class: String }

  connect() {
    console.log("hello")
  }
  toggle() {
    this.contentTargets.forEach( (content) => content.classList.toggle(this.classValue) )
  }
}
