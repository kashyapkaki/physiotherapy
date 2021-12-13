import NeckConditionsImage from "../../../../images/NeckConditionsImage.png";
import React from "react";
import { Link } from "react-router-dom";

function NeckConditions() {
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
          src={NeckConditionsImage}
          alt="NeckConditions icon"
        />
      </div>
      <div className="conditions__content">
        <div className="conditions__tile-header">Neck Pain and Headaches</div>
        <ul className="conditions__list">
          <li className="tiles__item">
            Cervical Spine Disc Bulge and Herniation
          </li>
          <li className="tiles__item">Degenerative Disc Disease</li>
          <li className="tiles__item">Cervical Radiculopathy</li>
          <li className="tiles__item">Facet Joint degeneration</li>
          <li className="tiles__item">Thoracic Outlet Syndrome</li>
          <li className="tiles__item">Deep Neck Muscle Strengthening</li>
          <li className="tiles__item">Chronic Neck Tension</li>
          <li className="tiles__item">Cervicogenic Headaches and Migraines</li>
          <li className="tiles__item">Tension Headache</li>
          <li className="tiles__item">Myogenic Headache</li>
        </ul>
      </div>
    </div>
  );
}

export default NeckConditions;
