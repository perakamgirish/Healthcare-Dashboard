import React from "react";
import { FiMenu, FiSearch, FiBell, FiPlus, FiUser } from "react-icons/fi";
import "./Header.css";

interface HeaderProps {
  onMenuClick: () => void;
  isMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, isMenuOpen }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button
          className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
          onClick={onMenuClick}
          aria-label="Toggle menu"
        >
          <FiMenu />
        </button>
        <div className="logo">
          <h1>Healthcare Dashboard</h1>
        </div>
      </div>
      <div className="header-right">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <FiSearch className="search-icon" />
        </div>
        <button className="notification-button" aria-label="Notifications">
          <FiBell />
        </button>
        <button className="add-button" aria-label="Add new">
          <FiPlus />
        </button>
        <div className="user-profile">
          <FiUser className="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
