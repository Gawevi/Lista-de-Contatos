import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MainContainer, Titulo, Campo, BotaoSalvar } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../utils/enums/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [laco, setLaco] = useState(enums.Laco.AMIGO)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    dispatch(
      cadastrar({
        nome,
        telefone,
        email,
        laco
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome Completo"
        />
        <Campo
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
          as="textarea"
          placeholder="Telefone"
        />
        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          as="textarea"
          placeholder="Email"
        />
        <Opcoes>
          <p>Laço</p>
          {Object.values(enums.Laco).map((laco) => (
            <Opcao key={laco}>
              <input
                value={laco}
                name="laco"
                type="radio"
                onChange={(evento) =>
                  setLaco(evento.target.value as enums.Laco)
                }
                id={laco}
                defaultChecked={laco === enums.Laco.AMIGO}
              />{' '}
              <label htmlFor={laco}>{laco}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
