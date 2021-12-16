import ContactBoxes from "../components/shared/UI/ContactBoxes";
import InsuranceBox from "../components/shared/UI/InsuranceBox";
import SPONSORAVIVA from "../images/SPONSOR_AVIVA.png";
import SPONSORCORU from "../images/SPONSOR_CORU.jpg";
import SPONSORIRISHLIFE from "../images/SPONSOR_IRISHLIFE.png";
import SPONSORISCP from "../images/SPONSOR_ISCP.png";
import SPONSORLAYA from "../images/SPONSOR_LAYA.png";
import SPONSORVHI from "../images/SPONSOR_VHI.png";
import React from "react";
import { Link } from "react-router-dom";
import homepageicon from "../images/HomePageIcon.png";
import homepageicon10 from "../images/HomePageIcon10.png";
import homepageicon11 from "../images/HomePageIcon11.png";
import homepageicon2 from "../images/HomePageIcon2.png";
import homepageicon4 from "../images/HomePageIcon4.jpg";
import homepageicon7 from "../images/HomePageIcon7.png";
import homepageicon8 from "../images/HomePageIcon8.jpg";
import homepageicon9 from "../images/HomePageIcon9.png";
import Slider from "./shared/UI/Slider";
import HelmetTags from "./shared/UI/HelmetTags";

const Images = [
  {
    image: homepageicon,
    content:
      "Comprehensive assessment and expert advice by chartered physiotherapist",
  },
  {
    image: homepageicon2,
    content: "Reduce your pain, increase your mobility and promote recovery.",
  },
  {
    image: homepageicon4,
    content:
      "Quality Care with a Personalised Treatment Plan to suit your specific needs",
  },
  {
    image: homepageicon10,
    content: "Focused on Individualise home exercise program",
  },
  {
    image: homepageicon7,
    content: "Provide both clinic and home visit services",
  },
  {
    image: homepageicon8,
    content: "Open to take appointments on public holidays AND bank holidays",
  },
  {
    image: homepageicon9,
    content:
      "Support you to manage and resolve issues through treatment, advice for self-care",
  },
  {
    image: homepageicon11,
    content: "Early Morning and Evening Appointments throughout the week",
  },
];

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
    //img: SPONSORISCP, link:"https://askthephysio.ie/"
    img: SPONSORISCP,
    link: "https://www.iscp.ie/find-a-physio/thirupal-ragi-2643?iframe=1",
  },
  {
    img: SPONSORCORU,
    link: "https://coru.ie/about-us/",
  },
];

const Home = () => {
  return (
    <>
      <HelmetTags
        title="Physiotherapy in Dublin | Physio in Dublin 9 | Physio in Santry"
        desc="365 Physiotherapy Dublin treats Back Pain, Neck Pain, Shoulder Pain, Knee Pain, Hip Pain, Foot Pain, Sports Injuries Like GAA, Tennis, Runner, Rugby and Golf."
        keywords="365 Physiotherapy Dublin,Back Pain,Neck Pain,Shoulder Pain,Knee Pain, Hip Pain,Foot Pain, Sports Injuries, GAA,Tennis,Runner,Rugby, Golf, Tennis Elbow, Physio in Dublin9, Physio in Santry, Physio in Northwood"
      />
      <div className="home-page__container">
        <div className="home-page__logo">
          <Slider images={Images} slideCounter={9}></Slider>
        </div>
        <div className="home-page__body">
          <div className="tiles home-page__intro-tile">
            <div className="tiles__header">About</div>
            <div className="tiles__content">
              {" "}
              365 Physiotherapy Dublin treats Back Pain, Neck Pain, Shoulder
              Pain, Knee Pain, Hip Pain, Foot Pain, Sports Injuries Like Gaelic
              Athletic, Tennis, Runner, Rugby and Golf. 365 Physiotherapy
              Private Practice is a client-centred care, designed to meet the
              needs of all-aged individuals.
              <div className="flex-table--header">
                <strong>Our main aims are to:</strong>
              </div>
              <div>
                <ul className="no-border">
                  <li className="tiles__item">
                    Provide the highest quality of physiotherapy based on your
                    individual assessment results.
                  </li>
                  <li className="tiles__item">
                    Offer excellent care with a personalized treatment plan to
                    suit your specific needs.
                  </li>
                  <li className="tiles__item">
                    Ensure you get back to the activities you enjoy and love in
                    an efficient and effective time.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <ul className="tiles__content no-border">
                <p className="">
                  365 Physiotherapy covers both the clinic service as well as
                  home visits. The clinic is located in Santry and home visits
                  are extended to Santry, Northwood, Swords and North Dublin
                  areas.{" "}
                </p>
                <p className="">
                  Our services are specifically designed to suit your
                  availability; we provide early morning and evening
                  appointments throughout the week, as well as weekend bookings.
                </p>
                <p className="">
                  This makes it easier for you to get the treatment you need
                  without interruption to your work, sport, or other
                  commitments, making it the convenient option for busy
                  schedules
                </p>
              </ul>
            </div>
          </div>
          <div className="tiles home-page__footer-tile">
            <div className="tiles__header">
              <ul className="tiles__list tiles--no-list no-border no-background no-box-shadow">
                <li className="tiles__item">
                  Reduce your pain, increase your mobility, and promote recovery
                  in the most comfortable and relaxing environment a healthcare
                  practice can offer. Physiotherapy Dublin
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
          <div className="home-page__footer-box-container">
            <div className="margin-center w-100p">
              <ContactBoxes></ContactBoxes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
