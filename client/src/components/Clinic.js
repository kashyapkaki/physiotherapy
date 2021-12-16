import InsuranceBox from "../components/shared/UI/InsuranceBox";
import SPONSORAVIVA from "../images/SPONSOR_AVIVA.png";
import SPONSORCORU from "../images/SPONSOR_CORU.jpg";
import SPONSORIRISHLIFE from "../images/SPONSOR_IRISHLIFE.png";
import SPONSORISCP from "../images/SPONSOR_ISCP.png";
import SPONSORLAYA from "../images/SPONSOR_LAYA.png";
import SPONSORVHI from "../images/SPONSOR_VHI.png";
import React from "react";
import { Link } from "react-router-dom";
import ContactBoxes from "../components/shared/UI/ContactBoxes";
import ClinicPageIcon from "../images/ClinicHomePage.jpg";
import ClinicPageIcon2 from "../images/ClinicHomePage2.jpg";

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

const Clinic = () => {
  return (
    <div className="clinic-page__wrapper">
      <div className="clinic-page__container">
        <div className="clinic-page__logos">
          <div className="clinic-page__logo">
            <img src={ClinicPageIcon} alt="Clinic page icon" />
          </div>
          <div className="clinic-page__logo">
            <img src={ClinicPageIcon2} alt="Clinic page icon" />
          </div>
        </div>

        <div className="clinic-page__body">
          <div className="tiles clinic-page__intro-tile">
            <div className="tiles__header">About Clinic Service</div>
            <div className="tiles__content">
              At 365 Physiotherapy, we improve your quality of life by looking
              at all the details. Our philosophy is to enable freedom of mind
              and movement through physiotherapy. By intervening early you‘ll
              see better results; we work to prevent problems, not just fix
              them. We look at the whole you to determine how to influence
              change. By intervening early you‘ll see better results; we work to
              prevent problems, not just fix them.
            </div>
          </div>
          <div className="clinic-page__tiles margin-top--20">
            <div className="tiles">
              <div className="tiles__header">Our Services</div>
              <ul className="tiles__list no-border">
                <li className="tiles__item">
                  <Link to="/clinic/services/musculoskeletal">
                    Musculoskeletal Conditions
                  </Link>
                </li>
                <li className="tiles__item">
                  <Link to="/clinic/services/sportsinjuries">
                    Sports Injuries and Rehabilitation
                  </Link>
                </li>
                <li className="tiles__item">
                  <Link to="/clinic/services/postoperative">
                    Post-Operative Rehabilitation
                  </Link>
                </li>
                <li className="tiles__item">
                  <Link to="/clinic/services/dryneedling">Dry Needling</Link>
                </li>
                <li className="tiles__item">
                  <Link to="/clinic/services/exercisetherapy">
                    Exercise Therapy and Prescription
                  </Link>
                </li>
              </ul>
            </div>
            <div className="tiles">
              <div className="tiles__header">Conditions/Treatment</div>
              <ul className="tiles__list no-border">
                <li className="tiles__item">
                  <Link to="/clinic/conditions/neckconditions">
                    Headache and Neck Conditions
                  </Link>
                </li>
                <li className="tiles__item">
                  <Link to="/clinic/conditions/shoulder-conditions">
                    Shoulder Conditions
                  </Link>
                </li>
                <li className="tiles__item">
                  <Link to="/clinic/conditions/elbow-conditions">
                    Elbow Conditions
                  </Link>
                </li>
                <li className="tiles__item">
                  <Link to="/clinic/conditions/wrist-conditions">
                    Wrist and Hand Conditions
                  </Link>
                </li>
                <li className="tiles__item">
                  <Link to="/clinic/conditions/upper-backconditions">
                    Low Back Pain and Upper Back Conditions
                  </Link>
                </li>
                <li className="tiles__item">
                  <Link to="/clinic/conditions/middle-backconditions">
                    Mid Back Pain and Conditions
                  </Link>
                </li>
                <li className="tiles__item">
                  <Link to="/clinic/conditions/hip-conditions">
                    Hip Conditions
                  </Link>
                </li>
                <li className="tiles__item">
                  <Link to="/clinic/conditions/kneeconditions">
                    Knee Conditions
                  </Link>
                </li>
                <li className="tiles__item">
                  <Link to="/clinic/conditions/ankleconditions">
                    Ankle and Foot Conditions
                  </Link>
                </li>
                <li className="tiles__item">
                  <Link to="/clinic/conditions/paediatricconditions">
                    Paediatric Conditions
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
                <Link to={`/homevisit`}>&nbsp;Home visit service</Link>
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

export default Clinic;
