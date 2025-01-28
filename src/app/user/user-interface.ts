import { Type } from "@angular/compiler";

export interface UserInterface {
    nombre: string,
    correoElectronico: string,
    perfil: string,
    contrasena: string
}

export interface CompleteUserInterface{
    id?: number;
    nombre: string;
    correoElectronico: string;
    perfil: string;
    contrasena: string;
}