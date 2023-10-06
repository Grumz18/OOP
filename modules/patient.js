import general from "../main";

export default class patient extends general {
  #surname;
  #doc;
  #data;
  constructor(id = 0, surname ='', doc='', data ='') {
    super(id);
    this.Surname(surname);
    this.Docum(doc);
    this.Data(data);
  }
  set Surname(value) {
    this.#surname = value;
  }
  set Docum(value) {
    this.#doc = value;
  }
  set Data(value) {
    this.#data = value;
  }
  get Surname() {
    return this.#surname;
  }
  get Docum() {
    return this.#doc;
  }
  get Data() {
    return this.#data;
  }
  get InfoPatient() {
    let info = `Пациент: ${this.Surname} \nИнформация: ${this.Docum} \nДата: ${this.Data}`;
    return info;
  }
}