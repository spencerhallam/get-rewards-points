import React from 'react';
import { getMonthString } from '../helpers/Helpers.js'

function ListMonths(props) {
    const months = props.monthsFilter
    const listMonths = months.map((month, idx) => {
        return <span key={idx} className="show-months">{getMonthString(month)}</span>
      })
  return (
    <div className="range">
      Month Range: { listMonths }
    </div>
  );
}

export default ListMonths;