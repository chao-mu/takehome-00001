import Select from "./Select.jsx";
import DateInput from "./DateInput.jsx";
import TextArea from "./TextArea.jsx";

import styles from "./DynamicForm.module.css";

function DynamicForm() {
  return (
    <section className={styles.parent}>
      <hgroup>
        <h1>Title</h1>
        <p>subheading here</p>
      </hgroup>
      <form>
        <Select />
        <DateInput />
        <TextArea />
      </form>
    </section>
  );
}

export default DynamicForm;
