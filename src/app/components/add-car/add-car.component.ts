import { Component } from '@angular/core';
import { CarRequest } from '../../services/car/DTO/CarRequest';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../../services/car/car.service';
import { CarResponse } from '../../services/car/DTO/CarResponse';
import {jwtDecode} from 'jwt-decode';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css',
})
export class AddCarComponent {
  carRequest: CarRequest={ make: '', model: '', year: 0, price: 0, description: '' };
  errorMessage: string = '';
  successMessage: string = '';
  isLoading:boolean=false;

  constructor( private carService: CarService,private router:Router) {}

  getVendorIdFromToken(): number | null {
    const token = localStorage.getItem('authToken');
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        return decodedToken.userId; 
      } catch (e) {
        console.error('Error decoding token:', e);
        return null;
      }
    }
    return null;
  }

  onSubmit() {
    const vendorId = this.getVendorIdFromToken();
    if(vendorId){
      this.carService.addCar(this.carRequest, vendorId).subscribe(
        (response: CarResponse) => {
          this.successMessage = response.message;
          this.isLoading=true;
          setTimeout(()=>{
          this.router.navigate(['/car', response.car.id]);
          },2000)
        },
        (error) => {
          console.error('Error adding car details:', error);
        }
      );
    }
 
  }
}
