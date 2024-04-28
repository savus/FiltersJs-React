document.addEventListener("DOMContentLoaded", () => {
  const filterLink = ".filter-link";
  const portfolioData = "[data-item]";

  const filterLinks = Array.from(document.querySelectorAll(filterLink));
  const portfolioItems = Array.from(document.querySelectorAll(portfolioData));

  const setActive = (element, selector) => {
    const activeElement = document.querySelector(`${selector}.active`);
    if (activeElement !== null) {
      activeElement.classList.remove("active");
    }
    element.classList.add("active");
  };

  filterLinks.map((link) => {
    link.addEventListener("click", () => {
      const filter = link.dataset.filter;
      setActive(link, ".filter-link");
      portfolioItems.forEach((item) => {
        switch (filter) {
          case "all":
            item.style.display = "block";
            break;
          case item.dataset.item:
            item.style.display = "block";
            break;
          default:
            item.style.display = "none";
        }
      });
    });
  });
});
