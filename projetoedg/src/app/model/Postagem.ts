import { Tema } from "./Tema"
import { Usuario } from "./Usuario"


export class Postagem {
    public id: number
    public descricao: string 
    public titulo: string
    public midia: string
    public quemFaz: string
    public curtir: number

public usuario: Usuario
public tema: Tema
}