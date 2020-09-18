import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../../StateProvider";
import useGoogleSearch from "../../useGoogleSearch";
import { Link } from "react-router-dom";
import Search from "../../component/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default function SearchPage() {
  const [{ term }] = useStateValue();
  const { data } = useGoogleSearch(term);
  // const data = Response;

  //https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage-header">
        <Link to="/">
          <img
            className="searchPage-logo"
            src="https://live.staticflickr.com/2776/4301084717_3566a1a090_n.jpg"
            alt=""
          ></img>
        </Link>
        <div className="searchPage-headerBody">
          <Search hideButtons />
          <div className="searchPage-options">
            <div className="searchPage-optionsLeft">
              <div className="searchPage-option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage-option">
                <DescriptionIcon />
                <Link to="/all">News</Link>
              </div>
              <div className="searchPage-option">
                <ImageIcon />
                <Link to="/all">Images</Link>
              </div>
              <div className="searchPage-option">
                <LocalOfferIcon />
                <Link to="/all">Shopping</Link>
              </div>
              <div className="searchPage-option">
                <RoomIcon />
                <Link to="/all">Maps</Link>
              </div>
              <div className="searchPage-option">
                <MoreVertIcon />
                <Link to="/all">More</Link>
              </div>
            </div>
            <div className="searchPage-optionsRight">
              <div className="searchPage-option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage-option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage-results">
          <p className="searchPage-resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage-result">
              <a className="searchPage-resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage-resultImage"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=""
                    />
                  )}
                {item.displayLink}
              </a>
              <a href={item.link} className="searchPage-resultTitle">
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage-resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
