import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/data-models/Person';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // campos vacíos
  emptyname = false;
  emptyemail = false;
  emptypassword = false;
  emptycountry = false;
  shortpassword = false;
  notemail = false;
  exists = false;
  persons: Array<Person>;
  persona: Person = new Person(
    0, '', '', '', '', '', '', [], []
  );

  constructor(private signupService: SignupService,
              private router: Router ) { }

  ngOnInit(): void {
    this.persons = this.signupService.getPersons();
  }

  addPerson(events?) {
    if (!this.persona) { return; }
    // campos vacíos
    if (!this.persona.fullname) { this.emptyname = true; } else { this.emptyname = false; }
    if (!this.persona.email) { this.emptyemail = true; } else { this.emptyemail = false; }
    if (!this.persona.password) { this.emptypassword = true; } else { this.emptypassword = false; }
    if (!this.persona.country) { this.emptycountry = true; } else { this.emptycountry = false; }
    if (this.emptycountry || this.emptyemail || this.emptyname || this.emptypassword ) {
      return;
    }
    // contraseña corta
    if (this.persona.password.length < 5) {
      this.shortpassword = true;
      return;
    } else { this.shortpassword = false; }

    // no es correo electrónico
    if (this.persona.email.indexOf('@') === -1) {
      this.notemail = true;
      return;
    } else {
      this.notemail = false;
    }

    // ya existe la cuenta
    if (this.persons.find(person => person.email === this.persona.email)) {
      this.exists = true;
      return;
    }

    // cuenta no existe
    this.signupService.createPerson(this.persona);
    // console.log(this.persona);
    // this.signupService.getPersons();
    alert('Se ha creado su cuenta.');
    this.router.navigate(['./login']);
  }

}
