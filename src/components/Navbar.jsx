import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ token }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", gap: "5px" }}>
      {token ? (
        <>
          <Link to="/home">Home</Link>
          <Link to="/add">Add new +</Link>
        </>
      ) : (
        <>
          <Link to="/">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
