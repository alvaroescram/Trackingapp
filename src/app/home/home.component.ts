import { Component, OnInit } from '@angular/core';
import { SignupService } from '../auth/signup/signup.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  islogged = false;

  constructor(private signupService: SignupService) { }

  ngOnInit(): void {
    this.islogged = this.signupService.isLoggedIn();
    console.log(this.islogged);
  }

}
