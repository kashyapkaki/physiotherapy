import AgedCareRehabImage from "../../../../images/HomePageIcon2.png";
import React from "react";
import { Link } from "react-router-dom";

function AgedCareRehab(props) {
  return (
    <div id={"agedCareRehab"} className="conditions__container">
      <div className="conditions__back-button">
        <button className="btn-back">
          <Link to={`/homevisit`}>
            <button className="btn-back">&#8249;</button>
          </Link>
        </button>
      </div>
      <div className="conditions__logo">
        <img
          className="musculoskeletal__img"
          src={AgedCareRehabImage}
          alt="Muculoskeletal icon"
        />
      </div>
      <div className="conditions__content">
        <div className="conditions__tile-header">
          Aged care, balance, falls prevention and rehabilitation
        </div>
        <ul className="conditions__tile-content tiles__list no-border no-background no-box-shadow no-list">
          <li className="tiles__item">
            Our 365 Physiotherapy Home Visit Service is designed for recent or
            ongoing aging difficulties - keeping you healthy, safe, and happy
            for as long as possible in the comfort of your home.
          </li>
          <li className="tiles__item">
            Consult our local chartered physiotherapist to treat all conditions
            associated with arthritis, rehabilitation after operations such as
            hip or knee replacements, preparation for a knee or hip replacement
            operation, reduced mobility and general stiffness, difficulty with
            stairs, getting in and out of bed, and unsteady and dependant walks.
            We also help you choose the right walking aid for you.
          </li>
          <li className="tiles__item">
            Your local physiotherapist is skilled in transfer & mobility
            training, walking and balance training, aged-care strength and
            stretching programs, pre/post-surgical rehab, and neuromuscular
            exercise therapy.
          </li>
          <li className="tiles__item">
            Our physiotherapist’s main goal is to help you improve your quality
            of life by helping you to maintain your independence, help to reduce
            pain and increase mobility.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AgedCareRehab;
