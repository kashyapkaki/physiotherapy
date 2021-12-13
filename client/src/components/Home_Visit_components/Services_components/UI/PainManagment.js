import PainManagementConditionsImage from "../../../../images/PainManagementConditionsImage.png";
import React from "react";
import { Link } from "react-router-dom";

function PainManagment() {
  return (
    <div id={"painmanagement"} className="conditions__container">
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
          src={PainManagementConditionsImage}
          alt="Muculoskeletal icon"
        />
      </div>
      <div className="conditions__content">
        <div className="conditions__tile-header">
          Pain Management Physiotherapy
        </div>
        <div className="conditions__tile-content">
          <ul className="tiles__list no-border no-background no-box-shadow no-list">
            <li className="tiles__item">
              Our 365 Physiotherapy Home Visit Service is designed for recent or
              ongoing pain management problems - keeping you healthy, safe, and
              happy for as long as possible in the comfort of your home.
            </li>
            <li className="tiles__item">
              Home visits allow us to see how you manage your daily tasks at
              home and how to make these more efficient.
            </li>
            <li className="tiles__item">
              Our chartered physiotherapist works with people with different
              pain management physiotherapy conditions including Back Pain, Neck
              Pain, Headaches, Shoulder Pain, Shoulder Blades Pain, Nerve Pain,
              Pelvic Pain, Pelvic Girdle Pain, Hip Pain, Knee Pain, Muscle Pain,
              Joint Pain by addressing the underlying factors contributing to
              your aches and pains with different treatment approaches including
              Therapeutic Friction Massage, Manual Therapy, Exercise
              prescription and Movement therapy, Posture correction and
              improvement, Trigger point dry needling , Breathing, relaxation
              and mindfulness, Education or Advice on self-management ,Cold
              pack/heat and electrotherapy such as TNS (transcutaneous
              electrical nerve stimulation).
            </li>
            <li className="tiles__item">
              Our physiotherapist outlines individualised rehabilitative
              physiotherapy, developed to maximise your wellness and
              independence through activity, exercise, and self-management.
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

export default PainManagment;
