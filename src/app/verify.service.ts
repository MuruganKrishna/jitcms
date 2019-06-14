import { Injectable } from '@angular/core';
  import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  constructor() { }
  loggedin(){
    return !!localStorage.getItem('jwt')
  }
  gettoken(){
    return localStorage.getItem('jwt')
  }
  
}
