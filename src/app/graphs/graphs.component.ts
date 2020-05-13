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


}

/**
 * buscar como poner lista de vacas que cambie de forma dinámica :/
 * lista de variables no cambia
 */
