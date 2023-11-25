import Image from 'next/image'
import Logo from '../img/logo.png'
import dev from '../img/dev.png'
export default function Habilidades (){
    return (
    <section className="Habilidades" id='Habilidades'>
        <div className="DescricaoHabilidades">
            <h2 className="TituloHabilidades">Minhas Princiapais <span>Habilidades</span></h2>
            <div className="ListaHabilidades">
                <div>
                    <Image className='Logo' src={Logo} alt=''/>
                    <h3>HTML</h3>
                </div>
                <div>
                    <Image className='Logo' src={Logo} alt=''/>
                    <h3>CSS</h3>
                </div>
                <div>
                    <Image className='Logo' src={Logo} alt=''/>
                    <h3>JavaScript</h3>
                </div>
                <div>
                    <Image className='Logo' src={Logo} alt=''/>
                    <h3>TypeScript</h3>
                </div>
                <div>
                    <Image className='Logo' src={Logo} alt=''/>
                    <h3>React.js</h3>
                </div>
                <div>
                    <Image className='Logo' src={Logo} alt=''/>
                    <h3>Next.js</h3>
                </div>
            </div>
            
        </div>
        <div>
            <Image className='dev' src={dev} alt=''/>
        </div>

    </section>
    )
}
