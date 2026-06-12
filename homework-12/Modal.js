export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.closeBtn = this.modal?.querySelector('.modal-close-button');
    
    if (this.closeBtn) {
      this.closeBtn.removeEventListener('click', this.close);
    }

    this.#initOpen(buttonId);
  }

  open = () => {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');

    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.close);
    }
  }

  close = () => {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');

    this.#removeListeners();
  }
  #removeListeners() {
    this.overlay.removeEventListener('click', this.close);
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener('click', this.open);
    }
  }
}