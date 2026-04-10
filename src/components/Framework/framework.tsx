import style from './framework.module.css'
import Frame from '../../assets/svgs/grid-svgrepo-com.svg?react'
import reactLogo from '../../assets/svgs/react-svgrepo-com.svg'
import viteLogo from '../../assets/svgs/vite-svgrepo-com.svg'
import gsapLogo from '../../assets/svgs/greensock-svgrepo-com.svg'

function Framework () {
    return (
        <div>
            <div className={style.title}>
                <p className={style.tl}>Framework</p>
                <Frame className={style.tlImg} />
            </div>
            <div className={style.list}>
                <div className={style.detail}>
                    <img src={reactLogo} alt="logo" className={style.logo}/>
                    <div className={style.info}>
                        <p>React</p>
                        <span>L'UI bassée sur les composants.</span>
                    </div>
                </div>
                <div className={style.detail}>
                    <img src={viteLogo} alt="logo" className={style.logo}/>
                    <div className={style.info}>
                        <p>Vite</p>
                        <span>Environnement de nouvelle génération.</span>
                    </div>
                </div>
                <div className={style.detail}>
                    <img src={gsapLogo} alt="logo" className={style.logo}/>
                    <div className={style.info}>
                        <p>GSAP</p>
                        <span>Interactivité complexe et movements fluides.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Framework