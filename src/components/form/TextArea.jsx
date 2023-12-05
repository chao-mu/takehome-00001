// PropTypes
import PropTypes from "prop-types";

function TextArea({ formProps }) {
  return <textarea {...formProps} />;
}

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  formProps: PropTypes.object.isRequired,
};

export default TextArea;
