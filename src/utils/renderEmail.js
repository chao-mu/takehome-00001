export default ({ fields, values }) =>
  fields.map((field) => `${field.label}:\n${values[field.id]}`).join("\n\n");
