import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeContatos'
import BotaoAdicionar from '../../components/BotaoAdicionar'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
