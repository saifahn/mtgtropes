async function getScryfallImageURL(name) {
  const response = await fetch(
    `https://api.scryfall.com/cards/named?fuzzy=${name}`
  );
  const card = await response.json();
  console.log(card);
  alert(card.image_uris.small);
}

async function replaceCardsWithLinks() {
  const cardNames = document.querySelectorAll('code');
  console.log('list of cards', cardNames);
  cardNames.forEach((card) => {
    const button = document.createElement('button');
    button.innerText = card.innerText;
    button.addEventListener('click', async () => {
      await getScryfallImageURL(card.innerText);
    });
    card.replaceWith(button);
  });
}

await replaceCardsWithLinks();
