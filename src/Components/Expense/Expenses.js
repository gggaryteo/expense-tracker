import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  // Can use two way binding and pass selected year as props to ExpensesFilter
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredDataHandler = (selectYear) => {
    setFilteredYear(selectYear);
  };
  console.log(filteredYear);

  const filteredExpenses = props.data.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
  }) 


  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onSelectYear={filteredDataHandler}
      />
    <ExpenseChart expenses={filteredExpenses}/>
    <ExpenseList items={filteredExpenses}/>

    </Card>
  );
}

export default Expenses;
