import KneeConditionsImageSVG from "../../../../images/KneeConditionsImage2.png";
import React from "react";
import { Link } from "react-router-dom";

function KneeConditions() {
  return (
    <div
      id={"kneeconditions"}
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
          src={KneeConditionsImageSVG}
          alt="KneeConditionsImageSVG icon"
        />
      </div>
      <div className="conditions__content">
        <div className="conditions__tile-header">Knee Conditions</div>
        <ul className="conditions__list">
          <li className="tiles__item">Patello-femoral or Anterior Knee Pain</li>
          <li className="tiles__item">ACL Reconstructive Surgery</li>
          <li className="tiles__item">Post-operative Arthroscopic Surgery</li>
          <li className="tiles__item">Meniscal and Ligament Injuries</li>
          <li className="tiles__item">Muscle Tears and Strains</li>
          <li className="tiles__item">Runners ITB Syndrome</li>
          <li className="tiles__item">Hamstring Tendinopathies</li>
        </ul>
      </div>
    </div>
  );
}

export default KneeConditions;
