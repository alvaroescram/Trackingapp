import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SignupService } from 'src/app/auth/signup/signup.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() Toggle = new EventEmitter();

  constructor(private signupService: SignupService) { }

  ngOnInit() {
  }

  onToggleSidenav() {

    this.Toggle.emit(this.signupService.isLoggedIn());

  }
}
