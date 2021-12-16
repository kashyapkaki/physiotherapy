import InsuranceBox from "../components/shared/UI/InsuranceBox";
import ClinicIconImage from "../images/ClinicIconImage.png";
import FeesBackgroundImage1 from "../images/FeesBackgroundImage1.png";
import FeesBackgroundImage2 from "../images/FeesBackgroundImage2.png";
import SPONSORAVIVA from "../images/SPONSOR_AVIVA.png";
import SPONSORCORU from "../images/SPONSOR_CORU.jpg";
import SPONSORIRISHLIFE from "../images/SPONSOR_IRISHLIFE.png";
import SPONSORISCP from "../images/SPONSOR_ISCP.png";
import SPONSORLAYA from "../images/SPONSOR_LAYA.png";
import SPONSORVHI from "../images/SPONSOR_VHI.png";
import React from "react";
import { Link } from "react-router-dom";
import ContactBoxes from "../components/shared/UI/ContactBoxes";

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
  {
    img: SPONSORISCP,
    link: "https://askthephysio.ie/",
  },
  {
    img: SPONSORCORU,
    link: "https://coru.ie/about-us/",
  },
];

const box2 = [];

function Fees() {
  return (
    <div className="fees-page">
      <div className="fees-page__body">
        <div className="tiles__header">365 Physiotherapy Fees</div>
        <div className="fees-page__content">
          {/* <div className="fees-page__rows">
            <div className="fees-page__row">&nbsp;</div>
            <div className="fees-page__row text-center">
              &nbsp;&nbsp;(Consulations)
            </div>
            <div className="fees-page__row">
              <div className="fees-page__table--header w-auto">Initial</div>
            </div>
            <div className="fees-page__row">
              <div className="fees-page__table--header w-auto">Follow up</div>
            </div>
          </div> */}
          <div className="fees-page__columns">
            <div className="fees-page__column">
              <div className="fees-page__table--header w-200">
                <i className="fa fa-laptop" aria-hidden="true"></i>
                <p>Online</p>
              </div>
              <div className="fees-page__table-row-values">
                <div>(Consulations)</div>
                <div className="fees-page__row-div">
                  <div className="first">
                    <h3>Initial</h3>
                  </div>
                  <div className="fees-page__row-content">55&#8364;</div>
                </div>
                <div className="fees-page__row-div">
                  <div className="first">
                    <h3>Follow up</h3>
                  </div>
                  <div className="fees-page__row-content">45&#8364;</div>
                </div>
              </div>
            </div>
            <div className="fees-page__column">
              <div className="fees-page__table--header w-200 padding-1">
                <img
                  className="fees-page__table-img"
                  src={ClinicIconImage}
                  alt="Clinic fee icon"
                />
                <p>Clinic</p>
              </div>
              <div className="fees-page__table-row-values margin-top--30">
                <div>(Consulations)</div>
                <div className="fees-page__row-div">
                  <div className="first">
                    <h3>Initial</h3>
                  </div>
                  <div className="fees-page__row-content">60&#8364;</div>
                </div>
                <div className="fees-page__row-div">
                  <div className="first">
                    <h3>Follow up</h3>
                  </div>
                  <div className="fees-page__row-content">60&#8364;</div>
                </div>
              </div>
            </div>
            <div className="fees-page__column">
              <div className="fees-page__table--header padding-15">
                <i className="fa fa-home" aria-hidden="true"></i>
                <p>Home Visits</p>
              </div>
              <div className="fees-page__table-row-values margin-top--10">
                <div>(Consulations)</div>
                <div className="fees-page__row-div">
                  <div className="first">
                    <h3>Initial</h3>
                  </div>
                  <div className="fees-page__row-content">85&#8364;</div>
                </div>
                <div className="fees-page__row-div">
                  <div className="first">
                    <h3>Follow up</h3>
                  </div>
                  <div className="fees-page__row-content">85&#8364;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <header className="fees-page__payment-header">
          We accept card and cash payment
        </header>
        <div className="fees-page__payment-imgs">
          <div>
            <img src={FeesBackgroundImage1} alt="" />
          </div>
          <div>
            <img src={FeesBackgroundImage2} alt="" />
          </div>
        </div>
        {/* <div className="fees-page__contact-us">Contact us</div> */}
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
              Find your&nbsp;
              <strong>
                <Link className="home-page__link" to={`/clinic`}>
                  Local Clinic&nbsp;
                </Link>
              </strong>
              or
              <strong>
                <Link to={`/homevisit`}>&nbsp;Home visit service</Link>
              </strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="home-page__footer-box">
        <InsuranceBox imgs={box1} right={true} flex=""></InsuranceBox>
      </div>
      <div className="home-page__footer-box-container margin-center w-auto">
        <div className="margin-center w-100p">
          <ContactBoxes></ContactBoxes>
        </div>
      </div>
    </div>
  );
}

export default Fees;
