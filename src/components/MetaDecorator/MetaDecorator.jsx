import React from "react";
import { PropTypes } from "prop-types";
import Helmet from "react-helmet";
const MetaDecorator = (props) => {
  const { decorator } = props;
  return (
    <div>
      <Helmet>
        <title>{decorator.title}</title>
      </Helmet>
    </div>
  );
};

export default MetaDecorator;

// MetaDecorator.PropTypes
