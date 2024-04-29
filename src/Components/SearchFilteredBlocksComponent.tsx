import { useState } from "react";
import { FilteredBlockComponent } from "./FilteredBlockComponent";

const coloredBlocks = [
  "blue",
  "blue",
  "blue",
  "red",
  "red",
  "green",
  "green",
  "green",
  "green",
  "orange",
  "orange",
  "orange",
  "orange",
];

export const SearchFilteredBlocksComponent = () => {
  const [searchInput, setSearchInput] = useState("");

  const filteredColoredBlocks = coloredBlocks.filter((color) => {
    const trimmedInput = searchInput.toLowerCase().trim();
    if (trimmedInput === "all" || trimmedInput === "") return true;
    else if (trimmedInput.includes(color)) return true;
    else return false;
  });

  return (
    <div className="react-search-filtered-blocks">
      <h3>Search Filtered Blocks in React</h3>
      <input
        type="text"
        className="search-input-field"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div className="search-filtered-blocks-container">
        {filteredColoredBlocks.map((color, index) => (
          <FilteredBlockComponent dataItem={color} key={index} />
        ))}
      </div>
    </div>
  );
};
