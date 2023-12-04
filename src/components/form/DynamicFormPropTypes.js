// Community
import PropTypes from "prop-types";

function fieldShape({ type, props }) {
  return {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf([type]),
    props: props,
  };
}

function predicateShape({ check, args }) {
  return {
    check: PropTypes.oneOf([check]),
    fieldId: PropTypes.string.isRequired,
    args: args,
  };
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
    check: "value-in",
    args: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
];

const ruleShape = {
  assert: PropTypes.arrayOf(PropTypes.oneOfType(predicateShapes)).isRequired,
  if: PropTypes.arrayOf(PropTypes.oneOfType(predicateShapes)).isRequired,
};

export default {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType(fieldShapes)).isRequired,
  rules: PropTypes.arrayOf(PropTypes.shape(ruleShape)).isRequired,
};
