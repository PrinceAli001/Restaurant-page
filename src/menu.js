export default function () {
    let body = document.querySelector('body');
    let content = document.querySelector('#content');

    let header = document.createElement('h1');
    header.textContent = 'Menu';
    header.classList.add('header-home');
    header.setAttribute('style','color: #000000; border-right-color: #000000; border-left-color: #000000;  margin: 50px auto 50px auto;');

    let lunchDiv = document.createElement('div');
    lunchDiv.classList.add('container');
    lunchDiv.setAttribute('style','background-image: linear-gradient(90deg,#000000,#ffffff,#ffffff,#ffffff,#ffffff,#ffffff,#ffffff,#ffffff,#ffffff,#ffffff,#000000); width: 300px; padding: 40px; margin: 0 auto;');
    let lunchDivHeader = document.createElement('h1');
    lunchDivHeader.textContent = 'Lunch';
    let lunchmealOne = document.createElement('p');
    lunchmealOne.textContent = 'Pasta - $7';
    let lunchmealTwo = document.createElement('p');
    lunchmealTwo.textContent = 'Lazagna - $8';

    let dinnerDiv = document.createElement('div');
    dinnerDiv.classList.add('container');
    dinnerDiv.setAttribute('style','width: 300px; padding: 40px; margin: 85px auto;');
    let dinnerDivHeader = document.createElement('h1');
    dinnerDivHeader.textContent = 'Dinner';
    let dinnerMealOne = document.createElement('p');
    dinnerMealOne.textContent = 'Jollof rice - $10';
    let dinnerMealTwo = document.createElement('p');
    dinnerMealTwo.textContent = 'Quesadilla - $9';

    let specialsDiv = document.createElement('div');
    specialsDiv.classList.add('container');
    specialsDiv.setAttribute('style','background-image: linear-gradient(90deg,#000000,#ffffff,#ffffff,#ffffff,#ffffff,#ffffff,#ffffff,#ffffff,#ffffff,#ffffff,#000000); width: 300px; padding: 40px 40px 10px 40px; margin: 85px auto ;');
    let specialsDivHeader = document.createElement('h1');
    specialsDivHeader.textContent = 'Specials';
    let specialsMealOne = document.createElement('p');
    specialsMealOne.textContent = 'Sushi - $12';
    let specialsMealTwo = document.createElement('p');
    specialsMealTwo.textContent = 'Tacos - $12';
    let specialsMealThree = document.createElement('p');
    specialsMealThree.textContent = 'Croissants - $12';
    let addInfo = document.createElement('p');
    addInfo.textContent = 'Each with our smooth smoothie'
    addInfo.setAttribute('style','font-size: 1rem; ')

    body.classList.remove('home-bg');
    body.classList.remove('about-bg');
    body.classList.add('menu-bg');


    content.textContent = '';

    lunchDiv.appendChild(lunchDivHeader);
    lunchDiv.appendChild(lunchmealOne);
    lunchDiv.appendChild(lunchmealTwo);
    dinnerDiv.appendChild(dinnerDivHeader)
    dinnerDiv.appendChild(dinnerMealOne);
    dinnerDiv.appendChild(dinnerMealTwo);
    specialsDiv.appendChild(specialsDivHeader)
    specialsDiv.appendChild(specialsMealOne);
    specialsDiv.appendChild(specialsMealTwo);
    specialsDiv.appendChild(specialsMealThree);
    specialsDiv.appendChild(addInfo);
    content.appendChild(header);
    content.appendChild(lunchDiv);
    content.appendChild(dinnerDiv);
    content.appendChild(specialsDiv);
}