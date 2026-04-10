import style from './project.module.css'
import Folder from '../../assets/svgs/folder-svgrepo-com.svg?react'
import moto from '../../assets/imgs/Motorcycle preview.png'
import shop from '../../assets/imgs/Sports Shop preview.png'
import maki from '../../assets/imgs/makipay preview.png'
import React, { useRef, useState } from 'react'
import gsap from 'gsap'

function Project () {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)
    const [activeIndex, setActiveIndex] = useState(0)
    const projects = [1, 2, 3];

    const handleScroll = () => {
        if (scrollRef.current) {
        const { scrollLeft } = scrollRef.current;
        const firstCard = scrollRef.current.querySelector(`.${style.wrapperCard}`) as HTMLElement
        if (firstCard) {
            const cardWidth = firstCard.offsetWidth + 10
            const index = Math.round(scrollLeft / cardWidth)
            if (index !== activeIndex) {
                setActiveIndex(index)
            }
        }
        }
    };

    const haddleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!scrollRef.current) return;

        setIsDragging(true)
        setStartX(e.pageX - scrollRef.current.offsetLeft)
        setScrollLeft(scrollRef.current.scrollLeft)
    }

    const haddleMouseLeaveOrUp = () => {
        setIsDragging(false)
    }

    const haddleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !scrollRef.current) return;

        e.preventDefault()
        const x = e.pageX - scrollRef.current.offsetLeft
        const walk = (x - startX) * 2
        const scrollTarget = scrollLeft - walk

        gsap.to(scrollRef.current, {
            scrollLeft: scrollTarget,
            duration: 0.5,
            ease: 'power2.out',
            overwrite: 'auto'
        })
    }
    
    return (
        <div>
            <div className={style.title}>
                <p className={style.tl}>Project Web</p>
                <Folder className={style.tlImg} />
            </div>
            <div className={style.wrapper}>
                <div 
                    ref={scrollRef}
                    onScroll={handleScroll}
                    onMouseDown={haddleMouseDown}
                    onMouseUp={haddleMouseLeaveOrUp}
                    onMouseLeave={haddleMouseLeaveOrUp}
                    onMouseMove={haddleMouseMove}
                    className={style.wrapperTrack}
                    style={{
                        cursor: isDragging ? 'grabbing' : 'grab'
                    }}
                >
                    <div className={style.wrapperCard}>
                        <img src={maki} alt="preview" className={style.imgPreview} />
                        <p className={style.wrapperTxt}>MakiPay</p>
                    </div>
                    <div className={style.wrapperCard}>
                        <img src={moto} alt="preview" className={style.imgPreview} />
                        <p className={style.wrapperTxt}>Motorcycle website</p>
                    </div>
                    <div className={style.wrapperCard}>
                        <img src={shop} alt="preview" className={style.imgPreview} />
                        <p className={style.wrapperTxt}>Sports Shop</p>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '8px',
                    marginTop: '15px'
                }}>
                    {projects.map((_, i) => (
                    <div
                        key={i}
                        style={{
                        width: activeIndex === i ? '20px' : '8px', 
                        height: '8px',
                        borderRadius: '4px',
                        background: activeIndex === i ? '#ffb027' : '#444', 
                        transition: 'all 0.3s ease' 
                        }}
                    />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Project