import general from "../main";
export default class doctor extends general {
  #surname;
  #profile;
  #time;
  constructor(id = 0, surname ='', profile='', time='') {
    super(id);
    this.#surname = surname;
    this.profile = profile;
    this.time = time;
  }
  set Surname(value) {
    this.#surname = value;
  }
  set Profile(value) {
    this.#profile = value;
  }
  set Time(value) {
    this.#time = value;
  }
  get Surname() {
    return this.#surname;
  }
  get Profile() {
    return this.#profile;
  }
  get Time() {
    return this.#time;
  }
  get InfoDoctor() {
    let info = `Доктор: ${this.Surname} \n Профиль: ${this.Profile} \nВремя: ${this.Time}`;
    return info;
  }
}