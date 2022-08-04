import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientlogin',
  templateUrl: './clientlogin.component.html',
  styleUrls: ['./clientlogin.component.scss']
})
export class ClientloginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
 login(){
  console.log("login");
  this.router.navigate(['dashboard']);
 }
}
