import DynamicForm from "./components/form/DynamicForm.jsx";

import payrollEnquiryForm from "./data/forms/payroll-enquiry.json";

function App() {
  return (
    <main>
      <DynamicForm {...payrollEnquiryForm} />
    </main>
  );
}

export default App;
