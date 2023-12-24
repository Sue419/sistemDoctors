export interface DataUserEdit {
    id: number;
    NombrePaciente: string;
    dni: number;
    Telefono: number;
    Direccion: string;
}

export interface DialogData {
    paciente: DataUserEdit;
  }