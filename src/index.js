const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $memoryCardFront = document.createElement("article");
const $memoryCard1 = document.createElement("article");
const $memoryCard2 = document.createElement("article");
const $memoryCard3 = document.createElement("article");
const $memoryCard4 = document.createElement("article");
const $memoryCard5 = document.createElement("article");
const $memoryCard6 = document.createElement("article");

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

$memoryCard1.classList.add("memory-card");
$root.insertBefore($memoryCard1, null);
$memoryCard1.insertAdjacentHTML("afterbegin", $icon);

$memoryCard2.classList.add("memory-card");
$root.insertBefore($memoryCard2, null);
$memoryCard2.insertAdjacentHTML("afterbegin", $icon);

$memoryCard3.classList.add("memory-card");
$root.insertBefore($memoryCard3, null);
$memoryCard3.insertAdjacentHTML("afterbegin", $icon);

$memoryCard4.classList.add("memory-card");
$root.insertBefore($memoryCard4, null);
$memoryCard4.insertAdjacentHTML("afterbegin", $icon);

$memoryCard5.classList.add("memory-card");
$root.insertBefore($memoryCard5, null);
$memoryCard5.insertAdjacentHTML("afterbegin", $icon);

$memoryCard6.classList.add("memory-card");
$root.insertBefore($memoryCard6, null);
$memoryCard6.insertAdjacentHTML("afterbegin", $icon);
