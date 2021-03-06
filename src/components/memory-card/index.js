function memoryCard() {
  const $head = document.querySelector("head");

  const $style = document.createElement("style");

  $style.textContent = `

    .memory-card{
      height: 155px;
      width: 155px;
      position: relative;
    }

    .memory-card.-active .card, 
    .memory-card.-score .card{
      display: none;
    }

    .memory-card.-active .card.-front,
    .memory-card.-score .card.-front{
      display: flex;
    }

    .memory-card .card {
      height: 100%;
      width:100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f25a70;
      border-radius: 30px;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      position: relative;
      cursor: pointer;
      position: absolute;
    }

    .memory-card .card.-front {
      background-color: #fff;
    }

    .memory-card .card.-front::before {
      content: "";
      width: 95px;
      height: 95px;
      background-color: #d4d4d4;
      border-radius: 50%;
      position: absolute;
    }

    .memory-card .card > .icon {
      width: 100px;
      height: 100px;
    }

    .memory-card .card.-front > .icon {
      position: absolute;
      transform: translateY(-13px);
    }
  `;

  $head.insertBefore($style, null);

  return ({ src, alt }) => `
  <div class="memory-card" onClick="handleClick(this)">
    <article class="card -front">
      <img 
        class="icon" 
        src= "${src}"
        alt="${alt}"
      />
    </article>
      <article class="card">
      <img 
        class="icon" 
        src= "img/icon-collab.svg"
        alt="Collab mascot icon"
      />
    </article>
  </div>
  `;
}

let score = 0;

const handleClick = ($component) => {
  if (!$component.classList.contains("-active")) {
    if (qtdActiveMemoryCard < 2) {
      $component.classList.add("-active");
    }

    if (qtdActiveMemoryCard === 1) {
      const $memoryCards = document.querySelectorAll(".memory-card.-active");

      if (
        $memoryCards[0].querySelector(".-front .icon").getAttribute("src") ===
        $memoryCards[1].querySelector(".-front .icon").getAttribute("src")
      ) {
        score++;
        console.log(score);
        $memoryCards.forEach(($memoryCard) => {
          $memoryCard.classList.add("-score");
          $memoryCard.classList.remove("-active");
        });
      } else {
        setTimeout(() => {
          const $activeMemoryCards = document.querySelectorAll(
            ".memory-card.-active"
          );

          $activeMemoryCards.forEach(($card) => {
            $card.classList.remove("-active");
          });
          qtdActiveMemoryCard = 0;
        }, 1500);
      }
    }
  }
};
