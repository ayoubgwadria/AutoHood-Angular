  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import {Car} from '../../model/car.model';
  import { CarResponse } from './DTO/CarResponse';
  import { CarRequest } from './DTO/CarRequest';

  const apiUrl='http://localhost:8082'

  @Injectable({
    providedIn: 'root'
  })
  export class CarService {
    private  baseUrl=`${apiUrl}/api/cars`

    constructor(private http : HttpClient) { }

    getAllCars():Observable<Car[]>{
      return this.http.get<Car[]>(`${this.baseUrl}/allcars`);
    }
    getCarById(id:number):Observable<CarResponse>{
      return this.http.get<CarResponse>(`${this.baseUrl}/id/${id}`)
    }
    addCar(request:CarRequest,vendorId:number):Observable<CarResponse>{
      return this.http.post<CarResponse>(`${this.baseUrl}/addcar/${vendorId}`,request);
    }
  }
