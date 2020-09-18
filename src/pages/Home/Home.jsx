import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "../../component/Search";

//https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png
//https://live.staticflickr.com/2776/4301084717_3566a1a090_n.jpg
//http://lofrev.net/wp-content/photos/2014/10/Logo-search.jpg

export default function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <div className="home-headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home-headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home-body">
        <img
          src="https://live.staticflickr.com/2776/4301084717_3566a1a090_n.jpg"
          alt=""
        ></img>
        <div className="home-inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}
