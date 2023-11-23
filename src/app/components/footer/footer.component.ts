import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  showFooter: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  
  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.showFooter = !this.activatedRoute.firstChild?.snapshot.data['hideFooter'];
      });
  }

}
