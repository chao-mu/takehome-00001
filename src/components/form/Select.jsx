// PropTypes
import PropTypes from "prop-types";

function Select({ options, ...props }) {
  return (
    <select type="text" {...props}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;
