import { Component } from '@angular/core';
import {Logindetails} from '../app/login_cre';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http:HttpClient){}
  title = 'jitcms';
  }
