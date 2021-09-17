import outsideClick from './outsideclick.js';
export default class DropDownMenu {
  constructor(dropDownMenus, events) {
    this.dropDownMenus = document.querySelectorAll(dropDownMenus);
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
    this.activeClass = 'active';
    // define touchstart e click como argumento padrao
    // de events caso o usuario nao defina
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;
  }
  // ativa o dropdownMenu e adiciona a função
  // que observa o clique fora dele
  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }
  // adiciona os eventos ao dropdownMenu
  addDropDownMenuEvent() {
    this.dropDownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }

  init() {
    if (this.dropDownMenus.length) this.addDropDownMenuEvent();
    return this;
  }
}
