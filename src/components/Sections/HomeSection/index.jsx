import { Button } from '../../Buttons';
import  banner  from '../../../assets/banner-img.png';

import styles from './styles.module.css';

export const Home = () => {
    return (
        <section className={styles.home}>
            <div>
                <p className = {styles.label} >JOSEDASILVA</p>
                <h1>Bem Vindo ao meu portfólio</h1>
                <p className = {styles.frase}>Uma frase interessante sobre mim</p>
                <Button type ='button'> Saiba mais</Button>
            </div>
            <img src={banner} alt="Uma simulação de um computador recebendo uma msg" />
        </section>
    )
}