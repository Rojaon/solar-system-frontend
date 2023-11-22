import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetAllMoonsService } from 'src/app/services/get-all-moons.service';

@Component({
  selector: 'app-moon-datail',
  templateUrl: './moon-datail.component.html',
  styleUrls: ['./moon-datail.component.css']
})
export class MoonDatailComponent  implements OnInit  {
  id: string = "";
  moon: any = {};

  constructor(private activatedRoute: ActivatedRoute, private getAllMoonsService: GetAllMoonsService,private router: Router) {
  }
  ngOnInit(): void {
    console.log(this.activatedRoute);

    this.id = this.activatedRoute.snapshot.params['id'];

    this.getAllMoonsService.getMoon(this.id).subscribe({
      next: (data) => {
        console.log(data);
        this.moon = data;
      },
      error: (e) => {
        console.log(e);        
      }
    })

  }

  removeMoon(id: string): void {
    this.getAllMoonsService.deleteMoon(this.id).subscribe({
      next: (data) => {
        alert("Moon deleted successfully");
        this.router.navigate(['/moon']);
      },
      error: (e) => {
        console.log(e);        
      }
    })
  }

}
