import ShoulderConditionsImage from "../../../../images/ShoulderConditionsImage.jpg";
import React from "react";
import { Link } from "react-router-dom";

function ShoulderConditions() {
  return (
    <div className="background-page conditions__container">
      <div className="conditions__back-button">
        <button className="btn-back">
          <Link to={`/clinic`}>
            <button className="btn-back">&#8249;</button>
          </Link>
        </button>
      </div>
      <div className="col conditions__logo">
        <img
          className="musculoskeletal__img"
          src={ShoulderConditionsImage}
          alt="ShoulderConditionsImage icon"
        />
      </div>
      <div className="col conditions__content">
        <div className="conditions__tile-header">Shoulder Conditions</div>
        <ul className="conditions__list">
          <li className="tiles__item">Rotator Cuff Tears or Tendinopathy</li>
          <li className="tiles__item">Shoulder Impingement</li>
          <li className="tiles__item">Frozen Shoulder</li>
          <li className="tiles__item">Sub Acromial Bursitis</li>
          <li className="tiles__item">Dislocations and Instability</li>
          <li className="tiles__item">A/C Joint Sprains</li>
          <li className="tiles__item">SLAP and Labral Tears</li>
          <li className="tiles__item">Sports Training Injuries</li>
          <li className="tiles__item">Post-operative Repair Surgery</li>
        </ul>
      </div>
    </div>
  );
}

export default ShoulderConditions;
