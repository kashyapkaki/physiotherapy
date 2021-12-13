import LowerBackConditionsImage from "../../../../images/LowerBackConditionsImage.jpg";
import React from "react";
import { Link } from "react-router-dom";

function MiddleLowerBackCondtions() {
  return (
    <div
      id={"lowerbackconditions"}
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
          src={LowerBackConditionsImage}
          alt="LowerBackConditionsImage icon"
        />
      </div>
      <div className="conditions__content">
        <div className="conditions__tile-header">
          Lower Back and Sacro Iliac Joint Conditions
        </div>
        <ul className="conditions__list no-border">
          <li className="tiles__item">Lumbar Disc Bulge and Herniation</li>
          <li className="tiles__item">
            Low back Facet joints strain/degeneration
          </li>
          <li className="tiles__item">
            Instability (Spondylolisthesis/Spondylolysis)
          </li>
          <li className="tiles__item">
            Muscle Pathologies (Lumbago/Mechanical
          </li>
          <li className="tiles__item">Piriformis Syndrome</li>
          <li className="tiles__item">Sacro Iliac Joint Strain</li>
          <li className="tiles__item">Degenerative Disc Disease</li>
          <li className="tiles__item">Discectomy and Fusion Surgery</li>
          <li className="tiles__item">Back and Core Strengthening</li>
          <li className="tiles__item">Post-operative Low back Surgery</li>
        </ul>
      </div>
    </div>
  );
}

export default MiddleLowerBackCondtions;
