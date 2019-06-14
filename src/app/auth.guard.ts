import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate} from '@angular/router';
import { VerifyService } from './verify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(private auth:VerifyService,private route:Router){}
  canActivate(): boolean {
    if(this.auth.loggedin()){
     return true
    }
    else{
        this.route.navigate(['login'])
        return false
    }
  }
  
}
