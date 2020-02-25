const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $memoryCardFront = document.createElement("article");

const $icon = `<img 
    class='icon' 
    src='img/icon-collabcode.svg' 
    alt='Gueio mascot' 
  />`;

const $iconJS = `<img 
    class="icon" 
    src="img/-icon-js.png" 
    alt="JavaScript book icon"
  />`;

$memoryCard.classList.add("memory-card");
$root.insertBefore($memoryCard, null);

$memoryCardFront.classList.add("memory-card");
$memoryCardFront.classList.add("-front");
$root.insertBefore($memoryCardFront, $memoryCard);

$memoryCard.insertAdjacentHTML("afterbegin", $icon);
$memoryCardFront.insertAdjacentHTML("afterbegin", $iconJS);
