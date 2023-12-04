// PropTypes
import PropTypes from "prop-types";

function TextArea(props) {
  return <textarea {...props} />;
}

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
};

export default TextArea;
