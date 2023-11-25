import Image from 'next/image'
import Logo from '../img/logo.png'
export default function Menu (){
    return (
        <header>
        <div>
        <Image className='Logo' src={Logo} alt=''/>
            <h2 >Matheus</h2>
        </div>
        <div className="Menu">
            <a href="#">Home</a>
            <a href="#SobreMim">Sobre Mim</a>
            <a href="#Habilidades">Habilidades</a>
            <a href="#Projetos">Projetos</a>
            <a href="#Contato">Contato</a>
        </div>

    </header>
    )
}