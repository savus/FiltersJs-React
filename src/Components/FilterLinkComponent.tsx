import { useState } from "react";
import { FilteredBlockComponent } from "./FilteredBlockComponent";

type TFilterLink = "all" | "blue" | "red" | "green" | "black" | "orange";

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

export const FilterLinkComponent = () => {
  const [filterLinkState, setFilterLinkState] = useState<TFilterLink>("all");

  const checkIfActive = (state: TFilterLink) =>
    state === filterLinkState ? "active" : "";

  const filteredColoredBlocks = coloredBlocks.filter((color) => {
    switch (filterLinkState) {
      case "all":
        return true;
      case color:
        return true;
      default:
        return false;
    }
  });

  return (
    <>
      <h3>Filtered Links in React</h3>
      <ul className="react-filter-links">
        <li>
          <a
            href="#"
            data-filter="all"
            className={`filter-link ${checkIfActive("all")}`}
            onClick={(e) => {
              e.preventDefault();
              setFilterLinkState("all");
            }}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#"
            data-filter="blue"
            className={`filter-link ${checkIfActive("blue")}`}
            onClick={(e) => {
              e.preventDefault();
              setFilterLinkState("blue");
            }}
          >
            Blue
          </a>
        </li>
        <li>
          <a
            href="#"
            data-filter="red"
            className={`filter-link ${checkIfActive("red")}`}
            onClick={(e) => {
              e.preventDefault();
              setFilterLinkState("red");
            }}
          >
            Red
          </a>
        </li>
        <li>
          <a
            href="#"
            data-filter="green"
            className={`filter-link ${checkIfActive("green")}`}
            onClick={(e) => {
              e.preventDefault();
              setFilterLinkState("green");
            }}
          >
            Green
          </a>
        </li>
        <li>
          <a
            href="#"
            data-filter="black"
            className={`filter-link ${checkIfActive("black")}`}
            onClick={(e) => {
              e.preventDefault();
              setFilterLinkState("black");
            }}
          >
            Black
          </a>
        </li>
        <li>
          <a
            href="#"
            data-filter="orange"
            className={`filter-link ${checkIfActive("orange")}`}
            onClick={(e) => {
              e.preventDefault();
              setFilterLinkState("orange");
            }}
          >
            Orange
          </a>
        </li>
      </ul>
      <div className="react-filtered-blocks-container">
        {filteredColoredBlocks.map((color, index) => (
          <FilteredBlockComponent dataItem={color} key={index} />
        ))}
      </div>
    </>
  );
};
