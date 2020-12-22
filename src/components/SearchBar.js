import React from "react";
import CodeList from "./CodeList";

const SearchBar = ({ codeList, searchValue }) => {
  return (
    <div style={{ margin: "1rem" }}>
      <input
        style={{ border: "none", borderBottom: "2px solid black", height: "5vh", width: "30vw" }}
        key="random1"
        onChange={(e) => searchValue(e.target.value)}
      />
      <CodeList codeList={codeList} />
    </div>
  );
};

export default SearchBar;
