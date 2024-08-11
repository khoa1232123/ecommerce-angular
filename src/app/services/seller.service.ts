import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISignUp } from '../data-type';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  constructor(private http: HttpClient) {}

  userSignUp = (data: ISignUp) => {
    return this.http.post('http://localhost:3000/seller', data);
  };
}
