import React from "react";

const Header = () => {
  const btnStyle = () => {
    return {
      background: "orange",
      height: "5rem",
      textAlign: "center",
      paddingTop: "2px",
      marginBottom: "5px",
    };
  };

  return (
    <>
      <div style={btnStyle()}>
        <h1>My Todo List</h1>
      </div>
    </>
  );
};

export default Header;
