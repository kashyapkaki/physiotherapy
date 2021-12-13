import PainManagementConditionImage from "../../../../images/PainManagementConditionImage.png";
import React from "react";
import { Link } from "react-router-dom";

function PostOperative() {
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
          src={PainManagementConditionImage}
          alt="Muculoskeletal icon"
        />
      </div>
      <div className="conditions__content">
        <div className="conditions__tile-header">
          Pain Management Conditions
        </div>
        <div className="conditions__tile-content">
          <ul className="tiles__list no-border no-background no-box-shadow">
            <li className="tiles__item">Arthritis Pain</li>
            <li className="tiles__item">Sport Injuries pain</li>
            <li className="tiles__item">Ligaments Pain</li>
            <li className="tiles__item">Postural Pain</li>
            <li className="tiles__item">Muscle Pain or Spasm</li>
            <li className="tiles__item">Tendinopathy or Tendon Pain</li>
            <li className="tiles__item">Referred Pain</li>
            <li className="tiles__item">Bursa Pain</li>
            <li className="tiles__item">Nerve impingement pain</li>
            <li className="tiles__item">Back and Neck pain</li>
            <li className="tiles__item">
              Shoulder, Elbow, Wrist and Hand Pain
            </li>
            <li className="tiles__item">Hip, Knee, Ankle and Foot Pain</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PostOperative;
