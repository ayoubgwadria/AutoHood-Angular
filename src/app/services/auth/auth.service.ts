import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl='http://localhost:8082';

interface AuthenticationRequest {
  email: string;
  password: string;
}

interface RegisterRequest {
  firstname : string;
  lastname : string;
  email :string;
  password :string;
}

interface AuthenticationResponse {
  token: string;
  message:string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = `${apiUrl}/api/auth`;

  constructor(private http: HttpClient) {}

  login(request: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/authenticate`, request);
  }
  register(request: RegisterRequest): Observable<AuthenticationResponse>{
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/register`,request);
  }
}
