// PropTypes
import PropTypes from "prop-types";

function DateInput({ id, formProps }) {
  return <input id={id} type="date" {...formProps} />;
}

DateInput.propTypes = {
  id: PropTypes.string.isRequired,
  formProps: PropTypes.object.isRequired,
};

export default DateInput;
