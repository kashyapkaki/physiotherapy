import SPONSORAVIVA from "../images/SPONSOR_AVIVA.png";
import SPONSORCORU from "../images/SPONSOR_CORU.jpg";
import SPONSORIRISHLIFE from "../images/SPONSOR_IRISHLIFE.png";
import SPONSORISCP from "../images/SPONSOR_ISCP.png";
import SPONSORLAYA from "../images/SPONSOR_LAYA.png";
import SPONSORVHI from "../images/SPONSOR_VHI.png";
import React from "react";
import { Link } from "react-router-dom";
import ContactBoxes from "../components/shared/UI/ContactBoxes";
import InsuranceBox from "./shared/UI/InsuranceBox";

const box1 = [
  {
    img: SPONSORAVIVA,
    link: "https://www.aviva.co.uk/health/health-products/physio-essentials/",
  },
  {
    img: SPONSORVHI,
    link: "https://www1.vhi.ie/home",
  },
  {
    img: SPONSORLAYA,
    link: "https://www.layahealthcare.ie/formembers/participatingtherapists/",
  },
  {
    img: SPONSORIRISHLIFE,
    link: "https://www.irishlifehealth.ie/benefits/back-up-benefit",
  },
];

const box2 = [
  {
    img: SPONSORISCP,
    link: "https://askthephysio.ie/",
  },
  {
    img: SPONSORCORU,
    link: "https://coru.ie/about-us/",
  },
];

const Home_Visit = () => {
  return (
    <div className="home-visit__wrapper">
      <div className="home-visit__container">
        <div className="home-visit__logo">
          <div className="home-visit__logo-text">
            <div className="home-visit__logo-header">
              365 Physiotherapy Home Visits Service
            </div>
            <div className="home-visit__logo-body">
              <div className="home-visit__logo-content">
                <div className="home-visit__logo-content-item">
                  <div className="home-visit__logo-content-item-text">
                    &#x2714; Saves your time
                  </div>
                  <div className="home-visit__logo-content-item-text">
                    &#x2714; Comes to Your Convenient Location
                  </div>
                </div>
                <div className="home-visit__logo-content-item">
                  <div className="home-visit__logo-content-item-text">
                    &#x2714; Individualise home exercise program
                  </div>
                  <div className="home-visit__logo-content-item-text">
                    &#x2714; Less Risk of Exposure to Covid 19
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <img src={HomeVisitIcon} alt="Home Visit page icon"/> */}
        </div>
        <div className="home-visit__body">
          {/* div[className="tiles home-visit__tiles"]>div[className="tiles__header"]div[className="tiles__content"] */}
          <div className="tiles home-visit__intro-tile">
            <div className="tiles__header">About Home Visit Service </div>
            <div className="tiles__content--background">
              <strong className="fees-page__table--header">
                Our home visit service meets your needs if:
              </strong>
              <ul className="tiles__list tiles__content-list no-border no-background no-box-shadow">
                <li className="tiles__item tiles__content-list-item">
                  You lack adequate transportation or access to transportation
                  to get to your local physiotherapy clinic.
                </li>
                <li className="tiles__item tiles__content-list-item">
                  You are short of time or cannot leave the house due to other
                  commitments.
                </li>
                <li className="tiles__item tiles__content-list-item">
                  Your functional mobility is limited, and you cannot travel to
                  a clinic.
                </li>
                <li className="tiles__item tiles__content-list-item">
                  You simply desire a private physiotherapy session in your
                  home.
                </li>
              </ul>
            </div>
          </div>
          <div className="home-visit__tiles">
            <div className="tiles">
              <div className="tiles__header">Home Visit Services</div>
              <ul className="tiles__list no-border">
                <li className="tiles__item">
                  <Link to="/homevisit/services/agedCareRehab">
                    Aged Care, Balance, Falls Prevention and Rehabilitation
                  </Link>
                </li>
                <li className="tiles__item">
                  <Link to="/homevisit/services/neurologicalRehab">
                    Neurological Physiotherapy and Rehabilitation
                  </Link>
                </li>
                <li className="tiles__item">
                  <Link to="/homevisit/services/orthopaedicrehab">
                    Orthopaedic Physiotherapy and Rehabilitation
                  </Link>
                </li>
                <li className="tiles__item">
                  <Link to="/homevisit/services/painmanagement">
                    Pain Management Physiotherapy
                  </Link>
                </li>
                <li className="tiles__item">
                  <Link to="/homevisit/services/operativerehab">
                    Pre- and Post-Operative Physiotherapy and Rehabilitation
                  </Link>
                </li>
              </ul>
            </div>
            <div className="tiles">
              <div className="tiles__header">Conditions/Treatments</div>
              <ul className="tiles__list no-border">
                <li className="tiles__item">
                  <Link to="/homevisit/conditions/agedCareRehab">
                    Aged care Conditions
                  </Link>
                </li>
                <li className="tiles__item">
                  <Link to="/homevisit/conditions/neurologicalRehab">
                    Neurological Conditions
                  </Link>
                </li>
                <li className="tiles__item">
                  <Link to="/homevisit/conditions/orthopaedicrehab">
                    Orthopaedic Conditions
                  </Link>
                </li>
                <li className="tiles__item">
                  <Link to="/homevisit/conditions/painmanagement">
                    Pain Management Conditions
                  </Link>
                </li>
                <li className="tiles__item">
                  <Link to="/homevisit/conditions/operativerehab">
                    Pre Post Operative Care and Rehabilitation Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="tiles home-page__footer-tile">
        <div className="tiles__header">
          <ul className="tiles__list tiles--no-list no-border no-background no-box-shadow">
            <li className="tiles__item">
              Reduce your pain, increase your mobility, and promote recovery in
              the most comfortable and relaxing environment a healthcare
              practice can offer.
            </li>
            <li className="tiles__item">
              <strong>
                <Link className="home-page__link" to={`/clinic`}>
                  Local Clinic
                </Link>
              </strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="home-page__footer-box justify-center">
        <InsuranceBox imgs={box1} right={true}></InsuranceBox>
      </div>
      <div className="home-page__footer-box">
        <InsuranceBox imgs={box2} left={true}></InsuranceBox>
      </div>
      <div className="home-page__footer-box-container">
        <div className="margin-center w-100p">
          <ContactBoxes></ContactBoxes>
        </div>
      </div>
    </div>
  );
};

export default Home_Visit;
