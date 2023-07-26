
import Whatsapp from "../../assets/whatsapp-icon.png"
import Linkedin from "../../assets/linkedin-icon.png"
import Github from "../../assets/github-icon.png"

import styles from './styles.module.css'

export const Footer = () => {
    return(
        <section  className={styles.footer}> 
        <div>
        <h2>Contato</h2>
        <ul>
            <li><img src={Whatsapp} alt="" /></li>
            <li><img src={Linkedin} alt="" /></li>
            <li><img src={Github} alt="" /></li>
        </ul>
        </div>
        <p>Todos os direitos reservados - José da Silva</p>
        </section>
    )
}