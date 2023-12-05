// React
import { lazy } from "react";

// React Hook Form
import { useForm } from "react-hook-form";

// Ours - PropTypes
import DynamicFormPropTypes from "./DynamicFormPropTypes";

// Ours - Hooks
import useValidation from "@/hooks/useValidation";

// Ours - Utils
import renderEmail from "@/utils/renderEmail";

// Ours - Components
import Label from "./Label.jsx";

// Ours - Stylesheets
import styles from "./DynamicForm.module.css";

const componentLookup = {
  select: lazy(() => import("./Select.jsx")),
  date: lazy(() => import("./DateInput.jsx")),
  textarea: lazy(() => import("./TextArea.jsx")),
};

function DynamicForm({ title, description, fields, rules }) {
  const validation = useValidation(rules);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: validation,
  });

  const onSubmit = (data) => {
    console.log(renderEmail({ fields, values: data }));
  };

  return (
    <section className={styles.parent}>
      <hgroup>
        <h1>{title}</h1>
        <p role="doc-subtitle">{description}</p>
      </hgroup>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map(({ id, label, props, type }) => {
          const FieldComp = componentLookup[type];
          const error = errors[id];

          return (
            <div key={id} className={styles["field-container"]}>
              <Label htmlFor={id}>{label}</Label>
              <FieldComp
                id={id}
                {...props}
                formProps={{
                  ...register(id),
                  "aria-invalid": error ? "true" : "false",
                  className: styles.field,
                }}
              />
              {error && (
                <Label
                  role="alert"
                  className={styles["error-message"]}
                  htmlFor={id}
                >
                  {error}
                </Label>
              )}
            </div>
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

DynamicForm.propTypes = DynamicFormPropTypes;

export default DynamicForm;
