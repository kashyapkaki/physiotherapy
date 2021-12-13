import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar(props) {
  const [activeTab, setActiveNavTab] = useState(props.activeNavTab);

  const setActiveTab = (evt) => {
    document.getElementById("navbar-toggle").checked = false;

    setActiveNavTab(evt.target.text);
  };
  const location = useLocation();
  const pathName = location.pathname.replace("/", "").toUpperCase();

  const getTabFromPathName = (path) => {
    switch (path) {
      case "":
        return "Home";
      case "CLINIC":
        return "Clinic";
      case "HOMEVISIT":
        return "Home Visit";
      case "ABOUTUS":
        return "About Us";
      case "CONTACTUS":
        return "Contact Us";
      case "TESTIMONIALS":
        return "Testimonials";
      case "FEES":
        return "Fees";
      case "BOOKING":
        return "Booking";
      default:
        break;
    }
  };

  useEffect(() => {
    setActiveNavTab(getTabFromPathName(pathName));
  }, [setActiveNavTab, pathName]);

  return (
    <>
      <nav className="navbar">
        <ul className="navbar__list">
          {props.navItems.map((value, index) => {
            return (
              <li
                key={index}
                id={value}
                title={value}
                onClick={(evt) => setActiveTab(evt)}
                className={
                  activeTab === value && getTabFromPathName(pathName) === value
                    ? "navbar__item navbar__item--active"
                    : "navbar__item"
                }
              >
                <Link
                  to={
                    value === "Home"
                      ? "/"
                      : "/" + value.toLowerCase().replace(" ", "")
                  }
                >
                  {value}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* <React.Fragment></React.Fragment>
       */}
      <div className="nav">
        <div className="header header-fixed">
          <div className="navbara container">
            {/* <div class="logo"><a href="#home">LOGO</a></div> */}
            <input type="checkbox" id="navbar-toggle" />
            <label htmlFor="navbar-toggle">
              <i></i>
            </label>
            <nav className="menu">
              <ul>
                {/* <li><a href="#home">Home</a></li>
                    <li><a href="#Clinic">CLINIC</a></li>
                    <li><a href="#Home Visit">HOMEVISIT</a></li>
                    <li><a href="#About Us">ABOUTUS</a></li>
                    <li><a href="#Contact Us">CONTACTUS</a></li>
                    <li><a href="#Testimonials">TESTIMONIALS</a></li>
                    <li><a href="#fees">FEES</a></li>
                    <li><a href="#Booking">BOOKING</a></li> */}
                {props.navItems.map((value, index) => {
                  return (
                    <li
                      key={index}
                      id={value}
                      title={value}
                      onClick={(evt) => setActiveTab(evt)}
                      className={
                        activeTab === value &&
                        getTabFromPathName(pathName) === value
                          ? "navbar__item navbar__item--active"
                          : "navbar__item"
                      }
                    >
                      <Link
                        to={
                          value === "Home"
                            ? "/"
                            : "/" + value.toLowerCase().replace(" ", "")
                        }
                      >
                        {value}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
