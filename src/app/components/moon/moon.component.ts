import { Component, OnInit } from '@angular/core';
import { GetAllMoonsService } from 'src/app/services/get-all-moons.service';

@Component({
  selector: 'app-moon',
  templateUrl: './moon.component.html',
  styleUrls: ['./moon.component.css']
})
export class MoonComponent  implements OnInit  {
  moons: any[] = [];

  constructor(private getAllMoonsService: GetAllMoonsService) {}

  ngOnInit(): void {
    this.getAllMoonsService.getMoons().subscribe({
      next: (data) => {
        console.log(data);
        this.moons = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

}
