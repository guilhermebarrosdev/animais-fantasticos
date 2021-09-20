import outsideClick from './outsideclick.js';
export default class MenuMobile {
  constructor(menuButton, menuList, eventos) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.openMenu = this.openMenu.bind(this);
    this.activeClass = 'active';
    // define touchstart e click como argumento padrao
    // de events caso o usuario nao defina
    if (eventos === undefined) this.eventos = ['touchstart', 'click'];
    else this.eventos = eventos;
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.eventos, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.eventos.forEach((evento) =>
      this.menuButton.addEventListener(evento, this.openMenu)
    );
  }
  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
