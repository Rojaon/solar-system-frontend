import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetAllMoonsService } from 'src/app/services/get-all-moons.service';

@Component({
  selector: 'app-add-moon-form',
  templateUrl: './add-moon-form.component.html',
  styleUrls: ['./add-moon-form.component.css']
})
export class AddMoonFormComponent {

  registerForm: FormGroup;
  name: FormControl;
  diameterInKm: FormControl;
  yearDiscovered: FormControl;
  planetName: FormControl;
  img: FormControl;

  constructor(private getAllMoonsService: GetAllMoonsService, private router: Router) {
    this.name = new FormControl("", Validators.required);
    this.diameterInKm = new FormControl("", Validators.required);
    this.yearDiscovered = new FormControl("", Validators.required);
    this.planetName = new FormControl("", Validators.required);
    this.img = new FormControl("");

    this.registerForm = new FormGroup({
      name: this.name,
      diameterInKm: this.diameterInKm,
      yearDiscovered: this.yearDiscovered,
      planetName: this.planetName,
      img: this.img,
    })
  }

  postMoon(): void {

    this.getAllMoonsService.postMoon(this.registerForm.value).subscribe({
      next: (data) => {
        alert("Moon created successfully");
        this.router.navigate(['/']);
      },
      error: (e) => {
        console.log(e);        
      }
    })
  }

}
