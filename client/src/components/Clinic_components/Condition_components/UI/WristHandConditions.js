import WristHandConditionsImage from "../../../../images/WristHandConditionsImage2.png";
import React from "react";
import { Link } from "react-router-dom";

function WristHandConditions() {
  return (
    <div className="background-page conditions__container rows">
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
          src={WristHandConditionsImage}
          alt="NeckConditions icon"
        />
      </div>
      <div className="col conditions__content">
        <div className="conditions__tile-header">Wrist and Hand Conditions</div>
        <ul className="conditions__list">
          <li className="tiles__item">Fingers Sprains</li>
          <li className="tiles__item">Wrist and Hand Arthriti</li>
          <li className="tiles__item">Wrist Joint Sprains and Dysfunctions</li>
          <li className="tiles__item">Sports Training Injuries</li>
          <li className="tiles__item">De Quatrain’s Disease</li>
          <li className="tiles__item">
            Un -displaced Wrist and Forearm Fractures
          </li>
          <li className="tiles__item">Extensor Carpi Ulnaris Tendonitis</li>
          <li className="tiles__item">Post-operative Wrist and Hand Surgery</li>
        </ul>
      </div>
    </div>
  );
}

export default WristHandConditions;
