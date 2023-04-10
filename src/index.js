// const coinCounter = (amount) => {
//   if (isNaN(amount)) {
//     return;
//   } if (amount % 0) {
//     console.log(amount);
//     let quarters = coinCounter(amount - .25);
//     return coinCounter(quarters + 1);
//   }
// }

// const num = 4.99;
// coinCounter(num);

function counter(amount){
  if(isNaN(amount))
  {
    return;
  }
  if(amount >= .25){
    console.log(`Quarters: ${Math.floor(amount/.25)}`);
    return counter(Math.round((amount % .25) * 100) / 100);    
  }
  if(amount >= .10){
    console.log(`Dimes: ${Math.floor(amount / .10)}`);
    return counter(Math.round((amount % .10) * 100) / 100);
  }
  if(amount >= .05){
    console.log(`Nickels: ${Math.floor(amount / .05)}`);
    return counter(Math.round((amount % .05) * 100) / 100);
  }
  if(amount < .05){
    console.log(`Pennies: ${Math.round(amount/.01)}`);
    return;
  }
}
counter(2.06);