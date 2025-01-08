import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car/car.service';
import {Car} from '../../model/car.model';
@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrl: './list-car.component.css'
})
export class ListCarComponent implements OnInit {
  cars:Car[]=[];

  constructor(private carService:CarService){};

  ngOnInit(): void {
      this.carService.getAllCars().subscribe(
        (data: Car[])=>{
          this.cars=data;
          console.log('Cars loaded:',data);
        },
        (error)=>{
          console.error('Error fetching cars: ',error);
        }
      )
  }
}
