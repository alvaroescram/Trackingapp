import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SignupService } from 'src/app/auth/signup/signup.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  isLogged: boolean;
  currentSession: number;

  @Output() ToggleClose = new EventEmitter();

  constructor(private signupService: SignupService) { }

  ngOnInit(): void {
    this.isLogged = this.signupService.isLoggedIn();
    this.currentSession = this.signupService.getCurrentSession();
  }

  close() {
    this.isLogged = this.signupService.isLoggedIn();
    console.log(this.signupService.isLoggedIn());
    this.ToggleClose.emit();
  }

}
