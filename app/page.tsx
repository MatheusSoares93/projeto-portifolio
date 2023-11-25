import Menu from './Menu/page'
import Sobre_Mim from './Sobre_Mim/page'
import Habilidades from './Habilidades/page'
import Projetos from './Projetos/page'
import Contato from './Contato/page'

export default function Home() {
    return (
      <>
        <Menu/>
        <Sobre_Mim/>
        <Habilidades/>
        <Projetos/>
        <Contato/>
      </>
    )
  }