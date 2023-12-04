// PropTypes
import PropTypes from "prop-types";

function Label({ htmlFor, children }) {
  return <label htmlFor={htmlFor}>{children}</label>;
}

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Label;
