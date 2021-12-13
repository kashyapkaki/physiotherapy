import React from "react";

function InsuranceBox(props) {
  return (
    <div className={"insurance-container justify-center flex-" + props.flex}>
      {props.imgs.map((value, index) => {
        return (
          <a href={value.link} key={index} target="_blank" rel="noreferrer">
            <div key={index} className="insurance-column">
              <div className="insurance-row margin-right--15">
                <div className="insurance-row-container">
                  <div className="insurance-row-front">
                    <img
                      className="insurance-img"
                      src={value.img}
                      alt={value.link}
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default InsuranceBox;
