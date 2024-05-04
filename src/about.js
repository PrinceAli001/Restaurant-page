export default function () {
    let body = document.querySelector('body');
    let content = document.querySelector('#content');

    let header = document.createElement('h1');
    header.textContent = 'About';
    header.classList.add('header-home');

    let infoDiv = document.createElement('div');
    infoDiv.classList.add('container');
    infoDiv.setAttribute('style','border-left: none; border-right: none; border-top: 10px solid #ffffff; border-bottom: 10px solid #ffffff; border-bottom-left-radius: 0; border-top-right-radius: 0;');
    let infoDivHeader = document.createElement('h1');
    infoDivHeader.textContent = `You're definitely gonna spend more than a dime, but it will certainly be worth your time`;
    infoDivHeader.setAttribute('style','font-size: 2rem;');
    let infoDivP = document.createElement('p');
    infoDivP.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, error molestiae in obcaecati eaque voluptatum doloremque molestias tenetur cum praesentium doloribus amet soluta placeat labore, blanditiis quidem, nostrum illum. Dicta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, error molestiae in obcaecati eaque voluptatum doloremque molestias tenetur cum praesentium doloribus amet soluta placeat labore, blanditiis quidem, nostrum illum. Dicta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, error molestiae in obcaecati eaque voluptatum doloremque molestias tenetur cum praesentium doloribus amet soluta placeat labore, blanditiis quidem, nostrum illum. Dicta.';

    let contactsP = document.createElement('p');
    contactsP.textContent = 'Reach us at:';
    contactsP.setAttribute('style','font-size: 2.2rem; color: #ffffff; display: flex; justify-content: flex-start; margin: 0 10%;')

    body.classList.add('about-bg');
    body.classList.remove('home-bg');
    body.classList.remove('menu-bg');

    content.textContent = '';

    infoDiv.appendChild(infoDivHeader);
    infoDiv.appendChild(infoDivP);
    content.appendChild(header);
    content.appendChild(infoDiv);
    content.appendChild(contactsP);
}