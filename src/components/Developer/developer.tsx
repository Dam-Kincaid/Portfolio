import style from './developer.module.css'
import Code from '../../assets/svgs/code-svgrepo-com.svg?react'
import HTML from '../../assets/svgs/html5-svgrepo-com.svg?react'
import CSS from '../../assets/svgs/css3-svgrepo-com.svg?react'
import JS from '../../assets/svgs/js-svgrepo-com.svg?react'
import TS from '../../assets/svgs/typescript-icon-svgrepo-com.svg?react'

function Developer () {
    return (
        <div>
            <div className={style.title}>
                <p className={style.tl}>front-end & back-end</p>
                <Code className={style.tlImg} />
            </div>
            <div className={style.skill}>
                <div className={style.skBox}><HTML className={style.svg}/>HTML</div>
                <div className={style.skBox}><CSS className={style.svg}/>CSS</div>
                <div className={style.skBox}><JS className={style.svg}/>JS</div>
                <div className={style.skBox}><TS className={style.svg}/>TS</div>
            </div>
            <div className={style.last}>
                <div className={style.me}><span>2+</span>Experiences</div>
                <div className={style.slash}></div>
                <div className={style.me}><span>8+</span>Technologies</div>
                <div className={style.slash}></div>
                <div className={style.me}><span>15+</span>Projets fini</div>
            </div>
        </div>
    );
}

export default Developer