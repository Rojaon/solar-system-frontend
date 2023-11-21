import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isHover:boolean = false;

  mouseover() {
    this.isHover = !this.isHover;
  }

}
