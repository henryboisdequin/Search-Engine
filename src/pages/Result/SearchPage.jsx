import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../../StateProvider";

export default function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  return (
    <div className="searchPage">
      <div className="searchPage-header">
        <h1>You searched for {term}</h1>
      </div>
      <div className="searchPage-results"></div>
    </div>
  );
}
