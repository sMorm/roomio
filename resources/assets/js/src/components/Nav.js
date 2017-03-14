import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const Nav = props => {
  return (
    <div className="side-nav">
      <div className="logoBox">
        <h1></h1>
      </div>
      <div className="bookmark">
        <Link to="/room/javascript" >
          Javascript
        </Link>
      </div>
      <div className="bookmark">
        <Link to="/room/politics">
          Politics
        </Link>
      </div>
      <div className="bookmark">
        <Link to="/room/gifs">
          Gifs
        </Link>
      </div>
      <div className="bookmark">
        <Link to="/room/photography">
          Photography
        </Link>
      </div>
      <div className="bookmark">
        <Link to="/room/movies">
          Movies
        </Link>
      </div>
      <div className="bookmark">
        <Link to="/room/programming">
          Programming
        </Link>
      </div>
      <div className="bookmark">
        <Link to="/room/music">
          Music
        </Link>
      </div>
      <div className="bookmark">
        <Link to="/room/hiphop">
          HipHop 
        </Link>
      </div>
      <div className="bookmark">
        <Link to="/room/news">
          News
        </Link>
      </div>
      <div className="bookmark">
        <Link to="/room/gaming">
          Gaming
        </Link>
      </div>
    </div>
  );
};

Nav.PropTypes = {
  locations: PropTypes.object,
};

export default Nav;