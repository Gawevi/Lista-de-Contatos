import * as enums from '../utils/enums/Contato'

class Contato {
  nome: string
  laco: enums.Laco
  telefone: string
  email: string
  id: number

  constructor(
    nome: string,
    laco: enums.Laco,
    telefone: string,
    email: string,
    id: number
  ) {
    this.nome = nome
    this.laco = laco
    this.telefone = telefone
    this.email = email
    this.id = id
  }
}

export default Contato
