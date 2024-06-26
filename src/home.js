import image from './images/smoothie.webp'

export default function () {
    let body = document.querySelector('body');
    let content = document.querySelector('#content');

    let header = document.createElement('h1');
    header.textContent = 'Home';
    header.classList.add('header-home');

    let img = document.createElement('img');
    img.src = image;

    let h1 = document.createElement('h1');
    h1.textContent = 'COME WINE AND DINE TO FEEL SUBLIME';

    let p = document.createElement('p');
    p.textContent = 'Here at smooth smoothie we make sure your experience is smooth and regardless of the challenges we always and i mean always deliver';

    let infoDiv = document.createElement('div');
    infoDiv.classList.add('container');

    body.classList.add('home-bg');
    body.classList.remove('menu-bg');
    body.classList.remove('about-bg');

    content.textContent = '';

    infoDiv.appendChild(h1);
    infoDiv.appendChild(p);
    content.appendChild(header);
    content.appendChild(img);
    content.appendChild(infoDiv);
}