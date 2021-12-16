/*{ <div>
<ul className="list">
        {(products && products.length > 0) ? (
          products.map(product => renderProduct(product))
        ) : (
          <p>No products found</p>
        )}
</ul>
</div> }*/

import ContactBoxes from "../components/shared/UI/ContactBoxes";
import InsuranceBox from "../components/shared/UI/InsuranceBox";
import SPONSORAVIVA from "../images/SPONSOR_AVIVA.png";
import SPONSORCORU from "../images/SPONSOR_CORU.jpg";
import SPONSORIRISHLIFE from "../images/SPONSOR_IRISHLIFE.png";
import SPONSORISCP from "../images/SPONSOR_ISCP.png";
import SPONSORLAYA from "../images/SPONSOR_LAYA.png";
import SPONSORVHI from "../images/SPONSOR_VHI.png";
import React from "react";
import TestimonialsBox from "./shared/UI/TestimonialsBox";

const Testimonials = () => {
  const data = [
    {
      content:
        "Following my shoulder pain and limited movements 365 physiotherapy treated my pain with an individual and comprehensive rehablitation plan. I received a professional and friendly service from Thirupal. He was excellent at demonstrating the exercises and techniques which made the treatment much easier. If I or anybody require further or any treatment in future, I would highly recommend 365physiotherapy, 100 percent guaranteed.",
      name: "Caroline",
    },
    // {"content": "Highly recommended. I am a patient for 8 yrs now.  \nExcellent service and really good value for money", "name": "Lars"},
    {
      content:
        "Had a long-term issue with my back and finally got it seen to by Thirupal (Paul).  He was very friendly and knowledgeable; my injury was sorted out professionally and at a very reasonable price.  Would highly recommend anyone to go see him",
      name: "Jack",
    },
    {
      content:
        "He  is very good. Excellent to sorting out any issues I ever had…  he recently fixed my knee problem , he is the best I ever had",
      name: "Martin",
    },
  ];
  const box1 = [
    {
      img: SPONSORAVIVA,
      link: "https://www.aviva.co.uk/health/health-products/physio-essentials/",
    },
    {
      img: SPONSORVHI,
      link: "https://www1.vhi.ie/home",
    },
    {
      img: SPONSORLAYA,
      link: "https://www.layahealthcare.ie/formembers/participatingtherapists/",
    },
    {
      img: SPONSORIRISHLIFE,
      link: "https://www.irishlifehealth.ie/benefits/back-up-benefit",
    },
    {
      img: SPONSORISCP,
      link: "https://askthephysio.ie/",
    },
    {
      img: SPONSORCORU,
      link: "https://coru.ie/about-us/",
    },
  ];

  return (
    <div className="testimonials-container padding-top--40 padding-bottom--60">
      <h1>Testimonials</h1>
      <p>Read what our clients say about us..!</p>
      <TestimonialsBox testimonials={data}></TestimonialsBox>
      <div className="home-page__footer-box">
        <InsuranceBox imgs={box1} right={true} flex=""></InsuranceBox>
      </div>
      <div className="home-page__footer-box-container">
        <div className="margin-center w-100p">
          <ContactBoxes></ContactBoxes>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
