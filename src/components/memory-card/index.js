function createMemoryCard() {
  const $memoryCard = document.createElement("article");

  const $icon = `<img 
    class='icon' 
    src='img/icon-collabcode.svg' 
    alt='Gueio mascot' 
  />`;

  $memoryCard.classList.add("memory-card");
  $wrapCards.insertBefore($memoryCard, null);

  $memoryCard.insertAdjacentHTML("afterbegin", $icon);
}

function createMemoryCardFront() {
  const $memoryCardFront = document.createElement("article");

  const $iconJS = `<img 
    class="icon" 
    src="img/-icon-js.png" 
    alt="JavaScript book icon"
  />`;

  $memoryCardFront.classList.add("memory-card");
  $memoryCardFront.classList.add("-front");
  $wrapCards.insertBefore($memoryCardFront, null);

  $memoryCardFront.insertAdjacentHTML("afterbegin", $iconJS);
}
