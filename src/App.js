import React from 'react';
import GrandTotal from './components/GrandTotal.js'
import MonthlyTotals from './components/MonthlyTotals.js'
import RewardsByTrans from './components/RewardsByTrans.js'
import History from './components/History.js'
import Assignment from './components/Assignment.js'
import './App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 3 months to search use number "0-11"
      monthsToFilter: [7,8,9], 
      // Data for customer transactions in 2019. "amt" = "amount spent" in each purchase
      transactions : [
        {
          id: 10001,
          customer: "Luna",
          date: "2019-4-21",
          amt: 330,  
        },
        {
           id: 10001,
           customer: "Luna",
           date: "2019-8-07",
           amt: 120,  
        },
        {
          id: 10001,
          customer: "Luna",
          date: "2019-9-02",
          amt: 232,  
        },
        {
          id: 10001,
          customer: "Luna",
          date: "2019-10-06",
          amt: 146,  
        },
        {
          id: 10001,
          customer: "Luna",
          date: "2019-9-24",
          amt: 60,  
        },
        {
          id: 10002,
          customer: "Francis",
          date: "2019-8-16",
          amt: 290,
        },
        {
          id: 10002,
          customer: "Francis",
          date: "2019-9-04",
          amt: 75,  
        },
        {
          id: 10002,
          customer: "Francis",
          date: "2019-10-28",
          amt: 40,  
        },
        {
            id: 10003,
            customer: "Helen",
            date: "2019-9-13",
            amt: 230,  
        },
        {
            id: 10004,
            customer: "Moses",
            date: "2019-10-13",
            amt: 290,  
        },
        {
            id: 10003,
            customer: "Helen",
            date: "2019-2-20",
            amt: 110,  
        },
        {
            id: 10005,
            customer: "Nina",
            date: "2019-8-20",
            amt: 165,  
        },
        {
            id: 10002,
            customer: "Francis",
            date: "2019-5-28",
            amt: 148,  
        },
        {
            id: 10003,
            customer: "Helen",
            date: "2019-7-13",
            amt: 30,  
        },
        {
          id: 10006,
          customer: "Einstein",
          date: "2019-2-01",
          amt: 120,  
       },

      ] 
    }
  }

  render(){ 
    return(
        <div>
          <Assignment history={this.state.transactions} monthsFilter={this.state.monthsToFilter}/>
          <h1>Reward Point Accruals</h1>
          <p className="sub-headline">Built With Javascript Using React</p>
          <History history={this.state.transactions} monthsFilter={this.state.monthsToFilter}/>
          <RewardsByTrans history={this.state.transactions} monthsFilter={this.state.monthsToFilter}/>
          <GrandTotal history={this.state.transactions} monthsFilter={this.state.monthsToFilter}/>
          <MonthlyTotals history={this.state.transactions} monthsFilter={this.state.monthsToFilter}/>
         
        </div>
  );    
}
}
export default App;