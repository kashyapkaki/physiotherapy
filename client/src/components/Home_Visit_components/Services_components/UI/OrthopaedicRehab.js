import OrthoPaedicPhysioRehabImage from "../../../../images/OrthoPaedicPhysioRehabImage.png";
import React from "react";
import { Link } from "react-router-dom";

function OrthopaedicRehab() {
  return (
    <div id={"orthopaedicRehab"} className="conditions__container">
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
          src={OrthoPaedicPhysioRehabImage}
          alt="Muculoskeletal icon"
        />
      </div>
      <div className="conditions__content">
        <div className="conditions__tile-header">
          Orthopaedic Physiotherapy and Rehabilitation
        </div>
        <div className="conditions__tile-content">
          <ul className="tiles__list no-border no-background no-box-shadow no-list">
            <li className="tiles__item">
              Our 365 Physiotherapy Home Visit Service is designed for recent or
              ongoing orthopaedic problems - keeping you healthy, safe, and
              happy for as long as possible in the comfort of your home. Home
              visits allow us to see how you manage your daily tasks at home and
              how to make these more efficient.
            </li>
            <li className="tiles__item">
              Our chartered physiotherapist works with people with different
              orthopaedic problems including Tennis players and golfers, who are
              prone to repetitive motion injuries, Football players, current and
              former, who suffer from shoulder and knee injuries, construction
              workers, house cleaners, warehouse workers, and landscapers, who
              may be prone to back, shoulder, knee, and neck pain due to the
              physical demands of their jobs, Office workers, writers, artists,
              and assemblers, who use the small muscles of their hands
              extensively and may experience hand, wrist, arm, or neck pain,
              College and high school students, who often have to carry heavy
              backpacks that put a strain on their young backs, shoulders, and
              spines, Individuals who have had, or are soon facing, replacement
              or reconstruction surgery such as hip replacement, knee
              replacement, ankle reconstruction, ligament repairs, and so on and
              also anyone else who engages in either rigorous physical activity
              or repetitive motion tasks, or who is dealing with old injuries
              that have not healed properly
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

export default OrthopaedicRehab;
