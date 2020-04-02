createMemoryCardFront();
createMemoryCardFront();
createMemoryCard();
createMemoryCard();
createMemoryCard();
createMemoryCard();
createMemoryCard();
createMemoryCard();

const $memoryCards = document.querySelectorAll(".memory-card");

$memoryCards.forEach(function($memoryCard, key) {
  $memoryCard.addEventListener("click", function($memoryCard) {
    alert(`Click na carta ${key}`);
  });
});
