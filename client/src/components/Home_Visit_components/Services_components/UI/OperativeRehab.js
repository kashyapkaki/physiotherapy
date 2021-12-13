import PrePostOpConditionsImage from "../../../../images/PrePostOpConditionsImage.jpg";
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
          src={PrePostOpConditionsImage}
          alt="Muculoskeletal icon"
        />
      </div>
      <div className="conditions__content">
        <div className="conditions__tile-header">
          Pre- and Post -Operative Physiotherapy and Rehabilitation
        </div>
        <div className="conditions__tile-content">
          <ul className="tiles__list no-border no-background no-box-shadow no-list">
            <li className="tiles__item">
              Our 365 Physiotherapy Home Visit Service is designed for recent or
              ongoing Pre- and Post-Operative Physiotherapy problems - keeping
              you healthy, safe, and happy for as long as possible in the
              comfort of your home.
            </li>
            <li className="tiles__item">
              Home visits allow us to see how you manage your daily tasks at
              home and how to make these more efficient.
            </li>
            <li className="tiles__item">
              Our chartered physiotherapist works with people with Pre- and
              Post-Operative Physiotherapy conditions including Post-Surgical
              Rehabilitation of Total Knee Replacement, Post-Surgical
              Rehabilitation of Total Hip Replacement, Post-Surgical
              Rehabilitation of Ankle and Foot Surgery, Post-Surgical
              Rehabilitation of Shoulder Surgery, Post-Surgical Rehabilitation
              of Elbow Surgery, Post-Surgical Rehabilitation of Wrist and Hand
              Surgery, Post-Surgical Rehabilitation of Spinal Surgery,
              Post-Surgical Rehabilitation of Cardiac Surgery, Post-Surgical
              Rehabilitation of Lung Surgery.
            </li>
            <li className="tiles__item">
              Our physiotherapist outlines individualised rehabilitative
              physiotherapy, developed to maximise your wellness and
              independence through activity, exercise, and self-management.
            </li>
            <li className="tiles__item">
              Your treatment may involve advice on symptomatic management,
              balance and mobility, and exercises that aim to improve your knee,
              hip, foot, , shoulder, elbow and hand functions to enhance your
              walking ability and confidence.
            </li>
            <li className="tiles__item">
              Your treatment will also depend on your preferences and your
              individual goals and needs.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OperativeRehab;
