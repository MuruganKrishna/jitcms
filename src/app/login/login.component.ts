import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Injectable,Injector } from '@angular/core';
import {VerifyService} from '../verify.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient,private inject:Injector) { }

  ngOnInit() {
  }
  private url = 'http://localhost:3000/user'
  obj
  obj1
  login(username,password)
  {
    this.obj={"auth": {"email": username, "password": password}}
    this.obj1={"email": username, "password": password}
    let jwt = this.inject.get(VerifyService);
    let jwttoken = jwt.gettoken()
    let newtoken = `${jwttoken}`
   
    // const config = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Authorization': newtoken
    //   })
    // }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json', //<- To SEND XML
        'Accept':  'application/json',       //<- To ask for XML
        'Authorization' : newtoken           //<- b/c Angular understands text
      })
    };
    // $.ajax({
    //   url: this.url,
    //   type: 'POST',
    //   // Fetch the stored token from localStorage and set in the header
    //   headers: {"Authorization": newtoken}
    // });
    // console.log(username,password,newtoken);
    this.http.get(this.url,httpOptions).subscribe(data => { 
      console.log(data)
    // // localStorage.setItem('jwt',data.jwt) 
    })
    
  }
  auth
  // login(username,password)
  // {
  //   this.auth={"auth":{"email":username,"password":password}}
  //   this.http.post
  // }
  
  // u(){
  //   // this.login("Murugan","Murugan")
  //   // var header=new HttpHeaders().set("Authorization","JWT "+this.jwt)
  //   // http://localhost:3000/user
  //   // this.http.post('http://localhost:3000/user',header).subscribe(data => {console.log(data)})
  //   // curl -H "Authorization: JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NjAyNjY4MDksInN1YiI6Mn0.eYpPC1429sP2oulD1zGahMNdTyjyyHe4HI6cLLi9xkg" http://localhost:3000/user
    
  // }

}
