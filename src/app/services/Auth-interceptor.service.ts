import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Step 1: Retrieve the auth token from localStorage or any other method
    const token = localStorage.getItem('authToken');
    
    // Step 2: If the token exists, clone the request and add the Authorization header
    if (token) {
      const headers = request.headers.set("Authorization", `Bearer ${token}`);
      const clonedRequest = request.clone({headers: headers});

      // Step 3: Log the request for debugging
      console.log("Authorization Header Sent:", `Bearer ${token}`);
      
      // Step 4: Pass the cloned request to the next handler
      return next.handle(clonedRequest);
    }

    // If no token is present, proceed with the original request
    return next.handle(request);
  }
}

