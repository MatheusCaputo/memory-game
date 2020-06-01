const createMemoryCard = ({ className, src, alt }) => `
  <article class="memory-card ${className}">
    <img 
      class="icon" 
      src= "${src}"
      alt="${alt}"
      onClick="handleClick()"
    />
  </article>
`;

const handleClick = () => alert("cartinha");
