const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const createMemoryCard = memoryCard();

const $memoryCard = createMemoryCard({
  src: "img/icon-collab.svg",
  alt: "Collab mascot icon",
});

const $memoryCardFrontJs = createMemoryCard({
  src: "img/icon-js.png",
  alt: "JavaScript book icon",
});

const $memoryCardFrontC = createMemoryCard({
  src: "img/icon-c.png",
  alt: "C book icon",
});

const $memoryCardFrontPhp = createMemoryCard({
  src: "img/icon-php.png",
  alt: "Php book icon",
});

const $memoryCardFrontJava = createMemoryCard({
  src: "img/icon-java.png",
  alt: "Java book icon",
});

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontPhp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontPhp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJs);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
