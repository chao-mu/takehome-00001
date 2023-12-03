function Select() {
  return (
    <>
      <label htmlFor="relatedTo">What does...?</label>
      <select type="text" id="relatedTo" name="relatedTo">
        <option value="Incorrect Pay">Incorrect Pay</option>
        <option value="Missing Expense">Missing Expense</option>
      </select>
    </>
  );
}

export default Select;
