import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';

@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.css']
})
export class HeaderTwoComponent implements OnInit {
  isCollapsed = true;
  userSignedIn = false;
  user: string;
  data: User;

  constructor(private router: Router) { }
  ngOnInit() {
    if (sessionStorage.getItem('User')) {
      this.userSignedIn = true;
      this.data = JSON.parse(sessionStorage.getItem('User'));
      this.user = this.data['user'].firstName;
    }
  }

  logOut() {
    sessionStorage.removeItem('User');
    sessionStorage.removeItem('event');
    this.router.navigate(['/']);
  }

}
