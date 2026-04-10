import Logo from "../../assets/imgs/D-logo.png";
import style from "./home.module.css";
import GitSvg from "../../assets/svgs/github-alt.svg?react";
import LinkSvg from "../../assets/svgs/linkedin-in.svg?react";
import InstaSvg from "../../assets/svgs/instagram.svg?react";
import React, { useEffect, useRef } from "react";
import TypeIt from "typeit";
import Parcours from "../../components/Parcours/parcours";
import Developer from "../../components/Developer/developer";
import Project from "../../components/Project/project";
import Framework from "../../components/Framework/framework";
import Portfolio from "../../components/Portfolio/portfolio";

function Home() {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const boxes: Box[] = [
        { id: "b1", title: "Parcours", color: "#00e5ff", content: Parcours },
        {
            id: "b2",
            title: "Developpement",
            color: "#ff00ff",
            content: Developer,
        },
        { id: "b3", title: "Projets", color: "#00ff00", content: Project },
        { id: "b4", title: "Frameworks", color: "#ffff00", content: Framework },
        { id: "b5", title: "Portfolio", color: "#00e5ff", content: Portfolio },
    ];

    type Box = {
        id: string;
        title: string;
        color: string;
        content: React.ComponentType | string;
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const cards = Array.from(
            container.querySelectorAll<HTMLElement>(".card"),
        );

        const onMove = (e: MouseEvent) => {
            for (const card of cards) {
                const rect = card.getBoundingClientRect();

                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);

                const maxDistance = 500;

                const distance = Math.hypot(
                    e.clientX - (rect.left + rect.width / 2),
                    e.clientY - (rect.top + rect.height / 2),
                );

                const intensity = Math.max(0, 1 - distance / maxDistance);
                const adjustedIntensity = Math.pow(intensity, 1.2);

                card.style.setProperty(
                    "--glow-active",
                    adjustedIntensity.toString(),
                );
            }
        };

        container.addEventListener("mousemove", onMove);
        return () => container.removeEventListener("mousemove", onMove);
    }, []);    

    const cssVar = (clr: string) =>
        ({ ["--clr" as any]: clr }) as React.CSSProperties;

    return (
        <div className={style.home}>
            <div className={style.grid} ref={containerRef}>
                <div className={style.porfolio}>
                    <img src={Logo} alt="logo" className={style.logo} />
                    <h2 className={style.name}>Dam</h2>
                    <h2 className={style.name}>Kincaid</h2>
                    <hr className={style.hr} />
                    <p
                        className={style.skill}
                        ref={(el: HTMLParagraphElement | null) => {
                            if (!el) return;
                            if ((el as any).__typeit) return;
                            (el as any).__typeit = true;
                            new TypeIt(el, {
                                html: true,
                                speed: 75,
                                deleteSpeed: 50,
                                loop: false,
                            })
                                .pause(1000)
                                .type("Je suis ")
                                .pause(500)
                                .type("dévelloppeur, ")
                                .pause(200)
                                .move(-8)
                                .delete(1)
                                .move(null, { to: "END", delay: 200 })
                                .pause(500)
                                .type("<span>WEB!</span>")
                                .pause(1000)
                                .delete(4)
                                .pause(200)
                                .type("<span style='color: #00E5FF;'>HTML/CSS/JS</span>")
                                .pause(1000)
                                .delete(11)
                                .pause(200)
                                .type("<span style='color: #8892BF'>PHP</span>")
                                .pause(1000)
                                .delete(3)
                                .pause(200)
                                .type("<span style='color: #61DAFB'>React</span>")
                                .pause(1000)
                                .delete(5)
                                .pause(200)
                                .type("<span style='color: #00FFAB'>Front & Back !</span>")
                                .go();
                        }}
                    ></p>
                    <div className={style.social}>
                        <ul>
                            <li>
                                <a
                                    href="https://github.com/Dam-Kincaid"
                                    className="social_link"
                                    target="_blank"
                                >
                                    <GitSvg className={style.fab} />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://linkedin.com/"
                                    className="social_link"
                                    target="_blank"
                                >
                                    <LinkSvg className={style.fab} />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://instagram.com/"
                                    className="social_link"
                                    target="_blank"
                                >
                                    <InstaSvg className={style.fab} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {boxes.map((b) => {
                    const Component = b.content;

                    return (
                        <div
                            key={b.id}
                            className={`${style.box} ${style[b.id]} card`}
                            style={cssVar(b.color)}
                            id={b.title}
                        >
                            {typeof Component === "string" ? (
                                Component
                            ) : (
                                <Component />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
