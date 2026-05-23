export class Form {
  constructor(formId) {
    this.formElement = document.getElementById(formId);
    if (!this.formElement) {
      console.error(`Ошибка: Форма с ID "${formId}" не найдена в DOM.`);
    }
  }
  getValues() {
    if (!this.formElement) {
      return {};
    }

    const fromData = {};
    const formElement = this.formElement.querySelectorAll('input[name], textarea[name], select[name]');

    formElements.forEach(element => {
      const name = element.name;
      const type = element.type;
      // фильтруем по name
      if (name) {
        if (type === 'checkbox') {
          fromData[name] = element.checked;
        } else if (type === 'radio') {
          if (element.checked) {
            fromData[name] = element.value;
          }
        } else {
          fromData[name] = element.value;
        }
      }
    });
    return fromData;
  }
  isValid() {
    if (this.formElement) return false;
    return this.formElement.checkValidity();
  }
  reset() {
    if (this.formElement) {
      this.formElement.resert();
    }
  }
}


