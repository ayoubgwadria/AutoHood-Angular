import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../services/car/car.service';
import { Car } from '../../model/car.model';
import { CarResponse } from '../../services/car/DTO/CarResponse';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'], 
})
export class CarComponent implements OnInit {
  car!:Car; 
  message :string='';
  

  constructor(private route: ActivatedRoute, private carService: CarService) {}

  ngOnInit(): void {
    const carId = this.route.snapshot.paramMap.get('id'); 
    if (carId) {
      this.carService.getCarById(+carId).subscribe(
        (response: CarResponse) => {
          this.car = response.car;
          this.message=response.message; 
          console.log(this.car);
        },
        (error) => {
          console.error('Error fetching car details:', error);
        }
      );
    }
  }
}
