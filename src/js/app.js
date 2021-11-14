export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUserName() {
    // return /^[a-zA-Z]+\d{0-3}\_?\-?[a-zA-Z]+$/.test(name);
    // return
    if (/^[a-zA-Z]+/.test(this.name) === true
    && /\d{4,}/.test(this.name) === false
    && /[-_]{0,1}/.test(this.name) === true
    && /[a-zA-Z]+$/.test(this.name) === true) {
      return true;
    }
    return false;
  }
}
