import InsuranceBox from "../components/shared/UI/InsuranceBox";
import SPONSORAVIVA from "../images/SPONSOR_AVIVA.png";
import SPONSORCORU from "../images/SPONSOR_CORU.jpg";
import SPONSORIRISHLIFE from "../images/SPONSOR_IRISHLIFE.png";
import SPONSORISCP from "../images/SPONSOR_ISCP.png";
import SPONSORLAYA from "../images/SPONSOR_LAYA.png";
import SPONSORVHI from "../images/SPONSOR_VHI.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HelmetTags from "./shared/UI/HelmetTags";
import ContactBoxes from "../components/shared/UI/ContactBoxes";
import AdminImage from "../images/Admin_Venkateswari.JPG";
import EmpImage from "../images/Emp_thirupal.jpg";

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

const About_Us = () => {
  const [showTile1Content, setTile1ContentState] = useState(false);
  const [showTile2Content, setTile2ContentState] = useState(false);

  const toggleTile1ContentState = () => {
    setTile1ContentState(!showTile1Content);
  };
  const toggleTile2ContentState = () => {
    setTile2ContentState(!showTile2Content);
  };
  return (
    <>
      <HelmetTags
        title="About Us"
        desc="Qualified Chartered Senior Physiotherapist works in  365 Physiotherapy Dublin "
        keywords=" Best Physiotherapist , Expert Physiotherapist, Local Physiotherapist , Physiotherapist near me , Physio in Dublin 9"
      />
      <div className="about-us__container margin-bottom--35">
        <div className="about-us__title"> Our Team</div>
        <div className="about-us__tile-container">
          <div className="about-us__img">
            {/* <img src={ClinicPageIcon} alt="Clinic page icon"/> */}
          </div>
          <div className="tiles about-us__tile">
            <div className="about-us__tiles-header tiles__header tiles--no-background">
              <div className="tiles__header-image">
                <img src={EmpImage} alt="Clinic page icon" />
              </div>
              <div className="tiles__header-content tiles--background">
                <span></span>
                <div className="tiles__header-text">
                  <span className="tiles-font--25">Thirupal Ragi</span>
                  <p>BSc., BPT., MISCP.</p>
                  <p>Senior Chartered Physiotherapist</p>
                </div>
              </div>
              <div className="tiles__header-accordion">
                <div
                  onClick={toggleTile1ContentState}
                  className={
                    showTile1Content ? "display-none" : "display-inherit"
                  }
                >
                  <i className="fa fa-plus-square"></i>
                </div>
                <div
                  onClick={toggleTile1ContentState}
                  className={
                    showTile1Content ? "display-inherit" : "display-none"
                  }
                >
                  <i className="fa fa-minus-square"></i>
                </div>
              </div>
            </div>

            <div
              className={
                showTile1Content
                  ? "tiles__content tiles__content-border"
                  : "display-none"
              }
            >
              <ul className="no-background tiles__list-intro">
                <li className="tiles__list-item no-border">
                  He is a qualified and chartered physiotherapist with 20 years
                  of work experience, including 6 years of hospital experience
                  in Raju Hospital, India, and 14 years in Primary Care Services
                  (Home Visits and Musculoskeletal Services) in the Irish Health
                  Care Sector.
                </li>
                <li className="tiles__list-item">
                  Thirupal has assessed and treated a variety of problems
                  including a wide range of neurological, orthopedic, and
                  musculoskeletal conditions.
                </li>
                <li className="tiles__list-item">
                  He is equipped with the skills and capacity to design, deliver
                  and evaluate safe and effective exercise programs to prevent,
                  manage and treat both fundamental and complex medical
                  conditions. He encourages clients to manage and control their
                  health autonomously through his acquired skills and existing
                  knowledge.
                </li>
                <li className="tiles__list-item">
                  His approach to your symptoms is ensured to be in an attentive
                  and mindful way by identifying the cause of your problem and
                  establishing a complete assessment and treatment plan, based
                  on your provided information and physical presentation.
                </li>
                <li className="tiles__list-item">
                  He discusses your treatment plan and options; he creates a
                  plan with you together and aims to restore your functional
                  movements and capacity to return to your day-to-day routine.
                </li>
                <li className="tiles__list-item">
                  Thirupal has been engaged in updating his professional
                  knowledge and obtaining new professional skills by
                  participating in ongoing modules of evidence-based practice
                  through continuous professional development, maintaining the
                  standards of the Irish Society of Chartered Physiotherapists
                  and the standards of CORU - Register of Physiotherapists.
                </li>
              </ul>
              <h2>Professional qualifications:</h2>
              <ul className="no-background tiles__list-items">
                <li className="tiles__list-item">
                  Bachelor of Science (Loyola College, Madras University, 1995)
                </li>
                <li className="tiles__list-item">
                  Bachelor of Physiotherapy (The Tamil Naidu Dr.M.G.R. Medical
                  University, 1998)
                </li>
                <li className="tiles__list-item">
                  Member of the Irish Society of Physiotherapists
                </li>
                <li className="tiles__list-item">
                  Member of the Indian Association Physiotherapists
                </li>
                <li className="tiles__list-item">
                  Member of the Federation of Indian Manual Therapists
                </li>
                <li className="tiles__list-item">
                  Member of CORU – Register of Physiotherapists
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="about-us__tile-container">
          <div className="tiles about-us__tile">
            <div className="about-us__tiles-header tiles__header tiles--no-background">
              <div className="tiles__header-image">
                <img src={AdminImage} alt="Admin icon" />
              </div>
              <div className="tiles__header-content tiles--background">
                <div className="tiles__header-text">
                  <span className="tiles-font--25">Venkateswari Ragi</span>
                  <p>Admin</p>
                  <p>Email: contact@365physiotherapy.ie</p>
                </div>
              </div>
              <div className="tiles__header-accordion">
                <div
                  onClick={toggleTile2ContentState}
                  className={
                    showTile2Content ? "display-none" : "display-inherit"
                  }
                >
                  <i className="fa fa-plus-square"></i>
                </div>
                <div
                  onClick={toggleTile2ContentState}
                  className={
                    showTile2Content ? "display-inherit" : "display-none"
                  }
                >
                  <i className="fa fa-minus-square"></i>
                </div>
              </div>
            </div>
            <div
              className={
                showTile2Content
                  ? "tiles__content tiles__content-border h-auto"
                  : "display-none"
              }
            >
              <ul className="admin-tiles__list tiles__list no-background no-box-shadow">
                <li className="tiles__list-item no-border">
                  Venkateswari is the Admin Support at 365 Physiotherapy. Her
                  responsibilities include all business activities for 365
                  Physiotherapy such as Accounting, Purchasing and Client
                  Relations.
                </li>
                <li className="tiles__list-item">
                  Venkateswari has master degree in IT, post graduate diploma in
                  science in data analytics from National College Ireland.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tiles home-page__footer-tile">
          <div className="tiles__header">
            <ul className="tiles__list tiles--no-list no-border no-background no-box-shadow">
              <li className="tiles__item">
                Reduce your pain, increase your mobility, and promote recovery
                in the most comfortable and relaxing environment a healthcare
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
        <div className="home-page__footer-box justify-center">
          <InsuranceBox imgs={box1} right={true}></InsuranceBox>
        </div>
        <div className="home-page__footer-box-container">
          <div className="margin-center w-100p">
            <ContactBoxes></ContactBoxes>
          </div>
        </div>
      </div>
    </>
  );
};

export default About_Us;
