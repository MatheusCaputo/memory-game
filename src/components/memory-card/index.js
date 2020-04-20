const createMemoryCard = (card) => `
  <article class="memory-card ${card.className}">
    <img 
      class="icon" 
      src= "${card.src}"
      alt="${card.alt}"
      onClick="handleClick()"
    />
  </article>
`;

const handleClick = () => alert("cartinha");
