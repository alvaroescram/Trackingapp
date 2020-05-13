import { Injectable } from '@angular/core';
import { Animal } from './Animal';

let lastId = 0;

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  animals: Array<Animal> = [
    new Animal(
      0, 'test', 30, 36
    )
  ];

  constructor() { }

  generateId(): number {
    lastId++;
    return lastId;
  }

  createAnimal(objct) {
    objct.idsensor = this.generateId();
    // console.log(objct);
    this.saveAnimal(objct);
    this.animals.push(objct);
  }

  saveAnimal(objct) {
    // guardar en el back-end
    console.log('Guardando: Animal con id ', objct, objct.idsensor);
  }

  getAnimals(): Array<Animal> {
    return this.animals.slice();
  }

  getAnimal(id: number): Animal {
    return this.animals[id];
  }

  getAnimalTemp(id: number): number {
    return this.animals[id].currentBodyTemp;
  }

  getAmbientTemp(id: number) {
    return this.animals[id].currentAmbientTemp;
  }

  getCurrentCoordinates(id: number): string {
    return this.animals[id].currentCoords;
  }

  getCurrentBodyTemperatureAverage(): number {
    const temperatures: Array<number> = [];
    this.animals.forEach(element => {
        temperatures.push(element.currentBodyTemp);
    });
    console.log(temperatures);
    return (temperatures.reduce((a, b) => a + b)) / this.animals.length;
  }

  deleteAnimal(id: number) {
    const index = id;
    if (index >= 0) {
      console.log('Borrado: ', this.animals.splice(index, 1));
    }
    else {
      console.log('Este animal no existe');
    }
  }
}
