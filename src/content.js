export default function () {
    let img = document.createElement('img');
    img.src = '../images/smoothie.webp';

    let h1 = document.createElement('h1');
    h1.textContent = 'Come wine and dine to feel sublime';

    let p = document.createElement('p');
    p.textContent = 'Here at smooth smoothie we make sure your experience is smooth and regardless of the challenges we always and i mean always deliver';

    let infoDiv = document.createElement('div')
    infoDiv.classList.add('container')
    let content = document.querySelector('#content');

    infoDiv.appendChild(h1);
    infoDiv.appendChild(p);
    content.appendChild(img);
    content.appendChild(infoDiv)
}