import PostOperativeConditionImage from "../../../../images/PostOperativeConditionImage.png";
import React from "react";
import { Link } from "react-router-dom";

function OperativeRehab(props) {
  return (
    <div id={"operativeRehab"} className="conditions__container">
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
          src={PostOperativeConditionImage}
          alt="Muculoskeletal icon"
        />
      </div>
      <div className="conditions__content">
        <div className="conditions__tile-header">
          Pre Post Operative Care and Rehabilitation Conditions
        </div>
        <div className="conditions__tile-content">
          <ul className="tiles__list no-border no-background no-box-shadow">
            <li className="tiles__item">
              Post-Surgical Rehabilitation of Total Knee Replacement
            </li>
            <li className="tiles__item">
              Post-Surgical Rehabilitation of Total Hip Replacement
            </li>
            <li className="tiles__item">
              Post-Surgical Rehabilitation of Ankle and Foot Surgery
            </li>
            <li className="tiles__item">
              Post-Surgical Rehabilitation of Shoulder Surgery
            </li>
            <li className="tiles__item">
              Post-Surgical Rehabilitation of Elbow Surgery
            </li>
            <li className="tiles__item">
              Post-Surgical Rehabilitation of Spinal Surgery
            </li>
            <li className="tiles__item">
              Post-Surgical Rehabilitation of Wrist and Hand Surgery
            </li>
            <li className="tiles__item">
              Post-Surgical Rehabilitation of Cardiac Surgery
            </li>
            <li className="tiles__item">
              Post-Surgical Rehabilitation of Lung Surgery
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OperativeRehab;
