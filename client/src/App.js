import React, { useCallback, useEffect, useState } from "react";
import { Link, Redirect, Route, useHistory } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import Modal from "./components/shared/UI/Modal";
import Navbar from "./components/shared/UI/Navbar";
import Copyright from "./fixtures/PrivacyPolicy.json";
import TermsAndConditions from "./fixtures/TermsAndConditions.json";
import EmailIcon from "./images/email_icon.png";
import Logo365 from "./images/Logo/365Logo.png";
import PhoneIcon from "./images/phone_icon.png";
import routes from "./routes";
// SERVICES
import productService from "./services/productService";

function App() {
  let showPrivacyModal = false;
  let showTermsModal = false;
  let activeClass = "margin-top--20";
  let activeTab = "Home";
  const history = useHistory();
  const [products, setproducts] = useState(null);

  const setActiveNavTab = () => (activeTab = "Home");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let appContainer = document.getElementsByClassName("App-container");
      if (window.scrollY > 20 && appContainer) {
        appContainer[0].classList.remove(activeClass);
      } else {
        appContainer[0].classList.add(activeClass);
      }
    });
    document
      .getElementsByClassName("App")[0]
      .addEventListener("click", () => hideModalPopup("showModal"));
    if (!products) {
      getProducts();
    }
    return () => {
      document
        .getElementsByClassName("App")[0]
        .removeEventListener("click", hideModalPopup);
    };
    // eslint-disable-next-line no-use-before-define
  });

  const getProducts = async () => {
    let res = await productService.getAll();
    //console.log(res);
    setproducts(res);
  };

  const showModalPopup = (modal) => {
    let modalElements = document.getElementsByClassName("modal__" + modal);
    let allModalElements = document.getElementsByClassName("showModal");
    closeAllModals(allModalElements);
    showPrivacyModal = modalElements.length !== 0 && modal === "Privacy";
    showTermsModal = modalElements.length !== 0 && modal === "Terms";
    if (modalElements.length !== 0) {
      modalElements[0].classList.add("showModal");
    }
  };

  const hideModalPopup = useCallback((modal) => {
    let modalElements = [];
    if (modal === "showModal") {
      modalElements = document.getElementsByClassName(modal);
      closeAllModals(modalElements);
      return;
    } else {
      modalElements = document.getElementsByClassName("modal__" + modal);
    }
    if (modal === "Privacy") {
      showPrivacyModal = false;
    } else if (modal === "Terms") {
      showTermsModal = false;
    }
    if (modalElements.length !== 0) {
      modalElements[0].classList.remove("showModal");
    }
  }, []);

  const closeAllModals = (modalElements) => {
    if (modalElements.length === 0) {
      return;
    }
    showPrivacyModal = false;
    showTermsModal = false;
    console.log(modalElements);
    for (let i = 0; i < modalElements.length; i++) {
      modalElements[i].classList.remove("showModal");
    }
  };

  // const renderProduct = product => {     return (         <li key={product._id}
  // className="list__item product">             <h3
  // className="product__name">{product.name}</h3>             <p
  // className="product__description">{product.description}</p>         </li> );
  // };

  return (
    <div>
      <header className="App">
        <div className={"App-container " + activeClass}>
          <Link to="/">
            {/* {() => navbarRef.current.setActiveTab('Home')} */}
            <div className="App-logo" onClick={setActiveNavTab}>
              {/* {navbarRef} */}
              <img
                className="App-logo__img"
                src={Logo365}
                alt="365 Physiotherapy"
              ></img>
            </div>
          </Link>
          <div className="App__contact-info">
            <img
              className="App__contact-info-icon"
              src={PhoneIcon}
              alt="Phone icon"
            ></img>
            <span>+353 830985073</span>
          </div>
          <div className="App__contact-email">
            <img
              className="App__contact-email-icon"
              src={EmailIcon}
              alt="Email"
            />
            <span>contact@365physiotherapy.ie</span>
          </div>
          <Navbar
            activeNavTab={activeTab}
            navItems={[
              "Home",
              "Clinic",
              "Home Visit",
              "About Us",
              "Testimonials",
              "Fees",
              "Booking",
              "Contact Us",
            ]}
          >
            {/* // "Covid19", "Booking", "Contact Us"  */}
          </Navbar>
        </div>
        <div className="div-separator">&nbsp;</div>
        <AnimatedSwitch
          atEnter={{ opacity: 0.5, scale: 1.2 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1, scale: 1.2 }}
          className="switch-wrapper"
        >
          {routes.map((value, index) => {
            return (
              <Route
                key={index}
                exact
                path={value.path}
                component={value.component}
              />
            );
          })}
        </AnimatedSwitch>
      </header>
      <footer className="footer">
        <div>
          365 Physiotherapy | Copyright &#169; 2021. All Rights Reserved |
          <button onClick={() => history.push("/privacy-policy")}>
            Privacy Policy
          </button>
          |
          <button onClick={() => history.push("/terms-conditions")}>
            Terms and Conditions.
          </button>
        </div>
      </footer>
      {/* <Modal
        type="Privacy"
        showModalDialog={showPrivacyModal}
        content={Copyright}
        hideModal={() => hideModalPopup("Privacy")}
      >
        
      </Modal> */}
      {/* <Modal
        type="Terms"
        showModalDialog={showTermsModal}
        content={TermsAndConditions}
        hideModal={() => hideModalPopup("Terms")}
      >
        
      </Modal> */}
    </div>
  );
}

export default App;
