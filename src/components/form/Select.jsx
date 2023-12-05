// PropTypes
import PropTypes from "prop-types";

function Select({ options, formProps }) {
  return (
    <select type="text" {...formProps}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  formProps: PropTypes.object.isRequired,
};

export default Select;
