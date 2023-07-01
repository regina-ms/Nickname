export default class Validator {
  static validateUsername(name) {
    return /^[a-z]+[-_a-z]*\d{0,3}[-_]*[a-z]+$/g.test(name);
  }
}
