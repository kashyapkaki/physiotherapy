import HipConditionsImage from "../../../../images/HipConditionsImage.jpg";
import React from "react";
import { Link } from "react-router-dom";

function HipConditions() {
  return (
    <div id={"hipconditions"} className="background-page conditions__container">
      <div className="conditions__back-button">
        <button className="btn-back">
          <Link to={`/clinic`}>
            <button className="btn-back">&#8249;</button>
          </Link>
        </button>
      </div>
      <div className="conditions__logo">
        <img
          className="musculoskeletal__img"
          src={HipConditionsImage}
          alt="HipConditionsImage icon"
        />
      </div>
      <div className="conditions__content">
        <div className="conditions__tile-header">Hip Conditions</div>
        <ul className="conditions__list">
          <li className="tiles__item">Labral Tears</li>
          <li className="tiles__item">Gluteal Weakness and Strengthening</li>
          <li className="tiles__item">Groin Pain and Adductor Tendinopathy</li>
          <li className="tiles__item">Arthritis and Bursitis</li>
          <li className="tiles__item">Hip Flexor Tendinopathy and Weakness</li>
          <li className="tiles__item">Impingement</li>
          <li className="tiles__item">Bursitis</li>
        </ul>
      </div>
    </div>
  );
}

export default HipConditions;
