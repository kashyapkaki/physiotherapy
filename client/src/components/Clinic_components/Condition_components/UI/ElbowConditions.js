import ElbowConditionsImage from "../../../../images/ElbowConditionsImage.png";
import React from "react";
import { Link } from "react-router-dom";

function ElbowConditions() {
  return (
    <div
      id={"elbowconditions"}
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
          src={ElbowConditionsImage}
          alt="ElbowConditionsImage icon"
        />
      </div>
      <div className="conditions__content">
        <div className="conditions__tile-header">Elbow Conditions</div>
        <ul className="conditions__list no-border">
          <li className="tiles__item">Medial Epicondylitis (Golfers Elbow)</li>
          <li className="tiles__item">Lateral Epicondylitis (Tennis Elbow)</li>
          <li className="tiles__item">
            Muscle Tears and Tendinopathy of Biceps and Triceps
          </li>
          <li className="tiles__item">Elbow Arthritis</li>
          <li className="tiles__item">Carpal Tunnel Syndrome</li>
          <li className="tiles__item">Sports Training Injuries</li>
          <li className="tiles__item">Ligament/Muscle Pathology</li>
          <li className="tiles__item">Ulnar Nerve Problems</li>
          <li className="tiles__item">Radial Nerve Problems</li>
          <li className="tiles__item">Post-operative Elbow Surgery</li>
        </ul>
      </div>
    </div>
  );
}

export default ElbowConditions;
