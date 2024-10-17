export interface Ingreso {
  id: number;
  fechaIngreso: Date;
  producidoDiario: number;
  vrLiquidacion: number;
  vrGasolina: number;
  vrGastosAdicionales: number;
  descripcion: string;
  vehiculo: Vehiculo;
}

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
  ingreso: Date;
}
