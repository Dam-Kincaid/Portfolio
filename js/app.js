/**
 *? Animation texte
 * avec typeIt
 */
const skill = document.querySelector('.home_skill')
let typewriter = new TypeIt(skill, {
    speed: 75,
    deleteSpeed: 50,
    loop: false
})
    .pause(1500)
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
    .type("<span style='color: #E44D26;'>HTML!</span>")
    .pause(1000)
    .delete(5)
    .pause(200)
    .type("<span style='color: #264DE4;'>CSS!</span>")
    .pause(1000)
    .delete(4)
    .pause(200)
    .type("<span style='color: #8892BF;'>PHP!</span>")
    .pause(1000)
    .delete(4)
    .pause(200)
    .type("<span style='color: #F7DF1E;'>Javascript!</span>")
    .go();


/**
 * ? Activation & animation du navigation
 * Création du landing page
 * @param {arg} parm | string
 * @returns HTML
 */
const getLandingPage = function (parm) {
    let landing
    switch (parm) {
        case 'services':
            landing = `<h4>_ ${parm}</h4>
<h2>Conception et <br>développement Web</h2>
<p>Je transforme la complexité en simplicité visuelle et fonctionnelle, construis des solutions élégantes et robustes. Explorer mes projects, mes outils, et mes idées.</p>
<a href="#">My ${parm} <i class="fa fa-arrow-right"></i></a>`
            break;
        case 'works':
            landing = `<h4>_ ${parm}</h4>
<h2>Architecture front-end et optimisation</h2>
<p>J'aime comprendre, construire, et partager. Mon univers: Open-source, les interfaces épurées, et les solutions bien pensées. Parcourez mon travails, et n'hésitez pas à me dire bonjour.</p>
<a href="#project">My ${parm} <i class="fa fa-arrow-right"></i></a>`
            break;
        case 'blog':
            landing = `<h4>_ ${parm}</h4>
<h2>Design et <br>conception Web</h2>
<p>Je transforme la complexité en simplicité visuelle et fonctionnelle, construis des solutions élégantes et robustes. Explorer mes projects, mes outils, et mes idées.</p>
<a href="#">My ${parm} <i class="fa fa-arrow-right"></i></a>`
            break;
        default:
            break;
    }
    return landing
}

const navLinks = document.querySelectorAll('.nav_link')
const landingPage = document.querySelector('.landing')

navLinks.forEach(link => link.addEventListener('click', (e) => {
    e.preventDefault()
    let linkTxt = link.textContent
    let content = getLandingPage(linkTxt)
    navLinks.forEach(l => l.classList.remove('nav_link--active'))
    link.classList.add('nav_link--active')
    landingPage.style.opacity = 0
    setTimeout(() => {
        landingPage.innerHTML = content
        landingPage.style.opacity = 1
    }, 200);
}))

//* Hover cards
const projectCards = document.querySelectorAll('.project-card')
const projectS = document.getElementById('project-card')

projectCards.forEach(card => card.addEventListener('mouseover', () => {
    projectCards.forEach(c => c.classList.remove('project-card--active'))
    card.classList.add('project-card--active')
}))


// * PRT FILTER
const filterBtn = document.querySelectorAll('.prt-filter_btn')

filterBtn.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault()
    btn.classList.toggle('prt-filter_btn--active')
}))