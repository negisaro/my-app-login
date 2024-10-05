export interface Vehiculo {
  id: number;
  placa: string;
  marca: string;
  modeloAnio: Date;
  modeloCarroceria: string;
  tipoCombustible: string;
  propietario: Propietario;
}

export interface Propietario {
  id: number;
  documento: string;
  primerNombre: string;
  segundoNombre: string;
  primerApellido: string;
  segundoApellido: string;
  email: string;
  telefono: string;
  direccion: string;
  vehiculos: Vehiculo[];
}
