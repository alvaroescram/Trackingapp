import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../data-models/animal.service';
import { Animal } from '../data-models/Animal';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {
  animals: Array<Animal> = [];
  editMode: boolean;
  latselect = false;
  longselect = false;
  tempselect = false;

  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.animals = this.animalService.getAnimals();
    this.editMode = false;
    console.log(this.animals);
  }

  editAnimals($events?) {
    if (this.editMode) {
      this.editMode = false;
    } else {
      this.editMode = true;
    }
  }

  selectLat() {
    this.latselect = true;
    this.longselect = false;
    this.tempselect = false;
    console.log('Selección latitud:', this.latselect);
  }

  selectLong() {
    this.latselect = false;
    this.longselect = true;
    this.tempselect = false;
    console.log('Selección longitud:', this.longselect);
    }
  selectTemp() {
    this.latselect = false;
    this.longselect = false;
    this.tempselect = true;
    console.log('Selección temperatura:', this.tempselect);
  }


}

/**
 * buscar como poner lista de vacas que cambie de forma dinámica :/
 * lista de variables no cambia
 */
