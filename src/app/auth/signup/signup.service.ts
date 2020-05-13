import { Injectable } from '@angular/core';
import { Person } from 'src/app/data-models/Person';
import { AnimalService } from 'src/app/data-models/animal.service';

let incrementID = 0;
let currentSession = 0; // usuario actual

@Injectable({
  providedIn: 'root'
})

export class SignupService {
  persons: Array<Person> = [
    // alumno de prueba
    /*{
      personId: 0,
      fullname: 'Test usuario',
      email: 'prueba@test.com',
      terrainName: 'rancho genérico',
      country: 'Mexico',
      password: '12345',
      twitterAt: 'test',
      ownedAnimals: [],
      terrainNodes: []
    }*/
    new Person(
      0,
      'Test usuario',
      'prueba@test.com',
      'rancho genérico',
      'Mexico',
      '12345',
      'test',
      [],
      []
    )
  ];

  constructor(private animalService: AnimalService/*,
              private terrainService: TerrainService*/) { }

  generateID(): number {
    incrementID++;
    return incrementID;
  }

  createPerson(objct) {
    objct.personId = this.generateID();
    // objct.rol = 1; para admin
    console.log(objct);
    this.savePerson(objct);
    this.persons.push(objct);
  }

  savePerson(objct) {
    console.log('Se esta guadando el obj con id', objct, objct.id);
    // this.logUser(objct.id);
    // invocar guardado en el back-end
  }

  // Invocar logUser DESPUÉS del la comprobación de screenname y contraseña al presionar login, no al crear cuenta.
  logUser(id: number) {
    console.log('Iniciando sesión como persona ', id);
    currentSession = id;
  }

  isLoggedIn(): boolean {
    if (currentSession) {
      return true;
    }
    return false;
  }

  logoutUser() {
    console.log('Cerrando sesión de persona ', currentSession);
    currentSession = 0;
  }

  getCurrentSession(): number {
    return currentSession;
  }

  getCurrentPerson(): Person {
    console.log('Current user logged: ', currentSession);
    console.log(this.getPersonbyId(currentSession));
    return this.getPersonbyId(currentSession);
  }

  getPersonbyId(id: number): Person {
    return this.persons[id];
  }

  getPersonbyEmail(email: string) {
    return this.persons.find(person => person.email === email);
  }

  getPersons(): Array<Person> {
    console.log(this.persons);
    return this.persons.slice();
  }

  changePersonPassword(id: number, newpassword: string) {
    this.persons[id].password = newpassword;
    console.log(this.persons[id]);
  }

  modifyPerson(person: Person) {
    const aux: Person = this.getPersonbyId(person.personId);
    aux.fullname = person.fullname;
    aux.terrainName = person.terrainName;
    aux.email = person.email;
    aux.twitterAt = person.twitterAt;
    aux.country = person.country;

    this.persons[person.personId] = aux;
    console.log('Persona modificada:', this.persons[person.personId]);
  }
}
