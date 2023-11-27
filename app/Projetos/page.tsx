import Image from 'next/image'
import print from '../img/print.png'
export default function Projetos (){
    return (
        <section className="Projetos" id="Projetos">
        <h2 className="TituloProjetos">Conheça Alguns dos Meus <span>Projetos</span></h2>
        <div>
            <Image className='Projeto1' src={print} alt=''/>
        </div>

    </section>  
    )
}
