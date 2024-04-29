document.addEventListener("DOMContentLoaded", () => {
  const filterLink = ".filter-link";
  const filterLinkParent = ".filter-links";
  const filteredBlock = ".filtered-block";

  const filterLinkContainer = document.querySelector(`${filterLinkParent}`);
  const filterLinks = Array.from(document.querySelectorAll(`${filterLink}`));
  const filteredBlocks = document.querySelectorAll(filteredBlock);

  const setActive = (element, selector) => {
    const selectedElement = document.querySelector(`${selector}.active`);
    if (selectedElement !== null) selectedElement.classList.remove("active");
    element.classList.add("active");
  };

  filterLinkContainer.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("filter-link")) {
      const dataFilter = target.dataset.filter;
      setActive(target, filterLink);
      filteredBlocks.forEach((block) => {
        const dataItem = block.dataset.item;
        if (dataFilter === "all") block.style.display = "flex";
        else if (dataFilter === dataItem) block.style.display = "flex";
        else block.style.display = "none";
      });
    }
  });
});
