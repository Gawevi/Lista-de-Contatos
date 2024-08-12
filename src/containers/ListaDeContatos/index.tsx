import Contato from '../../components/Contato'
import { MainContainer, Titulo } from '../../styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'laco') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.laco === valor
        )
      }

      return contatosFiltrados
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo?.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} contato(s) encontrado(s) como: todos ${complementacao}`
    } else {
      mensagem = `${quantidade} contato(s) encontrado(s) como: ${`${criterio}=${valor}`} ${complementacao}`
    }

    return mensagem
  }

  const contatos = filtraContatos()
  const mensagem = exibeResultadoFiltragem(contatos.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {contatos.map((t) => (
          <li key={t.nome}>
            <Contato
              nome={t.nome}
              telefone={t.telefone}
              email={t.email}
              laco={t.laco}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}
export default ListaDeContatos
