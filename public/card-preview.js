async function getScryfallImageURL(name) {
  const response = await fetch(
    `https://api.scryfall.com/cards/named?fuzzy=${name}`
  );
  const card = await response.json();
  const dialog = document.getElementById('card-preview-dialog');
  const image = document.getElementById('card-preview-image');
  image.src = card.image_uris.normal;
  dialog.showModal();
}

async function replaceCardsWithLinks() {
  const cardNames = document.querySelectorAll('code');
  cardNames.forEach((card) => {
    const button = document.createElement('button');
    button.innerText = card.innerText;
    button.addEventListener('click', async () => {
      await getScryfallImageURL(card.innerText);
    });
    card.replaceWith(button);
  });
}

function createCardPreviewDialog() {
  const dialog = document.createElement('dialog');
  dialog.id = 'card-preview-dialog';
  dialog.style = 'top: 50%; left: 50%; transform: translate(-50%, -50%);';
  const image = document.createElement('img');
  image.id = 'card-preview-image';
  dialog.appendChild(image);
  document.body.appendChild(dialog);
}

createCardPreviewDialog();
await replaceCardsWithLinks();
