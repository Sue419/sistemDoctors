export interface Lugar {
    punto: {
        coordinates: [number, number];
    };
    nombre_sede: string;
}

export interface LugarInfo {
    posicion: { lat: number; lng: number };
    nombre: string;
}