// PropTypes
import PropTypes from "prop-types";

function DateInput(props) {
  return <input type="date" {...props} />;
}

DateInput.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DateInput;
