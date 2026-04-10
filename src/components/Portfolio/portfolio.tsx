import style from './portfolio.module.css'
import Code from '../../assets/svgs/portfolio-svgrepo-com.svg?react'

function Portfolio () {
    return (
        <div>
            <div className={style.title}>
                <p className={style.tl}>Portfolio</p>
                <Code className={style.tlImg} />
            </div>
            <div className={style.content}>
                <p>Diponible dès maintenant (UTC+3)</p>
                <hr />
                <span className={style.callMe}>Contactez-moi sur <a href="mailto:dam.kincaid@gmail.com">dam.kincaid@gmail.com</a></span>
            </div>
        </div>
    );
}

export default Portfolio