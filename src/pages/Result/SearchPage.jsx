import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../../StateProvider";
import useGoogleSearch from "../../useGoogleSearch";
import { Link } from "react-router-dom";
import Search from "../../components/Search/Search";

export default function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  // const { data } = useGoogleSearch(term);
  const data = Response;

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage-header">
        <Link to="/">
          <img
            className="searchPage-logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          ></img>
        </Link>
        <div className="searchPage-headerBody">
          <Search hideButtons />
        </div>
      </div>
      <div className="searchPage-results"></div>
    </div>
  );
}
