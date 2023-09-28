function replaceCardsWithLinks() {
  const cardNames = document.querySelectorAll('code');
  console.log('list of cards', cardNames);
  cardNames.forEach((card) => {
    const button = document.createElement('button');
    button.innerText = card.innerText;
    button.addEventListener('click', () => alert(card.innerText));
    card.replaceWith(button);
  });
}

replaceCardsWithLinks();
let hi = Date.now();
console.log('hi called at', hi);
