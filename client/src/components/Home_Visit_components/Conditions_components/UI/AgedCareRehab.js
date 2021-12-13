import AgedCareRehabImage from "../../../../images/AgedCareConditionImage.png";
import React from "react";
import { Link } from "react-router-dom";

function AgedCareRehab(props) {
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
          src={AgedCareRehabImage}
          alt="Muculoskeletal icon"
        />
      </div>
      <div className="conditions__content">
        <div className="conditions__tile-header">Aged Care Conditions</div>
        <div className="conditions__tile-content tiles__list no-background no-box-shadow no-border">
          <li>Joints Pain</li>
          <li>Generalized weakness</li>
          <li>Post Covid19 Physical Health Decondition</li>
          <li>Post Covid19 Induced Sarcopenia</li>
          <li>Post Covid19 Induced Osteopenia</li>
          <li>Post Covid19 Maintain Bone Health or Osteoporosis</li>
          <li>Balance Impairment, Falls Management and Prevention</li>
          <li>
            Reduced Quality of Life with difficulty to manage independently
            daily routine
          </li>
          <li>Functional difficulties with getting on and off chair</li>
          <li>Functional difficulties with getting on and off Toilet</li>
          <li>
            Functional difficulties with getting into bed, turning in bed and
            getting out of bed
          </li>
          <li>Difficulty with Stairs Mobility</li>
          <li>Difficulty with Sit to Stand and Stand to walk</li>
          <li>Difficulty with Transfers in and out of shower or Bath</li>
        </div>
      </div>
    </div>
  );
}

export default AgedCareRehab;
