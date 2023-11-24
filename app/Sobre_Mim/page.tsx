import Image from 'next/image'
import r34 from '../img/r34.jpg'
export default function Sobre_Mim (){
    return (
        <section className="Sobre-Mim">
        <div>
            <Image className='Perfil' src={r34} alt=''/>
        </div>
        <div>
            <div>
                <h1 className="BioTitulo">Meu Nome é Matheus sou</h1> 
                <div className="BioSubTitulo">
                    <h2 className="BioSubTitulo1">Full Stack</h2>
                    <h2 className="BioSubTitulo2">Developer</h2>
                </div>
                <p className="Bio">Estudante de Engenharia da Computação na Unisal e estudante de Tecnico em Informatica para Internet no Senac</p>
            </div>
        </div>

    </section>
    )
}