// React
import { lazy } from "react";

// Community
import PropTypes from "prop-types";

// Ours - Stylesheets
import styles from "./DynamicForm.module.css";

const componentLookup = {
  select: lazy(() => import("./Select.jsx")),
  date: lazy(() => import("./DateInput.jsx")),
  textarea: lazy(() => import("./TextArea.jsx")),
};

// Only props of these names will be passed from meta to field component
const allowedFieldProps = ["id", "options", "label"];

function DynamicForm({ title, description, fields }) {
  return (
    <section className={styles.parent}>
      <hgroup>
        <h1>{title}</h1>
        <p role="doc-subtitle">{description}</p>
      </hgroup>
      <form>
        {fields.map((field) => {
          const FieldComp = componentLookup[field.type];

          const props = Object.fromEntries(
            allowedFieldProps.map((prop) => [prop, field[prop]]),
          );

          return <FieldComp key={field.id} {...props} />;
        })}
      </form>
    </section>
  );
}

const fieldShape = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["select", "date", "textarea"]).isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string), // For select type
};

const conditionShape = {
  type: PropTypes.oneOf(["valueIn", "valueNotEmpty"]).isRequired,
  fieldId: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const ruleShape = {
  if: PropTypes.shape(conditionShape).isRequired,
  then: PropTypes.shape(conditionShape).isRequired,
};

DynamicForm.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(PropTypes.shape(fieldShape)).isRequired,
  rules: PropTypes.arrayOf(PropTypes.shape(ruleShape)).isRequired,
};

export default DynamicForm;
