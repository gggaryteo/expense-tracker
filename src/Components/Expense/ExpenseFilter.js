import React from 'react'
import './ExpenseFilter.css'

function ExpenseFilter(props) {

  const filterOnChange = (event) => {
    const selectedYear = event.target.value
    props.onSelectYear(selectedYear)
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
          <label>Filter by year: </label>
          <select value={props.selected} onChange={filterOnChange}>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
          </select>
      </div>
    </div>
  );
}

export default ExpenseFilter