import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import CodeList from "./CodeList";

const SearchPage = (props) => {
  const [codeList, setCodeList] = useState([]);
  const [defaultCodeList, setDefaultCodeList] = useState([]);

  const [searchFilter, setSearchFilter] = useState("");

  const fetchData = async (query = null) => {
    return await fetch(
      `https://healthcarecodesetapi.herokuapp.com/codes/${query}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCodeList(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontFamily: "Raleway, sans-serif" }}>
        Procedure Code Search
      </h1>
      <SearchBar codeList={codeList} searchValue={fetchData} />
    </div>
  );
};

export default SearchPage;
