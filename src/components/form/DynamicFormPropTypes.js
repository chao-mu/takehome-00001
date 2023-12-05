// PropTypes
import PropTypes from "prop-types";

function fieldShape({ type, props }) {
  const fields = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf([type]),
  };

  if (props) {
    fields.props = props;
  }

  return PropTypes.shape(fields);
}

function predicateShape({ check, args }) {
  const fields = {
    check: PropTypes.oneOf([check]),
    fieldId: PropTypes.string.isRequired,
  };

  if (args) {
    fields.args = args;
  }

  return PropTypes.shape(fields);
}

const fieldShapes = [
  // Date Input
  fieldShape({
    type: "date",
  }),
  // Text Area
  fieldShape({
    type: "textarea",
  }),
  // Dropdown List
  fieldShape({
    type: "select",
    props: PropTypes.shape({
      options: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  }),
];

const predicateShapes = [
  // Specified value exists
  predicateShape({
    check: "exists",
  }),
  // Specified value is within list
  predicateShape({
    check: "oneOf",
    args: PropTypes.shape({
      within: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  }),
];

const ruleShape = {
  assert: PropTypes.oneOfType(predicateShapes).isRequired,
  if: PropTypes.oneOfType(predicateShapes),
};

export default {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType(fieldShapes)).isRequired,
  rules: PropTypes.arrayOf(PropTypes.shape(ruleShape)).isRequired,
};
