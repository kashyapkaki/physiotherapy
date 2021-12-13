import UpperbackConditionsImage from "../../../../images/UpperBackConditionsImage.png";
import React from "react";
import { Link } from "react-router-dom";

function UpperBackConditions() {
  return (
    <div
      id={"upperbackconditions"}
      className="background-page conditions__container"
    >
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
          src={UpperbackConditionsImage}
          alt="Upper Back icon"
        />
      </div>
      <div className="conditions__content">
        <div className="conditions__tile-header">Upper-Back Conditions</div>
        <ul className="conditions__list no-border">
          <li className="tiles__item">Thoraco-Lumbar Junction Syndrome</li>
          <li className="tiles__item">Costochondritis</li>
          <li className="tiles__item">T4 Syndrome</li>
          <li className="tiles__item">Scapular Pathology</li>
          <li className="tiles__item">Thoracic Disc Herniation</li>
          <li className="tiles__item">
            Individual Muscle Pathology with Nerve Irritation
          </li>
          <li className="tiles__item">Post-operative Upper Back Surgery</li>
        </ul>
      </div>
    </div>
  );
}

export default UpperBackConditions;
