import React from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";

export default function Search() {
  return (
    <div className="search">
      <div className="search-input">
        <SearchIcon className="search-inputIcon" />
        <input />
        <MicIcon />
      </div>
    </div>
  );
}
