import React from 'react';
import ListMonths from './ListMonths.js'
import { calcPoints, listCustomerIds, removeDupes, getCustMoSums, chooseMonths, getMoAbrString } from '../helpers/Helpers.js'

function MonthlyTotals(props) {
  const pointsForEach = calcPoints(props.history);  
  const filteredMos = chooseMonths(pointsForEach, props.monthsFilter)
  const getIdsAll = listCustomerIds(props.history);
  const uniqueIds = removeDupes(getIdsAll);
  const threeMoSums = getCustMoSums(filteredMos, uniqueIds, props.monthsFilter);
  const listCustPtSums = threeMoSums.map( (sum, idx) => {
      return(
        <li className="monthly-totals" key={idx}>
                <ul >
                    <li className="customer-field">Customer: <strong>{sum.name}</strong> (ID# {sum.id})</li>
                    <li>Month: {getMoAbrString(sum.month)} 2019</li>
                    <li>Rewards: {sum.total}pts</li>
                    <li>Qty of Purchases: {sum.qty}</li>
                </ul>
        </li>   
      )
  });

  return (
    <div className="grand-total">
      <h2>Reward Accruals by Customer for Each Month in Range:</h2>
      <ListMonths monthsFilter={props.monthsFilter}/>
      <ul>
          {listCustPtSums}
      </ul>    
    </div>
  );
}

export default MonthlyTotals;