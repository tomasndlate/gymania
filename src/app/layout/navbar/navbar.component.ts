import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  ngOnInit(){
  }

  openRoutes(el: HTMLElement, btnEl: HTMLElement){
    let menu = el;
    let menuButton = btnEl;

    let menuState = menu.style.display;
    let newMenuState = menuState != 'flex' ? 'flex' : 'none';

    console.log(newMenuState)

    menu.style.display = newMenuState;

    if (newMenuState === 'flex'){
      menuButton.classList.remove('nav-mobile-drop-button-open');
      menuButton.classList.add('nav-mobile-drop-button-close');
    } else {
      menuButton.classList.remove('nav-mobile-drop-button-close');
      menuButton.classList.add('nav-mobile-drop-button-open');
    }
  }

}
