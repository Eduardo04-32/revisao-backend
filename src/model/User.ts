import { Entity } from "typeorm";


@Entity() // Marca o moidel como uma tebela do banco, se não usar a tabela não sera craiada, se vc colar uma string dentro dos parenteses, vc pode dar nome que quiser para sua tabela, se deixarvazui, ela pega o nome da class, (en minusculas)

/*
Exemplo: 
@Entity("Joazinho") cria a tebela joazinho =
@Entity() -> uma tabela chamada `user` (mesmo nome da class, so que minusculo)
*/
export class User{
    
    
}
