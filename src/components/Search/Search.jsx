import React from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";

export default function Search() {
  return (
    <div className="search">
      <div className="search-input">
        <SearchIcon className="search-inputIcon" />
        <input />
        <MicIcon className="search-micIcon" />
      </div>
      <div className="search-buttons">
        <Button variant="outlined">Google Search</Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </div>
  );
}
