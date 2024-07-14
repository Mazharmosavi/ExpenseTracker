import React, { useEffect, useState } from "react";
import OverViewComponent from "./OverViewComponent";
import "../components/top.css";
import TransActionComponent from "./TransActionComponent";
import SearchBar from "./SearchBar";
const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transAction, setTrsnsAction] = useState([]);
  const [searchTrans, setSearchTrans] = useState(transAction);
  const [transActionShow, setTrsnsActionShow] = useState(false);
  const [formShow, setFormShow] = useState(false);
  const [backCol,setBackCol]=useState(0)

  const addTransAction = (formValue) => {
    setTrsnsAction([...transAction, { ...formValue, id: Date.now }]);
    formValue.type === "expense"
      ? setExpense(formValue.amount)
      : setIncome(formValue.amount);
    setTrsnsAction([...transAction, { ...formValue, id: Date.now }]);
    setTrsnsActionShow(true);
  };

  const searchHandler = (searchKey) => {
    const searched = transAction.filter((t) =>
      t.desc.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase())
    );
    setSearchTrans(searched);
  };
  console.log(searchTrans);
  useEffect(() => {
    let xep = 0;
    let inc = 0;
    transAction.forEach((t) =>
      t.type === "expense"
        ? (xep = xep + parseFloat(t.amount))
        : (inc = inc + parseFloat(t.amount))
    );
    setExpense(xep);
    setIncome(inc);
  }, [transAction]);
  useEffect(() => {
    setSearchTrans(transAction);
  }, [transAction]);
  console.log(transAction);

  return (
    <div>
      <SearchBar searchHandler={searchHandler} />
      <section className="container">
        <OverViewComponent
          income={income}
          expense={expense}
          addTransAction={addTransAction}
          setTrsnsActionShow={setTrsnsActionShow}
          transActionShow={transActionShow}
          setFormShow={setFormShow}
          formShow={formShow}
        />
        {transActionShow &&
          searchTrans.map((trans) => {
            return (
              <TransActionComponent
                type={trans.type}
                amount={trans.amount}
                desc={trans.desc}
              />
            );
          })}
      </section>
    </div>
  );
};

export default ExpenseApp;
