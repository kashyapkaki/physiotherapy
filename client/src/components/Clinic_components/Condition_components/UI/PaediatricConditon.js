import PaediatricConditionsImage from "../../../../images/PaediatricConditionsImage.png";
import React from "react";
import { Link } from "react-router-dom";

function PaediatricConditon(props) {
  return (
    <div className="conditions__container">
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
          src={PaediatricConditionsImage}
          alt="PaediatricConditions icon"
        />
      </div>
      <div className="conditions__content">
        <div className="conditions__tile-header">Paediatric Conditions</div>
        <ul className="conditions__list">
          <li className="tiles__item">Flat Feet</li>
          <li className="tiles__item">Back pain</li>
          <li className="tiles__item">Joint pains</li>
          <li className="tiles__item">Neck pain</li>
          <li className="tiles__item">Shoulder pain</li>
          <li className="tiles__item">Knee pain</li>
          <li className="tiles__item">Ankle and foot pain</li>
          <li className="tiles__item">Childhood Walking Abnormalities</li>
          <li className="tiles__item">Growing Pains</li>
          <li className="tiles__item">Torticollis</li>
          <li className="tiles__item">Osgood-Schlatter’s disease</li>
          <li className="tiles__item">Osteochondritis dissecans</li>
          <li className="tiles__item">Postural problems</li>
        </ul>
      </div>
    </div>
  );
}

export default PaediatricConditon;
