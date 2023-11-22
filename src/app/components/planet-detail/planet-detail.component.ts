import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetAllPlanetsService } from 'src/app/services/get-all-planets.service';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent {

  id: string = "";
  planet: any = {};
  isShown: boolean = false;

  registerForm: FormGroup;
  diameterInKm: FormControl;
  
  constructor(private activatedRoute: ActivatedRoute, private getAllPlanetsService: GetAllPlanetsService,private router: Router) {
    this.diameterInKm = new FormControl("", Validators.required);
    this.registerForm = new FormGroup({
      diameterInKm: this.diameterInKm
    })
  }
  ngOnInit(): void {
    console.log(this.activatedRoute);

    this.id = this.activatedRoute.snapshot.params['id'];

    this.getAllPlanetsService.getPlanet(this.id).subscribe({
      next: (data) => {
        console.log(data);
        this.planet = data;
      },
      error: (e) => {
        console.log(e);        
      }
    })

  }

  changeIsShown(): void {
      this.isShown = !this.isShown;
    }

  updateDiameter(): void {

    this.getAllPlanetsService.patchPlanet(this.registerForm.value,this.id).subscribe({
      next: (data) => {
        console.log(this.registerForm.value);
        
        alert("Planet updated successfully");
        window.location.reload();
      },
      error: (e) => {
        console.log(e);        
      }
    })
  }
}
