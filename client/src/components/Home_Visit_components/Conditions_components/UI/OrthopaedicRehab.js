import OrthopaedicConditionImage from "../../../../images/OrthoPaedicCareConditionImage.png";
import React from "react";
import { Link } from "react-router-dom";

function ExerciseTherapy() {
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
          className="orthopaediccondition__img"
          src={OrthopaedicConditionImage}
          alt="Muculoskeletal icon"
        />
      </div>
      <div className="conditions__content">
        <div className="conditions__tile-header">
          Orthopaedic Care and Rehabilitation Conditions
        </div>
        <div className="conditions__tile-content">
          <ul className="tiles__list no-border no-background no-box-shadow">
            <li className="tiles__item">Frozen shoulder</li>
            <li className="tiles__item">Muscle Strain, Sprain, or tear</li>
            <li className="tiles__item">Ligament Strain, Sprain, or tear</li>
            <li className="tiles__item">Repetitive Strain Injuries</li>
            <li className="tiles__item">Inflammation of Tendons or Bursa</li>
            <li className="tiles__item">Joints Instability</li>
            <li className="tiles__item">Accident or Work injuries</li>
            <li className="tiles__item">Rheumatoid–Arthritis joints</li>
            <li className="tiles__item">Osteo-Arthritis joints</li>
            <li className="tiles__item">Osteopenia and Osteoporosis</li>
            <li className="tiles__item">Fracture Rehabilitation</li>
            <li className="tiles__item">Back/ Neck Rehabilitation</li>
            <li className="tiles__item">Spinal Stabilization Disorders</li>
            <li className="tiles__item">Ankylosing Spondylitis</li>
            <li className="tiles__item">Thoracic Outlet Syndrome</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExerciseTherapy;
