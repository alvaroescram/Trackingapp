// vértice de un terreno
export class TerrainNode {
    latitude: number;
    longitude: number;

    contructor(
        latitude: number,
        longitude: number
    ) {
       this.latitude = latitude;
       this.longitude = longitude;
    }
}
