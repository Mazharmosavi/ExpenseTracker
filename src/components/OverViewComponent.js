import React, { useEffect, useState } from "react";
import TransActionForm from "./TransActionForm";

const OverViewComponent = ({
  income,
  expense,
  addTransAction,
  setTrsnsActionShow,
  setFormShow,
  formShow,
  animationHandler
}) => {

  return (
    <>
      <div >
        <div className="top-section">
          <p className="expense">Balance  <span>{income - expense}$</span></p>
          <button onClick={() =>setFormShow(!formShow)}>
            {formShow ? "cancel" : "Add"}
          </button>
        </div>
        <div className="resultsection">
          <div className="expense">Expense  <span style={{color:"red"}}>{expense}$</span></div>
          <div className="expense">Income  <span style={{color:"green"}}>{income}$</span></div>
        </div>
        {formShow? (
          <TransActionForm
            addTransAction={addTransAction}
            setTrsnsActionShow={setTrsnsActionShow}
          />
        ):""}
      </div>
    </>
  );
};

export default OverViewComponent;
