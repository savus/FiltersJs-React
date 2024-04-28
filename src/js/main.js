document.addEventListener("DOMContentLoaded", () => {
  const filterLink = "filter-link";
  const portfolioData = "[data-item]";

  const filterLinks = Array.from(document.querySelectorAll(filterLink));
  const filterLinksContainer = document.querySelector(".filter-links");
  const portfolioItems = Array.from(document.querySelectorAll(portfolioData));

  const setActive = (element, selector) => {
    const activeElement = document.querySelector(`${selector}.active`);
    if (activeElement !== null) {
      activeElement.classList.remove("active");
    }
    element.classList.add("active");
  };

  /* DELEGATED EVENT */
  filterLinksContainer.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains(filterLink)) {
      const filter = target.dataset.filter;
      setActive(target, `.${filterLink}`);
      portfolioItems.forEach((item) => {
        const dataset = item.dataset.item;
        if (filter === "all") {
          item.style.display = "flex";
        } else if (filter === dataset) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
    }
    //  if (e.target.classList.contains(filterLink)) {
    //    const filter = target.dataset.filter;
    //    setActive(target, ".filter-link");
    //    portfolioItems.forEach((item) => {
    //      switch (filter) {
    //        case "all":
    //          item.style.display = "block";
    //          break;
    //        case item.dataset.item:
    //          item.style.display = "block";
    //          break;
    //        default:
    //          item.style.display = "none";
    //      }
    //    });
    //  }
  });
});
