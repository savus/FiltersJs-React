import "../src/css/main.css";

function App() {
  return (
    <>
      <div className="main-container">
        <ul className="filter-links">
          <li>
            <a href="#" data-filter="blue" className="filter-link active">
              Blue
            </a>
          </li>
          <li>
            <a href="#" data-filter="red" className="filter-link">
              Red
            </a>
          </li>
          <li>
            <a href="#" data-filter="green" className="filter-link">
              Green
            </a>
          </li>
          <li>
            <a href="#" data-filter="black" className="filter-link">
              Black
            </a>
          </li>
          <li>
            <a href="#" data-filter="orange" className="filter-link">
              Orange
            </a>
          </li>
        </ul>
      </div>
      <div className="portfolio-container">
        <div className="filtered-block blue">Blue</div>
        <div className="filtered-block red">Red</div>
        <div className="filtered-block green">Green</div>
        <div className="filtered-block black">Orange</div>
        <div className="filtered-block">Black</div>
      </div>
    </>
  );
}

export default App;
