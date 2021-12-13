import DryNeedlingImage from "../../../../images/DryNeedlingImage.png";
import React from "react";
import { Link } from "react-router-dom";

function DryNeedling() {
  return (
    <div id={"dry-needling"} className="background-page conditions__container">
      <div className="conditions__back-button">
        <button className="btn-back">
          <Link to={`/clinic`}>
            <button className="btn-back">&#8249;</button>
          </Link>
        </button>
      </div>
      <div className="conditions__logo">
        <img
          className="dryneedling__img"
          src={DryNeedlingImage}
          alt="Clinic page icon"
        />
      </div>
      <div className="conditions__content">
        <div className="conditions__tile-header">Dry Needling</div>
        <div className="conditions__tile-content">
          <p>
            Dry Needling can be used to treat pain, caused by injuries, by
            inserting dry needles into trigger points which encourages tight
            muscles to relax. It can be useful in the treatment of both chronic
            and acute injuries. Our chartered physiotherapists are trained in
            dry needling and we offer this in conjunction with our regular
            physiotherapy service.
          </p>
          <p>
            Dry needling penetrates a muscle into a trigger point (basically a
            knotted section in a muscle belly), with the goal of eliminating the
            trigger point to restore normal muscle length and tension.
          </p>
          <p>
            Occasionally trigger point therapy with the hands is not as
            effective as desired, so we use a needle to penetrate deeper right
            into the heart of the issue.
          </p>
          <p>
            Dry needling can also be used to unload and de-tension a generally
            tight muscle group, such as tight calves or hamstring, through
            deregulation of the neural system to cause muscle relaxation. Dry
            needling can also be used to stimulate a healing area, namely
            ligaments, which can promote blood flow and hence tissue healing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DryNeedling;
