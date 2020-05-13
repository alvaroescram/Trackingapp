import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup/signup.service';
import { Router } from '@angular/router';
import { Person } from 'src/app/data-models/Person';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emptyemail = false;
  emptypassword = false;
  exists = false; // para decir que la cuenta no existe
  wrongpassword = false;
  changingPassword = false;
  matchingpasswords = false;

  persons: Array<Person>;
  email: string;
  password: string;
  newpassword: string;

  constructor(private signupService: SignupService,
              private router: Router ) { }

  ngOnInit(): void {
    this.email = '';
    this.password = '';
    this.persons = this.signupService.getPersons();
    this.newpassword = '';
  }

  loginPerson(events?) {
    // Algo está vacío
    if (!this.email) { this.emptyemail = true; } else { this.emptyemail = false; }
    if (!this.password) { this.emptypassword = true; } else { this.emptypassword = false; }
    if (this.emptyemail || this.emptypassword) {
      return;
    }

    console.log('Usuario:', this.email, 'Contraseña: ', this.password);
    // Encuentra a la persona por el correo
    const auxPerson = this.signupService.getPersonbyEmail(this.email);

    // No encuentra a la persona
    if (auxPerson === undefined) {
      this.exists = true;
      return;
    } else {
      this.exists = false;
    }

    // Verificar contraseña
    // Temporal, para poner en back-end
    if (auxPerson.password !== this.password) {
      // contraseña no es correcta
      this.wrongpassword = true;
      return;
    } else {
      this.wrongpassword = false;
      this.signupService.logUser(auxPerson.personId);
      alert('¡Ha abierto sesión!');
      this.router.navigate(['']);
    }
      // console.log('Persona en la lista: ', auxPerson);
  }

  clickPasswordChange() {
    this.changingPassword = true;
      // console.log('Cambiando contraseñas');
  }

  changePassword(events?) {
    const auxPerson = this.signupService.getPersonbyEmail(this.email);
    console.log(auxPerson);

    // Contraseña igual a la anterior
    if (this.newpassword === auxPerson.password) {
      this.matchingpasswords = true;
      return;
    } else {
      this.matchingpasswords = false;
      this.signupService.changePersonPassword(auxPerson.personId, this.newpassword);
      alert('Cambiando contraseñas');
        // console.log(this.signupService.getPersonbyId(auxPerson.personId));
      this.changingPassword = false;
    }
  }
}
