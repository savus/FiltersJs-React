import "../src/css/main.css";

function App() {
  return (
    <>
      <div className="main-container">
        <h3>Filtered Links In Js</h3>
        <ul className="filter-links">
          <li>
            <a href="#" data-filter="all" className="filter-link">
              All
            </a>
          </li>
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
        <div className="filtered-block blue" data-item="blue">
          Blue
        </div>
        <div className="filtered-block blue" data-item="blue">
          Blue
        </div>
        <div className="filtered-block blue" data-item="blue">
          Blue
        </div>
        <div className="filtered-block red" data-item="red">
          Red
        </div>
        <div className="filtered-block red" data-item="red">
          Red
        </div>
        <div className="filtered-block green" data-item="green">
          Green
        </div>
        <div className="filtered-block green" data-item="green">
          Green
        </div>
        <div className="filtered-block green" data-item="green">
          Green
        </div>
        <div className="filtered-block green" data-item="green">
          Green
        </div>
        <div className="filtered-block orange" data-item="orange">
          Orange
        </div>
        <div className="filtered-block orange" data-item="orange">
          Orange
        </div>
        <div className="filtered-block orange" data-item="orange">
          Orange
        </div>
        <div className="filtered-block orange" data-item="orange">
          Orange
        </div>
        <div className="filtered-block">Black</div>
      </div>
    </>
  );
}

export default App;
