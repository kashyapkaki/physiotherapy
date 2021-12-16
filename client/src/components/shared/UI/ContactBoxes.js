import React from "react";

function ContactBoxes() {
  return (
    <div className="info">
      <div className="locationInfo">
        <h3>
          <a
            target="_blank"
            href="http://maps.google.com/maps?q=365+Physiotherapy+%7C+Physiotherapy+Dublin%7C+Physio+in+Santry+%7C+Private+Physio+in+Dublin+9,+256+Swords+Rd,+Whitehall,+Dublin"
          >
            Direction <i className="fa fa-map-marker"></i>
          </a>
        </h3>
        <p>
          <a
            target="_blank"
            href="http://maps.google.com/maps?q=365+Physiotherapy+%7C+Physiotherapy+Dublin%7C+Physio+in+Santry+%7C+Private+Physio+in+Dublin+9,+256+Swords+Rd,+Whitehall,+Dublin"
          >
            256, Swords Road,
            <br />
            Santry, Dublin 9 <br />
            D09RX73
          </a>
        </p>
      </div>
      <div className="contactInfo">
        <h3>Contact</h3>
        <p>
          <strong>Tel :</strong>
          <a href="tel:+353830985073">+353 830985073</a>
          <br />
          <strong>Email :</strong>
          <a href="mailto:contact@365physiotherapy.ie">
            contact@365physiotherapy.ie
          </a>
          <br />
          <strong>Social Network :</strong>
          <a
            className="socialLink"
            target="_blank"
            href="https://www.facebook.com/365-Physiotherapy-in-SantryDublin-9-109199244891323"
          >
            <i className="fa fa-facebook"></i>
          </a>
          <a
            className="socialLink"
            target="_blank"
            href="https://www.linkedin.com/in/physiotherapy-dublin-595401228/"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            className="socialLink"
            target="_blank"
            href="https://twitter.com/365physiosantry"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            className="socialLink"
            target="_blank"
            href="https://www.instagram.com/365physiotherapy.ie/"
          >
            <i className="fa fa-instagram"></i>
          </a>
          <a
            className="socialLink"
            target="_blank"
            href="https://www.pinterest.com/0z6ceylt3ztt4kuwixiqnmd93mak3k/_created/"
          >
            <i className="fa fa-pinterest"></i>
          </a>
        </p>
      </div>
      <div>
        <h3>Timings</h3>
        <div className="timings">
          <p className="first">
            <strong>Monday - Friday </strong>
            <br />
            <br />
            <strong>Saturday - Sunday </strong>
          </p>
          <p>
            7:00AM - 9:00AM <br />
            6:00PM - 9:00PM <br />
            9:00AM - 5:00PM
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactBoxes;
