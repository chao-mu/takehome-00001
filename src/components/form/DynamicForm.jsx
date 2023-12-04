// React
import { lazy } from "react";

// React Hook Form
import { useForm } from "react-hook-form";

// Ours - PropTypes
import DynamicFormPropTypes from "./DynamicFormPropTypes.js";

// Ours - Components
import Label from "./Label.jsx";

// Ours - Stylesheets
import styles from "./DynamicForm.module.css";

const componentLookup = {
  select: lazy(() => import("./Select.jsx")),
  date: lazy(() => import("./DateInput.jsx")),
  textarea: lazy(() => import("./TextArea.jsx")),
};

function DynamicForm({ title, description, fields }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className={styles.parent}>
      <hgroup>
        <h1>{title}</h1>
        <p role="doc-subtitle">{description}</p>
      </hgroup>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map(({ id, label, props, ...field }) => {
          const FieldComp = componentLookup[field.type];

          return (
            <>
              <Label htmlFor={id}>{label}</Label>
              <FieldComp key={id} {...props} {...register(id)} />
            </>
          );
        })}
      </form>
    </section>
  );
}

DynamicForm.propTypes = DynamicFormPropTypes;

export default DynamicForm;
