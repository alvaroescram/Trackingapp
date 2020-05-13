import { Component, OnInit } from '@angular/core';
import { SignupService } from '../auth/signup/signup.service';
import { Person } from '../data-models/Person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  editMode = false;
  // Persona para sesión
  persona: Person; /* = new Person(
    0, '', '', '', '', '', '', [], []
  ); */
    /*{
    personId: 0,
    fullname: '',
    email: '',
    terrainName: '',
    country: '',
    password: '',
    twitterAt: '',
    ownedAnimals: [],
    terrainNodes: []
  };*/

  constructor(private signupService: SignupService,
              private router: Router  ) { }

  ngOnInit(): void {
    if (!this.signupService.isLoggedIn) {
      this.router.navigate(['']);
    }

    this.persona = this.signupService.getCurrentPerson();
    // this.persona = new Person();
    console.log(this.persona);
  }

  editProfile() {
    this.editMode = !this.editMode;
  }

  saveChanges(events?) {
    alert('Se ha modificado su cuenta');
    this.editMode = false;
    this.signupService.modifyPerson(this.persona);
  }
}
