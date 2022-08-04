import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem("auth_status") === "true"
  }

  logout() {
    localStorage.removeItem("auth_status");
    this.router.navigate(['/']);
    window.location.reload();
  }
}
