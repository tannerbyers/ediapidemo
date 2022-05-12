import React from "react";

const CodeList = ({ codeList = [] }) => {
  return (
    <div>
      {codeList.map((value) => {
        if (value) {
          return (
            <div
              style={{
                borderBottom: "1px solid black",
              }}
            >
              {" "}
              <p>
                {" "}
                <span style={{ color: "#FE5F55" }}>{value.code}</span> :{" "}
                {value.longDescription}{" "}
                <p>
                  <span style={{ color: "#577399" }}>
                    Effective Date : {value.effDate}{" "}
                    <span style={{ color: "black" }}> | </span> Termination Date
                    : {(value.termDate = "Still active")}{" "}
                  </span>
                </p>
              </p>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default CodeList;
