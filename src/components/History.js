import React from 'react';

function History(props) {
    const transactions = props.history;
    const listHistory = transactions.map((transaction, idx) => {
        return(
            <li className="transaction" key={idx}>
                <ul >
                    <li>Date: {transaction.date}</li>
                    <li className="customer-field">Customer: <strong>{transaction.customer}</strong> (ID# {transaction.id})</li>
                    <li>Amount: ${transaction.amt}</li>
                </ul>
            </li>
        )
     }
    );

  return (
    <div className="trans-history">
      <h3>All Transactions:</h3>
      <div className="range">
        All 2019 Data
      </div>  
      <ol>

          { listHistory }
            
      </ol> 
      
    </div>
  );
}

export default History;