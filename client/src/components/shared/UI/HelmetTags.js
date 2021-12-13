import React from "react";
import Helmet from "react-helmet";

const HelmetTags = (props) => {
  return (
    <Helmet>
      <title>{props.title} </title>
      <meta name="description" content={props.desc} />
      <meta name="keywords" content={props.keywords} />
    </Helmet>
  );
};

export default HelmetTags;
