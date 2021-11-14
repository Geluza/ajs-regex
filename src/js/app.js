export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUserName() {
    return /[a-zA-Z]+[\d_-]*/.test(this.name)
     && /^[^\d_-]/.test(this.name)
     && !/\d{4,}/.test(this.name)
    && /[^\d_-]$/.test(this.name);
  }
}
