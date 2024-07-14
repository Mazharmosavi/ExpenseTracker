const TransActionComponent = (props) => {
  return (
    <div className={props.type==="expense"?"transaction Cost":"transaction"}>
      <p>Discription : {props.desc}</p>
      <p>{props.type==="expense"?"Cost : ":"Income : "}{props.amount}$</p>
    </div>
  );
};

export default TransActionComponent;
