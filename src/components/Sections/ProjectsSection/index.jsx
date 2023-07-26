
import github from '../../../assets/git-icon.png'

import styles from './styles.module.css'

export const Projects = () => {
    return (
        <section id="projects-section" className={styles.projects}>
            <h2>Projetos</h2>
            <ul>
                <li>
                    <div className={styles.info__projects}>
                    <h3>Projeto 1</h3>
                    <p className={styles.about}>Descrição do projeto</p>
                    <p className={styles.label}>Saiba mais</p>
                    </div>
                    <div className={styles.logo__projects}>
                        <img className={styles.project__img} src={github} alt="simbolo do github" />
                    </div>
                </li>
                <li>
                    <div className={styles.info__projects}>
                    <h3>Projeto 2</h3>
                    <p className={styles.about}>Descrição do projeto</p>
                    <p className={styles.label}>Saiba mais</p>
                    </div>
                    <div className={styles.logo__projects}>
                        <img className={styles.project__img} src={github} alt="simbolo do github" />
                    </div>
                </li>
                <li>
                    <div className={styles.info__projects}>
                    <h3>Projeto 3</h3>
                    <p className={styles.about}>Descrição do projeto</p>
                    <p className={styles.label}>Saiba mais</p>
                    </div>
                    <div className={styles.logo__projects}>
                        <img className={styles.project__img} src={github} alt="simbolo do github" />
                    </div>
                </li>
                <li>
                    <div className={styles.info__projects}>
                    <h3>Projeto 4</h3>
                    <p className={styles.about}>Descrição do projeto</p>
                    <p className={styles.label}>Saiba mais</p>
                    </div>
                    <div className={styles.logo__projects}>
                        <img className={styles.project__img} src={github} alt="simbolo do github" />
                    </div>
                </li>
            </ul> 
        </section>
    )
}