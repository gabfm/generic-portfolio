
import html from '../../../assets/html-icon.png'
import css from '../../../assets/css-icon.png'
import javascript from '../../../assets/js-icon.png'
import react from '../../../assets/react-icon.png'

import styles from './styles.module.css'

export const Stacks = () => {
    return (
        <section id="stack-section" className={styles.stack}>
            <h2>Tecnologias</h2>
            <ul>
            <li><img src={html} alt="simbolo da stack html" />
            <h3>HTML</h3>
             </li>
            <li><img src={css} alt="simbolo da stack css" />
            <h3>CSS</h3>
             </li>
            <li><img src={javascript} alt="simbolo da stack javascript" />
            <h3>Javascript</h3>
             </li>
            <li><img src={react} alt="simbolo da stack react" />
            <h3>React</h3>
             </li>
            </ul> 
        </section>
    )
}