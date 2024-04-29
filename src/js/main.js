document.addEventListener("DOMContentLoaded", () => {
  const dataFilter = "[data-filter]";
  const filterLink = "filter-link";
  const filterLinkParent = ".javascript-filter-links";
  const filteredBlock = ".portfolio-container .filtered-block";

  const filterLinksContainer = document.querySelector(filterLinkParent);
  const filteredBlocks = document.querySelectorAll(filteredBlock);

  const searchField = ".search-input-field";
  const searchInputField = document.querySelector(searchField);
  const searchFilteredBlock = ".search-filtered-blocks .filtered-block";
  const searchFilteredBlocks = document.querySelectorAll(searchFilteredBlock);

  const setActive = (element, selector) => {
    const selectedElement = document.querySelector(`${selector}.active`);
    if (selectedElement !== null) selectedElement.classList.remove("active");
    element.classList.add("active");
  };

  filterLinksContainer.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains(filterLink)) {
      const filter = target.dataset.filter;
      setActive(target, dataFilter);
      filteredBlocks.forEach((block) => {
        const dataItem = block.dataset.item;
        switch (filter) {
          case "all":
            block.style.display = "flex";
            break;
          case dataItem:
            block.style.display = "flex";
            break;
          default:
            block.style.display = "none";
        }
      });
    }
  });

  searchInputField.addEventListener("keyup", (e) => {
    const searchInput = e.target.value.toLowerCase().trim();

    searchFilteredBlocks.forEach((block) => {
      const dataItem = block.dataset.item;
      if (searchInput === "all") block.style.display = "flex";
      else if (searchInput.includes(dataItem)) block.style.display = "flex";
      else block.style.display = "none";
    });
  });
});
