const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const $memoryCard = createMemoryCard({
  src: "img/icon-collab.svg",
  alt: "Collab mascot icon",
});

const $memoryCardFrontJs = createMemoryCard({
  src: "img/icon-js.png",
  alt: "JavaScript book icon",
  className: "-front",
});

const $memoryCardFrontC = createMemoryCard({
  src: "img/icon-c.png",
  alt: "C book icon",
  className: "-front",
});

const $memoryCardFrontPhp = createMemoryCard({
  src: "img/icon-php.png",
  alt: "Php book icon",
  className: "-front",
});

const $memoryCardFrontJava = createMemoryCard({
  className: "-front",
  src: "img/icon-java.png",
  alt: "Java book icon",
});

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
