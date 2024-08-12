import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Contato'
import * as S from './styles'
import { Botao, Campo } from '../../styles'
import Filtro from '../../components/Filtro'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
              <Filtro
                valor={enums.Laco.AMIGO}
                criterio="laco"
                legenda="Amigos"
              />
              <Filtro
                valor={enums.Laco.CONHECIDO}
                criterio="laco"
                legenda="Conhecidos"
              />
              <Filtro
                valor={enums.Laco.PARENTE}
                criterio="laco"
                legenda="Parentes"
              />
              <Filtro
                valor={enums.Laco.TRABALHO}
                criterio="laco"
                legenda="Colegas"
              />
              <Filtro criterio="todas" legenda="Todos" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>
            Voltar para a Lista de Contatos
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
