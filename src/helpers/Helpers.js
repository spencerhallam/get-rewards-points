export function calcPoints(data) {
    let subTotalArray = [];
    let i;
    // Calculate reward points from transactions data
    for(i in data){
        let totOne = 0;
        if(data[i].amt > 50 && data[i].amt < 100){
            totOne += data[i].amt - 50
        }
        if(data[i].amt > 100){
            totOne += 50 + (data[i].amt - 100)*2
        }

    // Create object containing customerId to calculated points for each transaction.
    let dateObj = new Date(data[i].date);
    let monthCode = dateObj.getMonth();
    let subpoints = {customerId: data[i].id, name: data[i].customer,  date: data[i].date, month: monthCode, amt: data[i].amt, points: totOne };

    // Push object with customerId and earned transaction points to array
    subTotalArray.push(subpoints);
   }
   return subTotalArray
}

export function listCustomerIds(data) {
    let custForEachTrans = [];
    let i;
    for(i in data){
        // Push customer ids into their own array
        custForEachTrans.push(data[i].id);
   }
   return custForEachTrans
}

// Use array of month numbers to filter out unwanted data
export function chooseMonths(arr, months){

    let newArr = [];
    let i;
    for(i in arr){
       if( arr[i].month === months[0] || arr[i].month === months[1] || arr[i].month === months[2] ){
           newArr.push(arr[i]);
       }    
    }

    return newArr

}
// Uses unique customer ids to search through and total earned points for each customer filtered by months indicated
export function getCustSums(arrA, arrB){

    let superSum = [];  
    let i;
    for(i in arrA){
  
      let pointTotA = 0;
      let nameA = "";
      let transQty = 0;
      let j;

      for(j in arrB){
         
          if(arrA[i] === arrB[j].customerId){
         
              pointTotA += arrB[j].points
              nameA = arrB[j].name
              transQty += 1
  
          }
      }  
  
          // Create new object and push to "superSum" array
          let custSum = {id: arrA[i], name: nameA, total: pointTotA, qty: transQty};
          superSum.push(custSum);
      }
  
    return superSum
  
  }
  
// Uses unique user and month filter array to total points for each customer/month
export function getCustMoSums(arrA, arrB, months){

    let superSum = [];
    let i;

    for(i in arrB){
        let j;
        for(j in months){

            let pointTotA = 0;
            let nameA = "see id";
            let monthsA = months[j];
            let transQty = 0;
            //let idA = 0;
            let k   
                for(k in arrA){
                   
                    if(arrA[k].customerId === arrB[i] && arrA[k].month === months[j] && arrA[k].customerId !== 0 ){

                        monthsA = months[j]
                        nameA = arrA[k].name
                        //idA = arrA[k].customerId
                        transQty += 1
                        pointTotA += arrA[k].points
                       
                    }
                }

                // Create new object and push to "superSum" array
                let custSum = {id: arrB[i], name: nameA, month: monthsA, total: pointTotA, qty: transQty};
                if(custSum.id !== 0){
                superSum.push(custSum);
            }
        }
    }

    return superSum

}


// Removes duplicates values from any array
export function removeDupes(arrWithDupes){
    let uniq = [...new Set(arrWithDupes)];
    // console.log("uniq", uniq);
    return uniq;
}

// Utility function: 
export function getMonthString(num){
    let month;
    switch(num)
    {
      case 0:
        month="January";
        break;
      case 1:
        month="February";
        break;
      case 2:
        month="March";
        break;
      case 3:
        month="April";
        break;
      case 4:
        month="May";
        break;
      case 5:
        month="June";
        break;
      case 6:
        month="July";
        break;
      case 7:
        month="August";
        break;
      case 8:
        month="September";
        break;
      case 9:
        month="October";
        break;
      case 10:
        month="November";
        break;
      case 11:
        month="December";
        break;
      default:
        month="Invalid month";
    }
    return month;
}     


// Utility function: 
export function getMoAbrString(num){
    let month;
    switch(num)
    {
      case 0:
        month="Jan";
        break;
      case 1:
        month="Feb";
        break;
      case 2:
        month="Mar";
        break;
      case 3:
        month="Apr";
        break;
      case 4:
        month="May";
        break;
      case 5:
        month="Jun";
        break;
      case 6:
        month="Jul";
        break;
      case 7:
        month="Aug";
        break;
      case 8:
        month="Sep";
        break;
      case 9:
        month="Oct";
        break;
      case 10:
        month="Nov";
        break;
      case 11:
        month="Dec";
        break;
      default:
        month="Invalid month";
    }
    return month;
}   