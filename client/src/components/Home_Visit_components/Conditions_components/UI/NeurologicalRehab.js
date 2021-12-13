import NeurologicalConditionsImage from "../../../../images/NeurologicalConditionsImage.jpg";
import React from "react";
import { Link } from "react-router-dom";

function NeurologicalRehab(props) {
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
          src={NeurologicalConditionsImage}
          alt="Muculoskeletal icon"
        />
      </div>
      <div className="conditions__content">
        <div className="conditions__tile-header">NeurologicalConditions</div>
        <div className="conditions__tile-content">
          <ul className="tiles__list no-border no-background no-box-shadow">
            <li className="tiles__item">Stroke</li>
            <li className="tiles__item">Parkinson’s Disease</li>
            <li className="tiles__item">Multiple Sclerosis</li>
            <li className="tiles__item">Acquired brain injury</li>
            <li className="tiles__item">Spinal Cord Injuries</li>
            <li className="tiles__item">
              Neuropathy including nerve injuries – drop foot and wrist drop
            </li>
            <li className="tiles__item">
              Parkinson’s disease and Parkinsonism’s
            </li>
            <li className="tiles__item">Ataxias –Cerebellar lesions</li>
            <li className="tiles__item">Bell’s Palsy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NeurologicalRehab;
