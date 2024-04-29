import { useState } from "react";

type TFilterLink = "all" | "blue" | "red" | "green" | "black" | "orange";

export const FilterLinkComponent = () => {
  const [filterLinkState, setFilterLinkState] = useState<TFilterLink>("all");

  const checkIfActive = (state: TFilterLink) =>
    state === filterLinkState ? "active" : "";

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
    </>
  );
};
