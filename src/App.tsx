import "../src/css/main.css";
import { FilterLinkComponent } from "./Components/FilterLinkComponent";
import { SearchFilteredBlocksComponent } from "./Components/SearchFilteredBlocksComponent";

function App() {
  return (
    <>
      <div className="main-container">
        <h3>Filtered Links In Js</h3>
        <ul className="javascript-filter-links">
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
      <div className="search-input-filter">
        <h3>Search Filtered Links in Js</h3>
        <input type="text" className="search-input-field" />
        <div className="search-filtered-blocks">
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
        </div>
        <FilterLinkComponent />
        <SearchFilteredBlocksComponent />
      </div>
    </>
  );
}

export default App;
