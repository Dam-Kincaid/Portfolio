import style from './parcours.module.css'
import Management from '../../assets/svgs/management-svgrepo-com.svg?react'

function Parcours () {
    return (
        <div>
            <div className={style.title}>
                <p className={style.tl}>Parcours</p>
                <Management className={style.tlImg} />
            </div>
            <p className={style.me}>_Dam Kincaid ー Full-stack dev passionné depuis 2 ans.</p>
            <p className={style.story}>Autodidacte au départ (Youtube, freeCodeCamp). J'ai ensuite level up avec les formations de GasyTech en React, Vue, Node.js et back-end. Aujourd'hui, je cherche mon premier job ou une mission remote (UTC+3) pour coder proprement et grandir en équipe !</p>
        </div>
    );
}

export default Parcours