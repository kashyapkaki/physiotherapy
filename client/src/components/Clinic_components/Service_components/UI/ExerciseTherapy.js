import ExerciseTherapyImage from "../../../../images/ExerciseTherapyImage1.png";
import React from "react";
import { Link } from "react-router-dom";

function ExerciseTherapy() {
  return (
    <div
      id={"exercise-therapy"}
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
          className="exercisetherapy__img"
          src={ExerciseTherapyImage}
          alt="Clinic page icon"
        />
      </div>
      <div className="conditions__content">
        <div className="conditions__tile-header">
          Exercise Therapy and Prescription
        </div>
        <div className="conditions__tile-content">
          <p>
            Exercise therapy is a vital element of injury rehabilitation to help
            prevent the re-occurrence of an injury.
          </p>
          <p>
            Exercises can focus on an individual area, for example to strengthen
            an ankle after a sprain to prevent further injury, or your exercises
            may focus on a whole muscle group, such as glute and core
            strengthening to minimise and prevent lower back and hip pain.
          </p>
          <p>
            Your exercise program will be progressed over time as your strength
            improves.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExerciseTherapy;
