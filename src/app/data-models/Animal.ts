export class Animal {
    idsensor: number;
    currentCoords: string;
    currentAmbientTemp: number;
    currentBodyTemp: number;

    constructor(
        idsensor: number,   // cowId en thingspeak
        currentCoords: string,
        currentAmbientTemp: number,
        currentBodyTemp: number
        // area
        // distancia

        // usar en lo posible los parámetros de thingspeak
    ) {
        this.idsensor = idsensor;
        this.currentCoords = currentCoords;
        this.currentAmbientTemp = currentAmbientTemp;
        this.currentBodyTemp = currentBodyTemp;
    }
}
