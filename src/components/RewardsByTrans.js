import React from 'react';
import { calcPoints } from '../helpers/Helpers.js'

function RewardsByTrans(props) {
    const rewards = calcPoints(props.history)
    const listRewards = rewards.map((reward, idx) => {
        return(
            <li className="transaction" key={idx}>
                <ul>
                    <li>Date: {reward.date}</li>
                    <li className="customer-field">Customer: <strong>{reward.name}</strong> (ID# {reward.customerId})</li>
                    <li>Amount: ${reward.amt}</li>
                    <li>Rewards: <span className="highlight-01">{reward.points}pts</span></li>
                </ul>
            </li>
        )
     });

  return (
    <div className="grand-total">
      <h3>Calculated Reward Points: </h3>
      <div className="range">
        All 2019 Transaction Data
      </div>
      <ol>
        { listRewards }
      </ol>
    </div>
  );
}

export default RewardsByTrans;
