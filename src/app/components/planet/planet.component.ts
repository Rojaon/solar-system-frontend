import { Component, OnInit } from '@angular/core';
import { GetAllPlanetsService } from 'src/app/services/get-all-planets.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent  implements OnInit {
  planets: any[] = [];

  constructor(private getAllPlanetsService: GetAllPlanetsService) {}

  ngOnInit(): void {
    this.getAllPlanetsService.getPlanets().subscribe({
      next: (data) => {
        console.log(data);
        this.planets = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

}
