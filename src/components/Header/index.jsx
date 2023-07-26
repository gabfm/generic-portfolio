import styles from './styles.module.css'
import logo from '../../assets/portfolio.png'
import { Button } from '../Buttons'

export const Header = () => {
  return(
    <header className={styles.header}>
      <img 
        src={logo} 
        alt="Logo é a palavra portfolio apenas escrita" 
      />

      <ul className={styles.nav__containeir}>
        <li>
          <a href="#about-section">Sobre</a>
        </li>
        <li>
        <a href="#stack-section">Stack</a>
        </li>
        <li>
        <a href="#projects-section">Projetos</a>
        </li>
      </ul>

      <Button type="button">Contato</Button>
    </header> 
  )
}