import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from 'react-icons/hi';
import "./Header.css";

const Header = () => {
  const [searchTermLocal, setSearchTermLocal] = useState('');

  const onSearchTermChange = (e) => {
    setSearchTermLocal(e.target.value);
  };

  const onSearchTermSubmit = (e) => {
    e.preventDefault();
    //dispatch(setSearchTerm(searchTermLocal));
  };

  return (
    <header>
      <div className="logo">
        <img
          src="reddit-logo-removebg-preview.png"
          alt="Reddit App Logo"
          className="logo-icon"
        />
        <h1 className="logo-title">
          Reddit<span className="reddit-color">Lite</span>
        </h1>
      </div>
      <form className="search" onSubmit={onSearchTermSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={searchTermLocal}
          onChange={onSearchTermChange}
          aria-label="Search posts"
        />
        <button type="submit" onClick={onSearchTermSubmit} aria-label="Search">
          <HiOutlineSearch />
        </button>
      </form>
    </header>
  );
};

export default Header;
