import content from "./content";
import './style.css';
import homePage from './home';
import menuPage from './menu';
import aboutPage from './about';

content()
showPage()

function showPage () {
    let home = document.querySelector('#home')
    home.addEventListener('click', () => {
        home.classList.add('open-tab')
        menu.classList.remove('open-tab')
        about.classList.remove('open-tab')
        homePage()
    })

    let menu = document.querySelector('#menu')
    menu.addEventListener('click', () => {
        home.classList.remove('open-tab')
        menu.classList.add('open-tab')
        about.classList.remove('open-tab')
        menuPage()
    })
    
    let about = document.querySelector('#about')
    about.addEventListener('click', () => {
        home.classList.remove('open-tab')
        menu.classList.remove('open-tab')
        about.classList.add('open-tab')
        aboutPage()
    })
}

