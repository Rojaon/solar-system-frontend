import { Component } from '@angular/core';
import { GetAllMoonsService } from 'src/app/services/get-all-moons.service';

@Component({
  selector: 'app-add-moon-form',
  templateUrl: './add-moon-form.component.html',
  styleUrls: ['./add-moon-form.component.css']
})
export class AddMoonFormComponent {

  name: string = "";
  diameterInKm: number = 0;
  yearDiscovered: string = "";
  planetName: string = "";
  img: string = "";

  constructor(private getAllMoonsService: GetAllMoonsService) {}

  postMoon(): void {
    const body = {
      name: this.name,
      diameterInKm: this.diameterInKm,
      yearDiscovered: this.yearDiscovered,
      planetName: this.planetName,
      img: this.img,
    };

    this.getAllMoonsService.postMoon(body).subscribe({
      next: (data) => {
        alert("Moon created successfully");
      },
      error: (e) => {
        console.log(e);        
      }
    })
  }

}
