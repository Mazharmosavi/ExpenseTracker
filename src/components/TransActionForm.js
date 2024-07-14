import React, { useState } from "react";
import "../components/buttom.css";
const TransActionForm = ({
  addTransAction,
  setTrsnsActionShow,
  submitFinal,
}) => {
  const [formValue, setFormValue] = useState({
    type: "expense",
    amount: 0,
    desc: "",
  });
  const changeHandler = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    addTransAction(formValue);
  };
  return (
    <form onSubmit={formSubmit}>
      <input
        className="input"
        placeholder="Discription"
        type={"text"}
        name="desc"
        value={formValue.desc}
        onChange={changeHandler}
      />
      <input
        className="input"
        placeholder="Amount"
        type={"number"}
        name="amount"
        value={formValue.amount}
        onChange={changeHandler}
      />
      <div>
        <input
          type={"radio"}
          value="expense"
          name="type"
          checked={formValue.type === "expense"}
          onChange={changeHandler}
        />
        <label>expense</label>
        <input
          type={"radio"}
          value="income"
          name="type"
          checked={formValue.type === "income"}
          onChange={changeHandler}
        />
        <label>income</label>
      </div>
      <button className="sub" type="submit">Add</button>
    </form>
  );
};

export default TransActionForm;
