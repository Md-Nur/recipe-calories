import React from "react";

const NavItems = ({ myClasses }) => {
  return (
    <ul
      //   tabIndex={0}
      className={myClasses}
    >
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Recipes</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Search</a>
      </li>
    </ul>
  );
};

export default NavItems;
