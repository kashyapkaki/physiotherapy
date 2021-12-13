import AnkleConditionsImage from "../../../../images/AnkleConditionsImage.jpg";
import React from "react";
import { Link } from "react-router-dom";

function AnkleConditions() {
  return (
    <div
      id={"ankleconditions"}
      className="background-page conditions__container"
    >
      <div className="conditions__back-button">
        <Link to={`/clinic`}>
          <button className="btn-back">&#8249;</button>
        </Link>
      </div>
      <div className="conditions__logo">
        <img
          className="musculoskeletal__img"
          src={AnkleConditionsImage}
          alt="AnkleConditionsImage icon"
        />
      </div>
      <div className="conditions__content">
        <div className="conditions__tile-header">Ankle and Foot Conditions</div>
        <ul className="conditions__list">
          <li className="tiles__item">Plantar Fasciitis/Heel Spur</li>
          <li className="tiles__item">Calf Muscle Tears</li>
          <li className="tiles__item">Tarsal tunnel syndrome</li>
          <li className="tiles__item">Undisplaced and Stress Fractures</li>
          <li className="tiles__item">Ligament Strain</li>
          <li className="tiles__item">Bunions/sesamoiditis</li>
          <li className="tiles__item">Ankle Reconstructive Surgery</li>
          <li className="tiles__item">Custom Foot Orthotics</li>
        </ul>
      </div>
    </div>
  );
}

export default AnkleConditions;
