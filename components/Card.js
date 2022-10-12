import {getRandomAnimal, getRandomColor} from "../util/random.js"

function Card(name) {
    const cardList = document.querySelector(".card-list");
  
    const card = document.createElement("li");
    card.className = "card";
    card.style.background = getRandomColor()
    // rundenAb(0.85 * 15)
  
    const headline = document.createElement("h2");
    headline.textContent = name;
  
    const animal = document.createElement("p");
    animal.textContent = getRandomAnimal()
  
    card.append(headline, animal);
  
    cardList.append(card);
}

export default Card