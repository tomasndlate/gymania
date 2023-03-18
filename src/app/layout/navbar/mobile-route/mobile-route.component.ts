import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-route',
  templateUrl: './mobile-route.component.html',
  styleUrls: ['./mobile-route.component.scss']
})
export class MobileRouteComponent {

  @Input() routeName = 'a';
  @Input() route = '';
  @Input() subRoutes = [{name: 'a', route:''}, {name: 'b', route:''}];

  openRoutes(el: HTMLElement, btnEl: HTMLElement){
    let menu = el;
    let menuButton = btnEl;

    let buttonState = menuButton.style.display;
    let newButtonState = buttonState != 'flex' ? 'flex' : 'none';

    console.log(menuButton)
  }

  openCloseSubRoutes(el: HTMLElement){

    let arrow = el.childNodes[0].childNodes[1] as HTMLElement;
    let routes = el.childNodes[1] as HTMLElement;

    let routesState = routes.style.display;
    let newRoutesState = routesState != 'flex' ? 'flex' : 'none';
    routes.style.display = newRoutesState;

    if(newRoutesState === 'flex'){
      arrow.classList.remove('bi-chevron-up');
      arrow.classList.add('bi-chevron-down');
    } else {
      arrow.classList.remove('bi-chevron-down');
      arrow.classList.add('bi-chevron-up');
    }
  }
}
