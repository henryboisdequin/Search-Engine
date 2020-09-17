import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function Search({ hideButtons = false }) {
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search-input">
        <SearchIcon className="search-inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon className="search-micIcon" />
      </div>
      {!hideButtons ? (
        <div className="search-buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search-buttons">
          <Button
            className="search-buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search-buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}
