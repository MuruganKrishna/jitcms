import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http'
import {VerifyService} from './verify.service'

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor {

  constructor(private inject:Injector) { }
  intercept(req,next){
    let jwt = this.inject.get(VerifyService);
    let jwttoken = jwt.gettoken()
    let newtoken = `Bearer ${jwttoken}`
    if(jwttoken != null)
    {
      let token = req.clone({
        headers:req.headers.set(
          "Authorization", newtoken
        )
      })
      return next.handle(token)
    }
    else{
      return next.handle(req)
    }
  }

}
