let tipCalculator = () => {
  var tip = 0;
  var total = 0;
  
  var billAmount = Number(prompt("what is the bill amount?"));
  var tipRate = Number(prompt("what is the tip rate?"));
  
  tip = billAmount * ( tipRate / 100 );
  Math.round(tip);
  total = billAmount + tip;
  
  console.log(`Tip: CHF${tip} | Total : CHF${total}`);
}

tipCalculator();