const names = ["Andrea", "Jessica", "Michael"];

const animals = [
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🦊",
  "🐻",
  "🐼",
  "🐨",
  "🐯",
  "🦁",
  "🐮",
  "🐵",
  "🐙",
  "🦩",
  "🦄",
];

const colors = [
  "lightcoral",
  "salmon",
  "hotpink",
  "darkorange",
  "gold",
  "papayawhip",
  "peachpuff",
  "orchid",
  "slateblue",
  "limegreen",
  "olivedrab",
  "mediumaquamarine",
  "lightskyblue",
  "gainsboro",
  "bisque",
];

names.forEach((name) => {
  const cardList = document.querySelector(".card-list");

  const card = document.createElement("li");
  card.className = "card";
  card.style.background = colors[Math.floor(Math.random() * colors.length)];

  const headline = document.createElement("h2");
  headline.textContent = name;

  const animal = document.createElement("p");
  animal.textContent = animals[Math.floor(Math.random() * animals.length)];

  card.append(headline, animal);

  cardList.append(card);
});
