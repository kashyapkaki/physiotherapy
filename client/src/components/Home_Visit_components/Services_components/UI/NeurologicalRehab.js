import NeurologicalConditionsImage from "../../../../images/NeuroLogicalServiceHomeVisitImage.png";
import React from "react";
import { Link } from "react-router-dom";

function NeurologicalRehab(props) {
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
          src={NeurologicalConditionsImage}
          alt="Muculoskeletal icon"
        />
      </div>
      <div className="conditions__content">
        <div className="conditions__tile-header">
          Neurological Physiotherapy and Rehabilitation
        </div>
        <div className="conditions__tile-content">
          <ul className="conditions__tile-list no-list">
            <li className="tiles__item">
              Our 365 Physiotherapy Home Visit Service is designed for recent or
              ongoing neurological problems - keeping you healthy, safe, and
              happy for as long as possible in the comfort of your home.
            </li>
            <li className="tiles__item">
              Home visits allow us to see how you manage your daily tasks at
              home and how to make these more efficient.
            </li>
            <li className="tiles__item">
              Our chartered physiotherapist works with older adults and people
              with neurological conditions including stroke, acquired brain
              injury, multiple sclerosis, Huntington's disease, Parkinson's
              disease, falls and dizziness.
            </li>
            <li className="tiles__item">
              Our physiotherapist outlines individualised rehabilitative
              physiotherapy, developed to maximise your wellness and
              independence through activity, exercise, and self-management.
            </li>
            <li className="tiles__item">
              Your treatment may involve advice on symptomatic management,
              balance and mobility, and exercises that aim to improve your
              shoulder, elbow, hand, hip, and foot functions to enhance your
              walking ability and confidence.
            </li>
            <li className="tiles__item">
              Neuropathy including nerve injuries – drop foot and wrist drop.
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

export default NeurologicalRehab;
