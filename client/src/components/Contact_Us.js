import ContactBoxes from "../components/shared/UI/ContactBoxes";
import InsuranceBox from "../components/shared/UI/InsuranceBox";
import SPONSORAVIVA from "../images/SPONSOR_AVIVA.png";
import SPONSORCORU from "../images/SPONSOR_CORU.jpg";
import SPONSORIRISHLIFE from "../images/SPONSOR_IRISHLIFE.png";
import SPONSORISCP from "../images/SPONSOR_ISCP.png";
import SPONSORLAYA from "../images/SPONSOR_LAYA.png";
import SPONSORVHI from "../images/SPONSOR_VHI.png";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

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
];

const box2 = [
  {
    img: SPONSORISCP,
    link: "https://askthephysio.ie/",
  },
  {
    img: SPONSORCORU,
    link: "https://coru.ie/about-us/",
  },
];

const Contact_Us = () => {
  const { register, handleSubmit } = useForm();
  const [captcha, setCaptchaValue] = useState("");

  const submitEmail = (data) => {
    console.log("data:" + data);
    console.log("string:" + JSON.stringify(data));
    console.log(data["email"]);
    if (captcha != "") {
      fetch("https://physiotherapy365.herokuapp.com/api/send", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log("expected results" + response);
          return response.json();
        })
        .then((response) => {
          console.log(response);
          if (response.status === "success") {
            console.log(response.data);
            alert("Message Sent.");
          }
        })
        .catch(function (err) {
          console.log("error2" + err);
          alert("Message Not Sent.");
        });
    } else {
      alert("Submit captcha.");
    }
  };

  let recaptchaInstance;

  const executeCaptcha = (e) => {
    e.preventDefault();
    console.log("executecaptcha");
    console.log(e.target);
    recaptchaInstance.execute();
  };
  const onChange = (value) => {
    setCaptchaValue(value);
  };
  return (
    <div className="contact-us-page__wrapper">
      <div className="contact-us-page__container">
        <div className="contact-us-page__body">
          <form
            className="contact-us-page__form"
            onSubmit={handleSubmit(submitEmail)}
          >
            <input
              id="first-name"
              type="text"
              required
              placeholder="First name"
              {...register("first-name")}
              name="first-name"
            />
            <input
              type="text"
              required
              placeholder="Last name"
              {...register("last-name")}
              name="last-name"
            />
            <input
              id="eml"
              type="email"
              required
              placeholder="email@email.com"
              {...register("email")}
              name="email"
            />
            <input
              id="tel"
              type="tel"
              {...register("number", { required: true, maxLength: 11 })}
              placeholder="Phone Number"
              name="number"
            />
            <select
              name="dropdown"
              {...register("dropdown")}
              id="service-select"
            >
              <option>Clinic</option>
              <option>Home Visit</option>
            </select>
            <textarea
              rows="6"
              required
              placeholder="Please state your requirements"
              {...register("message")}
              name="message"
            ></textarea>
            <ReCAPTCHA
              sitekey="6Ld3WLwcAAAAAArKfXJh4kg44u5ksWJ5gi9SGflZ"
              onChange={onChange}
            />
            ,
            <div className="contact-us-page__form-buttons display-flex">
              <button type="reset">Reset</button>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="tiles home-page__footer-tile">
        <div className="tiles__header">
          <ul className="tiles__list tiles--no-list no-border no-background no-box-shadow">
            <li className="tiles__item">
              Reduce your pain, increase your mobility, and promote recovery in
              the most comfortable and relaxing environment a healthcare
              practice can offer.
            </li>
            <li className="tiles__item">
              Find your&nbsp;
              <strong>
                <Link className="home-page__link" to={`/clinic`}>
                  Local Clinic&nbsp;
                </Link>
              </strong>
              or
              <strong>
                <Link to={`/homevisit`}>&nbsp;Home visit service</Link>
              </strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="home-page__footer-box justify-center">
        <InsuranceBox imgs={box1} right={true}></InsuranceBox>
      </div>
      <div className="home-page__footer-box">
        <InsuranceBox imgs={box2} left={true}></InsuranceBox>
      </div>{" "}
      <div className="home-page__footer-box-container margin-center">
        <div className="margin-center w-100p">
          <ContactBoxes></ContactBoxes>
        </div>
      </div>
    </div>
  );
};

export default Contact_Us;
