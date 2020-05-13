import { Animal } from './Animal';
import { TerrainNode } from './TerrainNode';

export class Person {
    personId: number;
    fullname: string;
    email: string;
    terrainName: string;
    country: string;
    password: string;
    twitterAt?: string;
    ownedAnimals?: Array<Animal>;       // lista de animales
    terrainNodes?: Array<TerrainNode>;   // lista de nodos*/

    constructor(
        personId: number,
        fullname: string,
        email: string,
        terrainName: string,
        country: string,
        password: string,
        twitterAt?: string,
        ownedAnimals?: Array<Animal>,       // lista de animales
        terrainNodes?: Array<TerrainNode>   // lista de nodos*/
    ) {
        this.personId = personId;
        this.fullname = fullname;
        this.email = email;
        this.terrainName = terrainName;
        this.country = country;
        this.password = password;
        this.twitterAt = twitterAt;
        this.ownedAnimals = ownedAnimals;
        this.terrainNodes = terrainNodes;
    }
}
