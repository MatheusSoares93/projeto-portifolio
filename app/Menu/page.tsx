import Image from 'next/image'
import Logo from '../img/logo.png'
export default function Menu (){
    return (
            <header>
            <div>
                <Image className='Logo LogoMenu' src={Logo} alt=''/>
                <h2 >Matheus</h2>
            </div>
            <div className="Menu">
                <p>Home</p>
                <p>Projetos</p>
                <p>Contato</p>
            </div>
    
        </header>
    )
}