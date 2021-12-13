import PostRehabImage from "../../../../images/PostOperativeClinicImage.png";
import React from "react";
import { Link } from "react-router-dom";

function PostOperative() {
  return (
    <div
      id={"post-operative"}
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
          className="postrehab__img"
          src={PostRehabImage}
          alt="Clinic page icon"
        />
      </div>
      <div className="conditions__content">
        <div className="conditions__tile-header">
          Post-Operative Rehabilitation
        </div>
        <div className="conditions__tile-content">
          <p>
            Following an orthopaedic surgery, it is likely that you will require
            physiotherapy to avoid certain complications, such as DVT, but also
            to re-introduce strength and a range of motion movements. You will
            be prescribed a progressive exercise program in order to build up
            flexibility, strength, and function. Our physiotherapists will
            tailor a programme specific to your surgery in order to aid you
            through the rehabilitation process to get you back to your everyday
            activities as soon as possible.
          </p>
          <p>
            If you have injured yourself (either acute injuries or chronic) or
            you have had an orthopaedic surgery - YOU MUST DO REHAB TO
            STRENGTHEN THE AREA! This is so you return to full normal function,
            with no symptoms, and as low a risk as possible for re-injury. Rest
            and passive treatments are not enough. If you do not rehabilitate
            the injured tissue or surgically repaired tissue with exercise, you
            will be left with weak, non-remodelled scar tissue which is
            vulnerable and will fail in the future causing re-injury.
          </p>
          <p>
            You will also address deficiencies and imbalances that may have
            contributed to the injury/impairment with targeted corrective and
            rehab exercises. You will be guided back to exercise and your sport
            or physical activity (or just back to normal life function) with
            careful progressions, based on tissue and surgery healing timeframes
            and achievement of certain progression criteria e.g.,
            strength/capacity/ROM testing results.
          </p>
          <p>
            You will eventually be fully cleared to return to your sport or
            physical activity and have a maintenance program for ongoing injury
            prevention.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostOperative;
