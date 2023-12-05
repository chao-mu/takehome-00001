// PropTypes
import PropTypes from "prop-types";

function Label({ htmlFor, children, ...props }) {
  return (
    <label htmlFor={htmlFor} {...props}>
      {children}
    </label>
  );
}

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  // What is valid inside a <label> is restricted,
  // so we simplify by requiring it be a string
  children: PropTypes.string,
};

export default Label;
