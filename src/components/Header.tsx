import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div>
        <img
          src="https://cdn.coinranking.com/assets/90b2125641bd3178ae387e204a78488d.svg"
          alt="picture"
        />
        <b>Coinranking</b>
      </div>
      <div className="action">
        <div>
          <p>Cryptocurrencies</p>
        </div>
        <div className="exchanges">
          <p>Exchanges</p>
        </div>
        <div className="search">
          <i className="fa fa-search"></i>
        </div>
        <div className="menu">
          <i className="fa fa-bars"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
