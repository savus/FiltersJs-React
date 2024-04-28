document.addEventListener("DOMContentLoaded", () => {
  const filterLink = ".filter-link";
  const filterLinks = Array.from(document.querySelectorAll(filterLink));

  const setActive = (element, selector) => {
    const activeElement = document.querySelector(`${selector}.active`);
    if (activeElement !== null) {
      activeElement.classList.remove("active");
    }
    element.classList.add("active");
  };

  filterLinks.map((link) => {
    link.addEventListener("click", () => {
      setActive(link, ".filter-link");
    });
  });
});
