import React from 'react';
import { Link } from 'react-router-dom';
import Menu from "../../data/Menu.json";
const mainMenu = Menu

const Nav = () => {
  return (
    <ul className="mainmenu">
      {mainMenu.map((menuItem, index) => (
        <li key={index} className="has-droupdown">
          <a href={menuItem.url} target={menuItem.target}>
            {menuItem.label}
          </a>
          {menuItem.subMenu.length > 0 && (
            <ul className="submenu">
              {menuItem.subMenu.map((subMenuItem, subIndex) => (
                <li key={subIndex}>
                  <a href={subMenuItem.url} target={subMenuItem.target}>
                    {subMenuItem.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Nav;