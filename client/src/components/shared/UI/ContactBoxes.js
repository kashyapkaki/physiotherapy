import React from "react";

function ContactBoxes() {
  return (
    <div className="info">
      <div>
        <h3>Locations</h3>
        <p>
          12 Castlefarm, Swords, Co. Dublin, K67 ET38
          <br />
          256 , Swords Road, Santry Dublin 9 D09RX73
          <br />
          <strong>Home Visit :</strong> North Dublin to Swords and Surrounding
          Areas
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
          <a className="socialLink" target="_blank" href="https://facebook.com">
            <i className="fa fa-facebook"></i>
          </a>
          <a className="socialLink" target="_blank" href="https://linkedin.com">
            <i className="fa fa-linkedin"></i>
          </a>
          <a className="socialLink" target="_blank" href="https://twitter.com">
            <i className="fa fa-twitter"></i>
          </a>
          <a
            className="socialLink"
            target="_blank"
            href="https://instagram.com"
          >
            <i className="fa fa-instagram"></i>
          </a>
        </p>
      </div>
      <div>
        <h3>Timings</h3>
        <p>
          <strong>Monday - Friday </strong>
          7:00-9:00AM &amp; 6:00-9:00PM <br />
          <strong>Saturday - Sunday </strong>
          9:00AM - 5:00PM
        </p>
      </div>
    </div>

    // <div className="contact__us-container">
    //     <div className="contact__us-column">
    //         <div className="contact__us-row">
    //             <div className="contact__us-row-container">
    //                 <div className="contact__us-row-front">
    //                     <i className=" contact__us-row-img fa fa-map-marker"></i>
    //                     <h4 className="contact__us-row-text">
    //                         Clinic Locations
    //                     </h4>
    //                 </div>
    //                 <div className="contact__us-row-back">
    //                  <h3>12 Castlefarm, Swords, <br />Co. Dublin, <br />K67 ET38</h3>
    //                     <br />
    //                     <h3>256 , Swords Road, Santry <br /> Dublin 9 <br /> D09RX73</h3>
    //                 </div>
    //             </div>
    //         </div>
    //         </div>

    //     <div className="contact__us-column">
    //         <div className="contact__us-row">
    //             <div className="contact__us-row-front">
    //                 <i className=" contact__us-row-img fa fa-clock-o"></i>
    //                 <h4 className="contact__us-row-text">
    //                     Timings
    //                 </h4>
    //             </div>
    //             <div className="contact__us-row-back">
    //                 <h3>Monday - Friday</h3>
    //                 <p>&nbsp;&nbsp;7:00-9:00AM</p>
    //                 <p>&nbsp;&nbsp;6:00-9:00PM</p>
    //                 <h3>Saturday - Sunday</h3>
    //                 <p>9:00AM - 5:00PM</p>
    //             </div>
    //         </div>
    //     </div>
    //     <div className="contact__us-column">
    //     <div className="contact__us-row">
    //             <div className="contact__us-row-front h-160">
    //                 <i className=" contact__us-row-img fa fa-home"></i>
    //                 <h3 className="contact__us-row-text">
    //                     Home Visit
    //                 </h3>
    //             </div>
    //             <div className="contact__us-row-back h-150">
    //                 {/* <span>Weekdays: 7-9AM, 6-9PM</span> */}
    //                 {/* <span>Weekends: 9AM - 5PM</span> */}
    //                 <h2>North Dublin to Swords <br />and <br />Surrounding Areas</h2>
    //             </div>
    //         </div>

    //     </div>
    //     <div className="contact__us-column">
    //     <div className="contact__us-row">
    //             <div className="contact__us-row-front">
    //                 <div className="contact__us-row-front">
    //                     <div className="contact__us-row-front-img-container">
    //                         <i className=" contact__us-row-img fa fa-phone"></i>
    //                         <i className=" contact__us-row-img fa fa-envelope"></i>
    //                     </div>
    //                     <h4 className="contact__us-row-text">
    //                         Contact
    //                     </h4>
    //                 </div>
    //                 <div className="contact__us-row-back">
    //                     <h3>&nbsp;</h3>
    //                     <h3>&nbsp;</h3>
    //                     <h3>&nbsp;</h3>
    //                     <h3 className="contact__us-row-back-text">+353 830985073&nbsp;</h3>
    //                     <h4>contact@365physiotherapy.ie</h4>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  );
}

export default ContactBoxes;
