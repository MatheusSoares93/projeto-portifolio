import Image from 'next/image'
import Logo from '../img/logo.png'
import git from '../img/git.png'
import gmail from '../img/gmail.png'
import insta from '../img/insta.png'
import whatzap from '../img/whatzap.png'
export default function Contato (){
    return (
        <footer id="Contato">
        <h2 className="TituloContato">Entre em <span>Contato</span> comigo</h2>
        <p className="DescricaoContato">Sinta-se a Vontade para Entrar em Contato Comigo</p>
        <div className="ContatoSubTitulo">
        <Image className='Logo' src={Logo} alt=''/>
            <p>Matheus</p>
        </div>

        <div className="ListaContatos">
            <div>
                <Image className='git' src={git} alt=''/>
                <p>MatheusSoares93</p>
            </div>
            <div>
            <Image className='insta' src={insta} alt=''/>
                <p>@Matheus_SA93</p>
            </div>
            <div>
                <Image className='gmail' src={gmail} alt=''/>
                <p>matheus.almeida2193@gmail.com</p>
            </div>
            <div>
                <Image className='whatzap' src={whatzap} alt=''/>
                <p>12 99776-1583</p>
            </div>
        </div>
    </footer>  
    )
}