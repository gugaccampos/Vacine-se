export interface usuarioType {
    id: string
    nome: string
    email: string
    senha: string
    nascimento: Date
}

export interface agendamentoType {
    id: string
    nome: string
    horario: Date
    nascimento: Date
    realizado: string
    idUsuario: string
  }