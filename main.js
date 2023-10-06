export default class general {
  #id;
  constructor(id = 0) {
    this.#id = id;
  }

  get Id () {
    return this.#id;
  }
  set Id (value) {
    this.#id = value;
  }
}