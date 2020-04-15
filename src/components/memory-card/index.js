function createMemoryCard() {
  const $memoryCard = `
  <article class='memory-card'>
    <img 
      class='icon' 
      src='img/icon-collabcode.svg' 
      alt='Gueio mascot' 
      onClick='handleClick()'
    />
  </article>`;

  return $memoryCard;
}

function createMemoryCardFront() {
  const $memoryCard = `
  <article class='memory-card -front'>
    <img 
      class="icon" 
      src="img/-icon-js.png" 
      alt="JavaScript book icon"
      onClick='handleClick()'
    />
  </article>`;

  return $memoryCard;
}

function handleClick() {
  alert("cartinha");
}
