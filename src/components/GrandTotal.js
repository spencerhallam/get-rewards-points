import React from 'react';
import ListMonths from './ListMonths.js'
import { calcPoints, listCustomerIds, removeDupes, getCustSums, chooseMonths } from '../helpers/Helpers.js'

function GrandTotal(props) {
  const pointsForEach = calcPoints(props.history);
  const filteredMos = chooseMonths(pointsForEach, props.monthsFilter)
  const getIdsAll = listCustomerIds(props.history);
  const uniqueIds = removeDupes(getIdsAll);
  const threeMoSums = getCustSums(uniqueIds, filteredMos);
  const listCustPtSums = threeMoSums.map( (sum, idx) => {
      return(
        <li className="transaction" key={idx}>
                <ul>
                    <li className="customer-field">Customer: <strong>{sum.name ? sum.name : "see id"}</strong> (ID# {sum.id})</li>
                    <li>Rewards: {sum.total}pts</li>
                    <li>Transactions Qty: {sum.qty}</li>
                </ul>
        </li>   
      )
  });
  
  return (
    <div className="grand-total">
      <h2>Total Customer Point Accruals:</h2>
      <ListMonths monthsFilter={props.monthsFilter}/>
      <ul>
          { listCustPtSums }
      </ul>
    </div>
  );
}

export default GrandTotal;