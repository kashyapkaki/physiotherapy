import SportsInjuriesImage from "../../../../images/SportsInjuriesImage.png";
import React from "react";
import { Link } from "react-router-dom";

function SportsInjuries() {
  return (
    <div
      id={"sports-injuries"}
      className="background-page conditions__container"
    >
      <div className="conditions__back-button">
        <button className="btn-back">
          <Link to={`/clinic`}>
            <button className="btn-back">&#8249;</button>
          </Link>
        </button>
      </div>
      <div className="d-300">
        <img
          className="sportsinjuries__img"
          src={SportsInjuriesImage}
          alt="Clinic page icon"
        />
      </div>
      <div className="conditions__content">
        <div className="conditions__tile-header">
          Sports Injuries and Rehabilitation
        </div>
        <div className="conditions__tile-content">
          <p>
            Sports physiotherapy specialises in the treatment, rehabilitation
            and further prevention of injuries and complaints sustained during
            sporting activities.
          </p>
          <p>
            Sports injuries differ from everyday injuries due to the greater
            stress put on muscles, joints, and bones through participation in
            sports.
          </p>
          <p>
            The most common injuries associated with sports include ligament
            sprains, strains, tears, joint injuries, and over-use injuries. Our
            physiotherapists will assess and treat the cause of your injury
            allowing you to build the strength, mobility, balance, and
            co-ordination required to return to your sport pain free and to help
            prevent further injury.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SportsInjuries;
