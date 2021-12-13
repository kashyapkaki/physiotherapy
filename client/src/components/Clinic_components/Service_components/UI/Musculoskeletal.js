import MusculoskeletalImage from "../../../../images/MusculoskeletalImage.png";
import React from "react";
import { Link } from "react-router-dom";

function Musculoskeletal() {
  return (
    <div
      id={"musculoskeletal"}
      className="background-page conditions__container"
    >
      <div className="conditions__back-button">
        <button className="btn-back">
          <Link to={`/clinic`}>
            <button className="btn-back">&#8249;</button>
          </Link>
        </button>
      </div>
      <div className="col conditions__logo">
        <img
          className="musculoskeletal__img"
          src={MusculoskeletalImage}
          alt="Muculoskeletal icon"
        />
      </div>
      <div className="col conditions__content">
        <div className="conditions__tile-header">
          Musculoskeletal Physiotherapy Service
        </div>
        <div className="conditions__tile-content">
          <p>
            Musculoskeletal physiotherapy is the management of acute and overuse
            injuries and impairments of the musculoskeletal system, with the
            primary goal of getting the patient back to being pain-free with
            full function as soon as possible, as well as maintaining the
            ability to self-manage their health going forward.
          </p>
          <p>
            At our clinic, our chartered physiotherapist is specialised in the
            treatment of muscle and joint injuries. Typical musculoskeletal
            injuries may include carpel tunnel syndrome, tendinitis and bursitis
            and can be caused by prolonged sitting, overloading of particular
            muscle groups, repetitive movements, and more.
          </p>
          <p>
            Treatment can help improve your flexibility, muscle strength,
            quality of movement and co-ordination in order to help prevent
            further injuries from occurring. Based on the severity of your
            injury, our physiotherapist can prescribe you with an exercise
            program to complete at home to enhance your recovery.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Musculoskeletal;
