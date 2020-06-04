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

(() => {
  const $head = document.querySelector("head");

  const $style = document.createElement("style");

  $style.textContent = `
  .memory-card {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f25a70;
    height: 155px;
    width: 155px;
    border-radius: 30px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    position: relative;
    cursor: pointer;
  }

  .memory-card.-front {
    background-color: #fff;
  }

  .memory-card.-front::before {
    content: "";
    width: 95px;
    height: 95px;
    background-color: #d4d4d4;
    border-radius: 50%;
    position: absolute;
  }

  .memory-card > .icon {
    width: 100px;
    height: 100px;
  }

  .memory-card.-front > .icon {
    position: absolute;
    transform: translateY(-13px);
  }`;

  $head.insertBefore($style, null);
})();
