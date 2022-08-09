import ExpenseItems from "./ExpenseItem";
import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
function Expenses(props) {
  const [onSelectOption, setOnSelectOption] = useState("2030");

  const onSelectHandler = (selectedData) => {
    setOnSelectOption(selectedData);
  };


  return (
    <div className="expenses">
        
      <ExpensesFilter saveSelectedDate={onSelectHandler} selectedYear = {onSelectOption}/>

      {props.data.map((expenseData) => (
        <ExpenseItems
          key={expenseData.id}
          title={expenseData.title}
          price={expenseData.amount}
          date={expenseData.date}
        />
      ))}
    </div>
  );
}

export default Expenses;
